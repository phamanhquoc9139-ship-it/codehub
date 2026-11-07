const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_10.html', 'utf8');

// Find Lesson 1 in hoahoc_10
const startL1 = s.indexOf('Bài 1.');
console.log('Sample Lesson 1:');
console.log(s.slice(startL1 - 100, startL1 + 3000));
