const fs = require('fs');
const content = fs.readFileSync('courses/toan_10.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(1250, 1300).join('\n'));
