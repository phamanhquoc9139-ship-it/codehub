const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/chuyende_tinhoc_10.html', 'utf8');
const lines = html.split('\n');
console.log(lines.slice(95, 175).join('\n'));
