const fs = require('fs');
const c = fs.readFileSync('courses/toan_12.html', 'utf8');
const idx = c.indexOf('courseExamForm');
console.log('Context around courseExamForm:');
console.log(c.substring(idx - 100, idx + 150));
