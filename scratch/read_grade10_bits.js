const fs = require('fs');
const content = fs.readFileSync('courses/grade_10.html', 'utf8');
const idx = content.indexOf('Bit (b):');
console.log(content.substring(idx, idx + 600));
