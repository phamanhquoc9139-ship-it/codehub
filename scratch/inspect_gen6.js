const fs = require('fs');

const f = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/generate_math7_like_math6.js', 'utf8');

const idx = f.indexOf('Bài 15');
console.log('idx in generate_math7_like_math6:', idx);
if (idx !== -1) {
  console.log(f.substring(idx - 100, idx + 1000));
}
