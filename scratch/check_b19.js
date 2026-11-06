const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdktpl_10.html', 'utf8');
const idx = html.indexOf('Bài 19');
console.log(html.substring(idx, idx + 1500));
