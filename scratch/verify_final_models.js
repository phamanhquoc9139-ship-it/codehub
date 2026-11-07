const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_12.html', 'utf8');
console.log('File size:', s.length, 'bytes');
console.log('Total SVGs in hoahoc_12:', (s.match(/<svg/g) || []).length);
console.log('Reaction models in hoahoc_12:', (s.match(/id="mo-hinh-phan-ung-\d+"/g) || []));
