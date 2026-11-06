const fs = require('fs');

const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/grade_10.html';
const content = fs.readFileSync(path, 'utf8');

const idx = content.indexOf('2^10');
console.log('Index of 2^10 in grade_10.html:', idx);
if (idx !== -1) {
  console.log(content.slice(idx - 100, idx + 200));
}
