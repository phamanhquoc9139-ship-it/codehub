const fs = require('fs');
const content = fs.readFileSync('courses/toan_10.html', 'utf8');
console.log(content.substring(48500, 52000));
