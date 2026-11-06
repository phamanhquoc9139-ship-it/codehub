const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const start = t7.indexOf('id="lesson-3"');
const end = t7.indexOf('id="lesson-4"');
console.log(t7.substring(start, end));
