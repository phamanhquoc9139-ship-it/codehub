const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_11.html', 'utf8');

const start = s.indexOf('id="mo-hinh-phan-ung-1"');
const end = s.indexOf('<!--', start + 100);
console.log(s.slice(start + 1200, start + 3500));
