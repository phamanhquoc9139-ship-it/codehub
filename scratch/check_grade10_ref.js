const fs = require('fs');
const grade10 = fs.readFileSync('courses/grade_10.html', 'utf8');
console.log('grade_10 references tinhoc_10:', grade10.includes('tinhoc_10.html'));
