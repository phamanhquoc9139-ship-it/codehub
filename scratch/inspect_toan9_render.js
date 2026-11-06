const fs = require('fs');
const content = fs.readFileSync('courses/toan_9.html', 'utf8');
const idx = content.indexOf('function renderMath()');
console.log(content.slice(idx, idx + 800));
