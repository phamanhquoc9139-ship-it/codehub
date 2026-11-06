const fs = require('fs');
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const pos = indexHtml.indexOf('courses/gdtc_6.html');
console.log(indexHtml.substring(pos - 150, pos + 1200));
