const fs = require('fs');

const idx = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const k8Start = idx.indexOf('Khối 8') !== -1 ? idx.indexOf('Khối 8') : idx.indexOf('Lớp 8');
console.log('Position of Lop 8 in index.html:', k8Start);
if (k8Start !== -1) {
  console.log(idx.substring(k8Start - 200, k8Start + 2000));
}
