const fs = require('fs');
const content = fs.readFileSync('courses/toan_10.html', 'utf8');
const bottom = content.substring(content.length - 2000);
console.log(bottom);
