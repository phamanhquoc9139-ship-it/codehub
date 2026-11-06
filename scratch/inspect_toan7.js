const fs = require('fs');
const p = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html';
const content = fs.readFileSync(p, 'utf8');

let idx = content.indexOf('Các trường hợp bằng nhau');
while (idx !== -1) {
  console.log("Index:", idx);
  console.log(content.substring(idx - 100, idx + 400));
  idx = content.indexOf('Các trường hợp bằng nhau', idx + 1);
}
