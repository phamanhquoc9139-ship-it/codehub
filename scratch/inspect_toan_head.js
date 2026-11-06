const fs = require('fs');

const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html';
const content = fs.readFileSync(path, 'utf8');

const idx = content.indexOf('katex.min.js');
console.log('Context of katex.min.js:');
console.log(content.slice(idx - 100, idx + 200));
