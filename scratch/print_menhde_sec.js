const fs = require('fs');
const content = fs.readFileSync('courses/toan_10.html', 'utf8');
console.log(content.substring(46800, 48500));
