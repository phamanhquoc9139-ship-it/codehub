const fs = require('fs');
const content = fs.readFileSync('courses/vatly_10.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(8930, 8980).join('\n'));
