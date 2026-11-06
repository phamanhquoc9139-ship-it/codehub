const fs = require('fs');

const idx = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const pos = idx.indexOf('courses/gdcd_8.html');
console.log(idx.substring(pos - 400, pos + 400));
