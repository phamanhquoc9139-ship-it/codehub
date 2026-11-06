const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const lines = content.split('\n');
console.log(lines.slice(140, 160).join('\n'));
