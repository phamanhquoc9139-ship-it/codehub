const fs = require('fs');
const stat = fs.statSync('courses/toan_10.html');
console.log('toan_10.html mtime:', stat.mtime);
