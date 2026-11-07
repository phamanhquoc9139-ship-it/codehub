const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_11.html', 'utf8');
const links = s.match(/href="#mo-hinh-phan-ung-[^"]+"/g);
console.log('Links to reaction models:', links);
