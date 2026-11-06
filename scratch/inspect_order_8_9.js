const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Find all course cards between KHỐI LỚP 8 and KHỐI LỚP 9
const p8 = index.indexOf('<!-- ==================== KHỐI LỚP 8 ==================== -->');
const p9 = index.indexOf('<!-- ==================== KHỐI LỚP 9 ==================== -->');
const chunk8 = index.substring(p8, p9);

const cards8 = [];
const reg = /<!-- Course Card:\s*(.*?)\s*-->/g;
let m;
while ((m = reg.exec(chunk8)) !== null) {
  cards8.push(m[1]);
}
console.log('Cards in Khối 8 (' + cards8.length + '):\n', cards8);

const cards9 = [];
const chunk9 = index.substring(p9, index.indexOf('<!-- ==================== KHỐI LỚP 10 ==================== -->'));
while ((m = reg.exec(chunk9)) !== null) {
  cards9.push(m[1]);
}
console.log('\nCards in Khối 9 (' + cards9.length + '):\n', cards9);
