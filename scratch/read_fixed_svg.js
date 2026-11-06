const fs = require('fs');

const f = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan7_fixed.js', 'utf8');

const idx = f.indexOf('function getLessonIllustration');
if (idx !== -1) {
  console.log(f.substring(idx, idx + 2000));
} else {
  const idx2 = f.indexOf('<svg');
  console.log(f.substring(idx2, idx2 + 1000));
}
