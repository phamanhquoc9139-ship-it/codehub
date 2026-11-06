const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const gridIdx = content.indexOf('id="courses-grid"');
const beforeGrid = content.slice(Math.max(0, gridIdx - 4000), gridIdx);
console.log('--- 4000 chars before courses-grid ---');
console.log(beforeGrid);
