const fs = require('fs');
const path = require('path');

const srcBase = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';
const backupBase = 'C:/Users/ADMIN/.gemini/antigravity/scratch/backups/pre-perf-opt-20261110';

function copyRecursive(src, dst) {
  if (!fs.existsSync(dst)) fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (entry.name === 'courses' || entry.name === 'scratch') continue; // untouched 260MB courses dir
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(s, d);
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.css') || entry.name.endsWith('.json')) {
      fs.copyFileSync(s, d);
    }
  }
}

copyRecursive(srcBase, backupBase);
console.log('Backup snapshot created at:', backupBase);
