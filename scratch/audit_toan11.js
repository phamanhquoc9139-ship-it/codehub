const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'courses', 'toan_11.html'), 'utf8');
const errors = [];
for (let c = 1; c <= 9; c++) {
  if (!html.includes(`id="chuong-${c}"`)) errors.push(`Missing #chuong-${c}`);
  if (!html.includes(`id="on-tap-chuong-${c}"`)) errors.push(`Missing #on-tap-chuong-${c}`);
}
for (let i = 1; i <= 33; i++) {
  ['bai-' + i, `b${i}-khai-niem`, `b${i}-cong-thuc`, `b${i}-cach-lam`, `b${i}-hinh-minh-hoa`, `b${i}-van-dung`].forEach(id => {
    if (!html.includes(`id="${id}"`)) errors.push('Missing #' + id);
  });
  for (let q = 0; q < 3; q++) if (!html.includes(`id="quiz-card-${i}-${q}"`)) errors.push(`Missing quiz ${i}-${q}`);
}
['thuc-hanh-tap-1', 'thuc-hanh-tap-2', 'bang-cong-thuc-toan-11', 'tap-1', 'tap-2'].forEach(id => {
  if (!html.includes(`id="${id}"`)) errors.push('Missing #' + id);
});
const svgCount = (html.match(/<svg\b/g) || []).length;
if (svgCount < 33) errors.push('SVG count ' + svgCount);
if (!html.includes('href="../index.html"')) errors.push('Missing back link');
if (/>\s*undefined\s*</.test(html) || /\bundefined\b/.test(html.replace(/typeof [a-zA-Z]+ !== 'function'/g, ''))) {
  html.split('\n').forEach((l, i) => { if (l.includes('undefined')) errors.push('undefined at line ' + (i + 1) + ': ' + l.trim().slice(0, 100)); });
}
if (html.includes('>NaN<')) errors.push('NaN leak');
[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].forEach((m, idx) => {
  try { new Function(m[1]); } catch (e) { errors.push(`Script #${idx + 1} syntax: ${e.message}`); }
});
console.log('SVGs:', svgCount, '| Errors:', errors.length);
if (errors.length) { console.log(errors.join('\n')); process.exit(1); }
