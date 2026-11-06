const fs = require('fs');
const gdcd = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_8.html', 'utf8');

const idx = gdcd.indexOf('function checkQuizAnswer');
console.log(gdcd.slice(idx, idx + 1200));
