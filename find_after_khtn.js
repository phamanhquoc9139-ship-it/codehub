const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const khtnIdx = indexHtml.indexOf('courses/khtn_6.html');
console.log(indexHtml.substring(khtnIdx + 1000, khtnIdx + 3000));
