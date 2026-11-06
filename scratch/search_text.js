const fs = require('fs');
const path = require('path');

function searchAll(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory() && f !== 'node_modules' && f !== '.git') {
      searchAll(full);
    } else if (f.endsWith('.html') || f.endsWith('.js')) {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('nhiệt kế') || c.includes('Tiếng trống')) {
        console.log('Found in:', full);
        const matches = c.match(/.{0,40}nhiệt kế.{0,40}/g);
        console.log('  Matches:', matches);
      }
    }
  }
}
searchAll('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform');
