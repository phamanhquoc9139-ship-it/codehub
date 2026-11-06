const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const p8 = index.indexOf('<!-- ==================== KHỐI LỚP 8 ==================== -->');
const p9 = index.indexOf('<!-- ==================== KHỐI LỚP 9 ==================== -->');
const chunk8 = index.substring(p8, p9);

const matches = [];
let idx = 0;
while ((idx = chunk8.indexOf('.html', idx)) !== -1) {
  const start = chunk8.lastIndexOf('courses/', idx);
  if (start > -1 && idx - start < 50) {
    const file = chunk8.substring(start, idx + 5);
    const h3Start = chunk8.indexOf('<h3', idx);
    const h3End = chunk8.indexOf('</h3>', h3Start);
    const title = h3Start > -1 && h3End > -1 ? chunk8.substring(h3Start, h3End).replace(/<[^>]+>/g, '').trim() : '';
    matches.push({ file, title });
  }
  idx += 5;
}

console.log('Khối 8 subjects in order:');
matches.forEach(m => console.log(`${m.file} : ${m.title}`));
