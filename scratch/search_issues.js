const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory() && f !== 'node_modules' && f !== '.git') {
      searchDir(full);
    } else if (f.endsWith('.html') || f.endsWith('.js')) {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('undefined')) {
        const matches = c.match(/.{0,20}undefined.{0,20}/g);
        if (matches && matches.some(m => m.includes('Bài') || m.includes('bai'))) {
          console.log(full, matches.filter(m => m.includes('Bài') || m.includes('bai')).slice(0, 5));
        }
      }
    }
  }
}
searchDir('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform');
console.log('Done searching.');
