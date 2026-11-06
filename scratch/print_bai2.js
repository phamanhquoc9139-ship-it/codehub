const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

const idx = content.indexOf('Phép hợp (Union)');
console.log(content.slice(idx - 100, idx + 1200));
