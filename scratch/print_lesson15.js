const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const b15 = html.indexOf('id="lesson-15"');
const b16 = html.indexOf('id="lesson-16"');
console.log(html.slice(b15, b16));
