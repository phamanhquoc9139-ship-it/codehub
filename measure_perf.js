// measure_perf.js - Serves cs-learning-platform locally and runs Lighthouse Mobile & Desktop + Chrome Performance Breakdown
const http = require('http');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const lhBase = 'C:/Users/ADMIN/.gemini/antigravity/scratch/lh-tools/node_modules';
const chromeLauncher = require(path.join(lhBase, 'chrome-launcher'));

const ROOT_DIR = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';
const OUT_DIR = 'C:/Users/ADMIN/.gemini/antigravity/scratch/perf-reports';
const CHROME_PATH = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon'
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const cleanUrl = (req.url || '/').split('?')[0];
      let rel = cleanUrl === '/' ? '/index.html' : decodeURIComponent(cleanUrl);
      const filePath = path.join(ROOT_DIR, rel);
      if (!filePath.startsWith(path.normalize(ROOT_DIR)) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not Found: ' + rel);
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': MIME[ext] || 'application/octet-stream',
        'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000'
      });
      fs.createReadStream(filePath).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => {
      resolve(server);
    });
  });
}

function summarizeLhr(label, lhr) {
  const cats = lhr.categories;
  const audits = lhr.audits;
  const score = (id) => Math.round((cats[id]?.score || 0) * 100);
  const val = (id) => audits[id]?.displayValue || 'n/a';
  const num = (id) => audits[id]?.numericValue;

  console.log(`\n================ ${label} ================`);
  console.log(`Scores -> Performance: ${score('performance')} | Accessibility: ${score('accessibility')} | Best Practices: ${score('best-practices')} | SEO: ${score('seo')}`);
  console.log(`Metrics -> FCP: ${val('first-contentful-paint')} | LCP: ${val('largest-contentful-paint')} | TBT: ${val('total-blocking-time')} | SI: ${val('speed-index')} | CLS: ${val('cumulative-layout-shift')}`);
  console.log(`Resources -> Main-thread: ${val('mainthread-work-breakdown')} | JS exec: ${val('bootup-time')} | Total Payload: ${val('total-byte-weight')} | DOM size: ${val('dom-size')}`);

  const longTasks = audits['long-tasks']?.details?.items || [];
  console.log(`Long tasks count: ${longTasks.length}`);
  longTasks.slice(0, 8).forEach((t, i) => {
    console.log(`  LT#${i+1}: ${Math.round(t.duration)}ms @ ${Math.round(t.startTime)}ms (${t.url || 'unknown'})`);
  });

  const bootup = audits['bootup-time']?.details?.items || [];
  console.log(`Top JS Execution (bootup-time):`);
  bootup.slice(0, 6).forEach((b) => {
    console.log(`  ${Math.round(b.total)}ms (parse ${Math.round(b.scripting)}ms) -> ${b.url}`);
  });

  // Failing audits per category (non-perf)
  for (const catId of ['accessibility', 'best-practices', 'seo']) {
    const refs = cats[catId]?.auditRefs || [];
    const failed = refs.filter(r => audits[r.id] && audits[r.id].score !== null && audits[r.id].score < 1);
    console.log(`Failing ${catId} audits (${failed.length}):`);
    failed.forEach(r => {
      const a = audits[r.id];
      const count = a.details?.items?.length || 0;
      console.log(`  - [${r.id}] ${a.title} (score=${a.score}, items=${count})`);
      if (['errors-in-console', 'deprecations', 'color-contrast', 'aria-allowed-attr', 'nested-interactive', 'button-name', 'landmark-one-main'].includes(r.id) && count > 0) {
        a.details.items.slice(0, 5).forEach(it => {
          console.log('      *', JSON.stringify(it).substring(0, 220));
        });
      }
    });
  }
}

async function main() {
  const tag = process.argv[2] || 'baseline';
  const targetPath = process.argv[3] || '/index.html';
  const lighthouseMod = await import(pathToFileURL(path.join(lhBase, 'lighthouse', 'core', 'index.js')).href);
  const lighthouse = lighthouseMod.default;
  const desktopConfig = (await import(pathToFileURL(path.join(lhBase, 'lighthouse', 'core', 'config', 'desktop-config.js')).href)).default;

  const server = await startServer();
  const port = server.address().port;
  const url = `http://127.0.0.1:${port}${targetPath}`;
  console.log(`Serving ${ROOT_DIR} at ${url}`);

  const chrome = await chromeLauncher.launch({
    chromePath: CHROME_PATH,
    chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu']
  });

  try {
    // 1. Mobile Run
    const mobileRes = await lighthouse(url, {
      port: chrome.port,
      output: 'json',
      logLevel: 'error'
    });
    fs.writeFileSync(path.join(OUT_DIR, `${tag}-mobile.json`), mobileRes.report);
    summarizeLhr(`${tag.toUpperCase()} - MOBILE`, mobileRes.lhr);

    // 2. Desktop Run
    const desktopRes = await lighthouse(url, {
      port: chrome.port,
      output: 'json',
      logLevel: 'error'
    }, desktopConfig);
    fs.writeFileSync(path.join(OUT_DIR, `${tag}-desktop.json`), desktopRes.report);
    summarizeLhr(`${tag.toUpperCase()} - DESKTOP`, desktopRes.lhr);
  } finally {
    await chrome.kill();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
