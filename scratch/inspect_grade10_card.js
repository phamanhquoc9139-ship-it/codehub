const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

const idx = index.indexOf('courses/grade_10.html');
console.log(index.substring(idx - 350, idx + 350));
