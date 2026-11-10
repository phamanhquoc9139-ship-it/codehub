// cdp_trace_evidence.js - Captures exact Chrome DevTools Performance Trace & Long Tasks breakdown
const http = require('http');
const fs = require('fs');
const path = require('path');

const lhBase = 'C:/Users/ADMIN/.gemini/antigravity/scratch/lh-tools/node_modules';
const chromeLauncher = require(path.join(lhBase, 'chrome-launcher'));
const WebSocket = require(path.join(lhBase, 'ws'));

const CHROME_PATH = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';
const ROOT_DIR = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png'
};

function startLocalServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const cleanUrl = (req.url || '/').split('?')[0];
      let rel = cleanUrl === '/' ? '/index.html' : decodeURIComponent(cleanUrl);
      const filePath = path.join(ROOT_DIR, rel);
      if (!filePath.startsWith(path.normalize(ROOT_DIR)) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.writeHead(404);
        res.end('Not Found');
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function runTrace(targetArg, cpuRate = 1, waitMs = 10000) {
  let server = null;
  let url = targetArg;
  if (targetArg === 'local') {
    server = await startLocalServer();
    url = `http://127.0.0.1:${server.address().port}/index.html`;
  }

  const chrome = await chromeLauncher.launch({
    chromePath: CHROME_PATH,
    chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu']
  });

  try {
    const targets = await getJson(`http://127.0.0.1:${chrome.port}/json/list`);
    const pageTarget = targets.find(t => t.type === 'page') || targets[0];
    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

    let msgId = 0;
    const pending = new Map();
    const events = [];
    let tracingCompleteResolve;
    const tracingComplete = new Promise(r => tracingCompleteResolve = r);

    ws.on('message', (raw) => {
      const msg = JSON.parse(raw.toString());
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      } else if (msg.method === 'Tracing.dataCollected') {
        if (msg.params?.value) events.push(...msg.params.value);
      } else if (msg.method === 'Tracing.tracingComplete') {
        tracingCompleteResolve();
      }
    });

    await new Promise((resolve) => ws.on('open', resolve));

    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const id = ++msgId;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });

    await send('Page.enable');
    await send('Runtime.enable');
    if (cpuRate > 1) {
      await send('Emulation.setCPUThrottlingRate', { rate: cpuRate });
      await send('Emulation.setDeviceMetricsOverride', { width: 412, height: 915, deviceScaleFactor: 2.625, mobile: true });
    } else {
      await send('Emulation.setDeviceMetricsOverride', { width: 1350, height: 940, deviceScaleFactor: 1, mobile: false });
    }

    await send('Tracing.start', {
      transferMode: 'ReportEvents',
      traceConfig: {
        includedCategories: ['toplevel', 'devtools.timeline', 'v8.execute', 'blink.user_timing']
      }
    });

    await send('Page.navigate', { url });
    await new Promise(r => setTimeout(r, waitMs));

    await send('Tracing.end');
    await tracingComplete;

    // Collect runtime info via Runtime.evaluate
    const runtimeCheck = await send('Runtime.evaluate', {
      expression: `JSON.stringify({
        hasLoadPyodide: typeof window.loadPyodide,
        hasTailwindCdn: !!document.querySelector('script[src*="tailwindcss"]'),
        domNodes: document.getElementsByTagName('*').length,
        coursesInDom: document.querySelectorAll('#courses-grid > div').length,
        hasNeuralCanvas: !!document.getElementById('codehub-neural-canvas')
      })`
    });

    ws.close();

    // Analyze trace events (CrRendererMain thread)
    const mainThreadCandidates = {};
    events.forEach(e => {
      if (e.name === 'EvaluateScript' || e.name === 'FunctionCall' || e.name === 'Layout' || e.name === 'UpdateLayoutTree') {
        mainThreadCandidates[e.tid] = (mainThreadCandidates[e.tid] || 0) + 1;
      }
    });
    const mainTid = Number(Object.entries(mainThreadCandidates).sort((a, b) => b[1] - a[1])[0]?.[0] || 0);
    const mainEvents = events.filter(e => e.tid === mainTid && e.ph === 'X' && e.dur);

    const longTasks = mainEvents
      .filter(e => (e.name === 'RunTask' || e.name === 'ThreadControllerImpl::RunTask') && e.dur >= 50000)
      .sort((a, b) => b.dur - a.dur);

    // Aggregate by function/script/category inside long tasks or overall
    const fnAgg = {};
    const evalAgg = {};
    let layoutMs = 0, recalcMs = 0, paintMs = 0, evalMs = 0, fnMs = 0, timerMs = 0, rafMs = 0;

    mainEvents.forEach(e => {
      const ms = e.dur / 1000;
      if (e.name === 'Layout') layoutMs += ms;
      else if (e.name === 'UpdateLayoutTree') recalcMs += ms;
      else if (e.name === 'Paint') paintMs += ms;
      else if (e.name === 'EvaluateScript') {
        evalMs += ms;
        const u = e.args?.data?.url || 'inline';
        evalAgg[u] = (evalAgg[u] || 0) + ms;
      } else if (e.name === 'FunctionCall') {
        fnMs += ms;
        const d = e.args?.data || {};
        const key = `${d.functionName || '(anon)'} @ ${d.url || 'inline'}:${d.lineNumber || 0}`;
        fnAgg[key] = (fnAgg[key] || 0) + ms;
      } else if (e.name === 'TimerFire') {
        timerMs += ms;
      } else if (e.name === 'FireAnimationFrame') {
        rafMs += ms;
      }
    });

    console.log(`\n=== CHROME DEVTOOLS PERFORMANCE TRACE: ${url} (CPU ${cpuRate}x, wait ${waitMs}ms) ===`);
    console.log('Runtime Snapshot:', runtimeCheck.result?.value);
    console.log(`Summary (ms): EvaluateScript=${evalMs.toFixed(1)}, FunctionCall=${fnMs.toFixed(1)}, UpdateLayoutTree=${recalcMs.toFixed(1)}, Layout=${layoutMs.toFixed(1)}, Paint=${paintMs.toFixed(1)}, FireAnimationFrame=${rafMs.toFixed(1)}, TimerFire=${timerMs.toFixed(1)}`);
    console.log(`Long Tasks (>=50ms) count: ${longTasks.length}`);
    longTasks.slice(0, 12).forEach((lt, idx) => {
      const ltStart = lt.ts;
      const ltEnd = lt.ts + lt.dur;
      const children = mainEvents
        .filter(e => e !== lt && e.ts >= ltStart && (e.ts + e.dur) <= ltEnd && e.dur >= 5000 && ['EvaluateScript', 'FunctionCall', 'Layout', 'UpdateLayoutTree', 'FireAnimationFrame', 'EventDispatch', 'TimerFire'].includes(e.name))
        .sort((a, b) => b.dur - a.dur)
        .slice(0, 3)
        .map(c => {
          const d = c.args?.data || {};
          const detail = d.url ? `${d.functionName || c.name}(${d.url.split('/').pop()}:${d.lineNumber || ''})` : c.name;
          return `${detail}:${(c.dur/1000).toFixed(1)}ms`;
        });
      console.log(`  LT#${idx+1}: ${(lt.dur/1000).toFixed(1)}ms -> [${children.join(', ')}]`);
    });

    console.log('\nTop EvaluateScript by URL:');
    Object.entries(evalAgg).sort((a, b) => b[1] - a[1]).slice(0, 10).forEach(([u, ms]) => {
      console.log(`  ${ms.toFixed(1)}ms -> ${u}`);
    });

    console.log('\nTop FunctionCall hotspots:');
    Object.entries(fnAgg).sort((a, b) => b[1] - a[1]).slice(0, 12).forEach(([k, ms]) => {
      console.log(`  ${ms.toFixed(1)}ms -> ${k}`);
    });
  } finally {
    await chrome.kill();
    if (server) server.close();
  }
}

const target = process.argv[2] || 'local';
const cpu = Number(process.argv[3] || 1);
const wait = Number(process.argv[4] || 9000);
runTrace(target, cpu, wait).catch(err => {
  console.error(err);
  process.exit(1);
});
