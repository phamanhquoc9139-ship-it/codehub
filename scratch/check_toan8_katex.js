const fs = require('fs');
const content = fs.readFileSync('courses/toan_8.html', 'utf8');
const idx = content.indexOf('katex');
console.log(content.substring(idx - 50, idx + 800));
