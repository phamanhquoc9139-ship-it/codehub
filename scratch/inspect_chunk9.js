const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Find all cards under KHỐI LỚP 9
const p9Start = index.indexOf('<!-- ==================== KHỐI LỚP 9 ==================== -->');
const p10Start = index.indexOf('<!-- ==================== KHỐI LỚP 10 ==================== -->');
const chunk9 = index.substring(p9Start, p10Start);

const cards = [];
const reg = /<!-- Course Card:\s*(.*?)\s*-->/g;
let m;
while ((m = reg.exec(chunk9)) !== null) {
  cards.push(m[1]);
}
console.log('Cards in Khối 9:\n', cards);

// Check if there are other courses in Grade 9 that might be at the bottom or out of order
const hrefs = [];
const hrefReg = /courses\/([a-zA-Z0-9_-]+_9)\.html/g;
while ((m = hrefReg.exec(chunk9)) !== null) {
  hrefs.push(m[1]);
}
console.log('\nHrefs in Khối 9:\n', hrefs);
