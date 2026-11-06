const fs = require('fs');

const path = 'courses/grade_10.html';
const content = fs.readFileSync(path, 'utf8');
console.log('grade_10 has katex:', content.includes('katex'));
console.log('grade_10 has 2^10:', content.includes('2^10'));
console.log('grade_10 has 2<sup>10</sup>:', content.includes('2<sup>10</sup>'));
