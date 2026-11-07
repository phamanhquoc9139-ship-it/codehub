const fs = require('fs');
const html = fs.readFileSync('courses/hoahoc_12.html', 'utf8');
const p = html.indexOf('id="bai-3"');
console.log(html.slice(p, p + 3500));
