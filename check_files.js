const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_6.html', 'utf8');
const matches = cn.match(/\$0/g) || [];
console.log('congnghe_6 has $0 count:', matches.length);
if (matches.length > 0) {
  let idx = 0;
  while ((idx = cn.indexOf('$0', idx)) !== -1) {
    console.log('Found $0 at around:', cn.substring(Math.max(0, idx - 50), Math.min(cn.length, idx + 50)));
    idx += 2;
  }
}

const gdcd = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_6.html', 'utf8');
console.log('gdcd has toggleDarkMode:', gdcd.includes('toggleDarkMode'));
console.log('gdcd has dark mode logic in head:', gdcd.includes('localStorage.theme'));
