const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const fnIdx = indexHtml.indexOf('function applyFiltering');
console.log(indexHtml.substring(fnIdx - 200, fnIdx + 3000));
