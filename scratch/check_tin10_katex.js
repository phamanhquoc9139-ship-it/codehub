const fs = require('fs');
const content = fs.readFileSync('courses/tinhoc_10.html', 'utf8');
console.log('tinhoc_10 has katex:', content.includes('katex'));
