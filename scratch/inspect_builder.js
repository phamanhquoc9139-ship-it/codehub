const fs = require('fs');

const s = fs.readFileSync('scratch/build_ktpl10_full.js', 'utf8');
const p1 = s.indexOf('function formatMarkdownToCards');
const p2 = s.indexOf('// Render Mini-Quiz HTML', p1);
console.log('p1:', p1, 'p2:', p2);
console.log(s.slice(p1, p1 + 500));
