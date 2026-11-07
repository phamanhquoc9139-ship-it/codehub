const fs = require('fs');
const html = fs.readFileSync('courses/hoahoc_12.html', 'utf8');
const p = html.indexOf('id="b3-noi-dung"');
console.log(html.slice(p, p + 2500));
