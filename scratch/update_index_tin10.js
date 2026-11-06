const fs = require('fs');

const path = 'index.html';
let content = fs.readFileSync(path, 'utf8');

content = content.replace('href="courses/grade_10.html"', 'href="courses/tinhoc_10.html"');
fs.writeFileSync(path, content, 'utf8');
console.log('Updated index.html: Tin học 10 now points to courses/tinhoc_10.html');
