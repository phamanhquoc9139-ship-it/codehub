const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const index = fs.readFileSync(indexPath, 'utf8');

const p9 = index.indexOf('<!-- ==================== KHỐI LỚP 9 ==================== -->');
const p10 = index.indexOf('<!-- ==================== KHỐI LỚP 10 ==================== -->');
const chunk9 = index.substring(p9, p10);

const reg = /<!-- Course Card:\s*(.*?)\s*-->/g;
let m;
const cards = [];
while ((m = reg.exec(chunk9)) !== null) {
  cards.push(m[1]);
}

console.log('Total cards in Khối Lớp 9:', cards.length);
console.log('Ordered list:\n' + cards.map((c, i) => `${i + 1}. ${c}`).join('\n'));

// Check if any _9 courses exist outside Khối 9
const beforeK9 = index.substring(0, p9);
const afterK10 = index.substring(p10);

const reg9 = /courses\/([a-zA-Z0-9_-]+_9)\.html/g;
let outsideCount = 0;
while ((m = reg9.exec(beforeK9)) !== null) {
  console.warn('WARNING: Found _9 course before K9:', m[1]);
  outsideCount++;
}
while ((m = reg9.exec(afterK10)) !== null) {
  console.warn('WARNING: Found _9 course after K10:', m[1]);
  outsideCount++;
}

if (outsideCount === 0) {
  console.log('PASS: Zero _9 courses misplaced outside Khối Lớp 9!');
} else {
  console.error(`FAIL: ${outsideCount} courses misplaced!`);
}
