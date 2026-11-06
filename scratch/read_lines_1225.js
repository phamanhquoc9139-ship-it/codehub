const fs = require('fs');
const lines = fs.readFileSync('courses/toan_10.html', 'utf8').split('\n');
console.log(lines.slice(1225, 1250).join('\n'));
