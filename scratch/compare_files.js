const fs = require('fs');
const toan7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');
const math7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/math_7.html', 'utf8');

console.log("toan_7 length:", toan7.length);
console.log("math_7 length:", math7.length);
console.log("Are they identical?", toan7 === math7);
