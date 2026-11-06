const fs = require('fs');
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Find mithuat_8 in index.html
const idx8 = indexHtml.indexOf('mithuat_8.html');
if (idx8 !== -1) {
  console.log('Found mithuat_8 snippet:');
  console.log(indexHtml.substring(idx8 - 200, idx8 + 400));
} else {
  console.log('mithuat_8.html not found in index.html');
}

// Find grade 9 section
const idxK9 = indexHtml.indexOf('Khối 9') !== -1 ? indexHtml.indexOf('Khối 9') : indexHtml.indexOf('Lớp 9');
console.log('Grade 9 section index:', idxK9);
