const fs = require('fs');
const html = fs.readFileSync('courses/hoahoc_12.html', 'utf8');
const p1 = html.indexOf('id="bai-3"');
const p2 = html.indexOf('id="bai-4"');
console.log(html.slice(p1, p2));
