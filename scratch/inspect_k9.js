const fs = require('fs');
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const marker = 'KHỐI LỚP 9';
const idx = indexHtml.indexOf(marker);
console.log('Marker index:', idx);
if (idx !== -1) {
  console.log(indexHtml.substring(idx - 100, idx + 1500));
}
