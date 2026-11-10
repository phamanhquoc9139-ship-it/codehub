const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const http = require('http');

const npmCache = path.join(process.env.LOCALAPPDATA || '', 'npm-cache');
console.log('npm-cache exists:', fs.existsSync(npmCache));

const chromePath = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';
console.log('Chrome exists:', fs.existsSync(chromePath));

// Quick test launching headless chrome with remote-debugging-port on ephemeral port
const userDataDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/chrome-test-profile';
if (!fs.existsSync(userDataDir)) fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--remote-debugging-port=9229',
  `--user-data-dir=${userDataDir}`,
  'about:blank'
], { stdio: ['ignore', 'pipe', 'pipe'] });

let stderr = '';
chrome.stderr.on('data', d => stderr += d.toString());

setTimeout(() => {
  http.get('http://127.0.0.1:9229/json/version', (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      console.log('CDP Version OK:', body.trim());
      chrome.kill();
      process.exit(0);
    });
  }).on('error', (err) => {
    console.error('CDP connect failed:', err.message);
    console.error('Chrome stderr:', stderr);
    chrome.kill();
    process.exit(1);
  });
}, 2000);
