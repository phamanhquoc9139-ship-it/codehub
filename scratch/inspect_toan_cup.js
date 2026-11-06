const fs = require('fs');

const toan = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

const idx = toan.indexOf('A \\cup B = \\{x \\mid x \\in A');
console.log('Context around A \\cup B:');
console.log(toan.slice(idx - 200, idx + 400));
