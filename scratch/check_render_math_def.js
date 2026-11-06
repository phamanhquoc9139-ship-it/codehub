const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

const idx = content.indexOf('function renderMath');
console.log('function renderMath index:', idx);
if (idx !== -1) {
  console.log(content.slice(idx, idx + 1000));
} else {
  console.log('function renderMath NOT FOUND!');
}
