const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const gridIdx = indexHtml.indexOf('id="courses-grid"');
console.log('Index of id="courses-grid":', gridIdx);
if (gridIdx !== -1) {
  console.log(indexHtml.substring(gridIdx, gridIdx + 1500));
}
