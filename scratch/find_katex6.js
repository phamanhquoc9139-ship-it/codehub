const fs = require('fs');

const t6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_6.html', 'utf8');

const idx = t6.indexOf('renderMathInElement');
console.log('idx in toan_6:', idx);
if (idx !== -1) {
  console.log(t6.substring(idx - 100, idx + 500));
}
