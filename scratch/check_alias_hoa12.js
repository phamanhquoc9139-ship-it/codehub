const fs = require('fs');

const f1 = fs.readFileSync('courses/hoahoc_12.html');
const f2 = fs.readFileSync('courses/hoa12.html');
const f3 = fs.readFileSync('courses/hoahoc12.html');
const f4 = fs.readFileSync('courses/hoa_12.html');

console.log('hoahoc_12.html size:', f1.length);
console.log('hoa12.html size:', f2.length, 'equals hoahoc_12?', f1.equals(f2));
console.log('hoahoc12.html size:', f3.length, 'equals hoahoc_12?', f1.equals(f3));
console.log('hoa_12.html size:', f4.length, 'equals hoahoc_12?', f1.equals(f4));
