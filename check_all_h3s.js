const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Find all cards inside #courses-grid
const gridIdx = indexHtml.indexOf('id="courses-grid"');
const gridCloseIdx = indexHtml.indexOf('</div>', indexHtml.indexOf('<!-- Phân trang', gridIdx) - 200);

// Let's find every h3 inside #courses-grid
const h3Regex = /<h3[^>]*>([\s\S]*?)<\/h3>/g;
h3Regex.lastIndex = gridIdx;
const h3s = [];
let m;
while ((m = h3Regex.exec(indexHtml)) !== null) {
  // If we reached after grid, stop
  if (indexHtml.indexOf('id="courses-grid"') < m.index && m.index < indexHtml.indexOf('id="no-courses-found"')) {
    h3s.push(m[1].replace(/<[^>]+>/g, '').trim());
  }
}

console.log('Total H3s inside courses-grid:', h3s.length);
console.log('H3s matching "tin":', h3s.filter(t => t.toLowerCase().includes('tin')));
console.log('H3s matching "4":', h3s.filter(t => t.includes('4')));
console.log('H3s matching "tin" and "4":', h3s.filter(t => t.toLowerCase().includes('tin') && t.includes('4')));
