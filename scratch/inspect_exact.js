const fs = require('fs');

const f = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan7_exact_toan6.js', 'utf8');

const idx = f.indexOf('Bài 15');
console.log('idx in build_toan7_exact_toan6:', idx);
if (idx !== -1) {
  console.log(f.substring(idx - 100, idx + 1000));
}
