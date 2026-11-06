const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const p9 = index.indexOf('<!-- ==================== KHỐI LỚP 9 ==================== -->');
const p10 = index.indexOf('<!-- ==================== KHỐI LỚP 10 ==================== -->');
const chunk9 = index.substring(p9, p10 > -1 ? p10 : p9 + 50000);

const matches = [];
let idx = 0;
while ((idx = chunk9.indexOf('.html', idx)) !== -1) {
  const start = chunk9.lastIndexOf('courses/', idx);
  if (start > -1 && idx - start < 50) {
    const file = chunk9.substring(start, idx + 5);
    const h3Start = chunk9.indexOf('<h3', idx);
    const h3End = chunk9.indexOf('</h3>', h3Start);
    const title = h3Start > -1 && h3End > -1 ? chunk9.substring(h3Start, h3End).replace(/<[^>]+>/g, '').trim() : '';
    matches.push({ file, title });
  }
  idx += 5;
}

console.log('Khối 9 subjects in order:');
matches.forEach(m => console.log(`${m.file} : ${m.title}`));
