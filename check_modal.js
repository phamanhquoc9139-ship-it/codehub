const fs = require('fs');
const c = fs.readFileSync('courses/toan_12.html', 'utf8');
console.log('courseQuizModal:', c.includes('courseQuizModal'));
console.log('courseExamForm:', c.includes('courseExamForm'));
console.log('form open count:', (c.match(/<form[\s>]/gi) || []).length);
console.log('form close count:', (c.match(/<\/form>/gi) || []).length);
