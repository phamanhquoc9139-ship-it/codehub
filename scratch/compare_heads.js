const fs = require('fs');
const t6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_6.html', 'utf8');
const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

console.log('--- TOAN 6 HEAD STYLES & FONTS ---');
console.log(t6.slice(0, t6.indexOf('</head>')));

console.log('--- TOAN 7 HEAD STYLES & FONTS ---');
console.log(t7.slice(0, t7.indexOf('</head>')));
