const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdqp_10.html', 'utf8');
const idx = html.indexOf('Quy trình 4 bước Cấp cứu ban đầu');
const s = html.indexOf('<svg', idx);
const e = html.indexOf('</svg>', s);
console.log(html.substring(s, e + 6));
