const fs = require('fs');
const index = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const idx = index.indexOf('courses/hdtn_8.html');
console.log(index.slice(idx - 100, idx + 800));
