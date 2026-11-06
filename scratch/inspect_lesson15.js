const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html';
const html = fs.readFileSync(path, 'utf8');
const target = 'id="lesson-15"';
const idx = html.indexOf(target);
console.log('Index:', idx);
if (idx !== -1) {
  console.log(html.substring(idx - 50, idx + 4000));
}
