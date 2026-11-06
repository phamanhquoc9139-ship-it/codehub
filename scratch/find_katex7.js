const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const idx = t7.indexOf('renderMathInElement');
console.log('idx in toan_7:', idx);
if (idx !== -1) {
  console.log(t7.substring(idx - 100, idx + 500));
}
