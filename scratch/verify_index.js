const fs = require('fs');
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const idx = indexHtml.indexOf('Công Nghệ 8');
console.log("Found Công Nghệ 8 in index.html at:", idx);
console.log(indexHtml.substring(idx - 100, idx + 400));
