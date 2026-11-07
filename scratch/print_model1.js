const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_11.html', 'utf8');

const start = s.indexOf('id="mo-hinh-phan-ung-1"');
const next = s.indexOf('id="mo-hinh-phan-ung-5"');
console.log(s.slice(start, start + 2500));
