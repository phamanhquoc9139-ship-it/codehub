const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_11.html', 'utf8');

const idx = s.indexOf('id="mo-hinh-phan-ung-24"');
console.log(s.slice(idx, idx + 2000));
