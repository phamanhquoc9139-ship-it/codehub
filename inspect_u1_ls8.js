const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lsdl_8.html', 'utf8');

const u1 = content.indexOf('id="unit-ls-1"');
const u2 = content.indexOf('id="unit-ls-2"');
console.log('Size of unit-ls-1 in lsdl_8.html:', u2 - u1);
console.log(content.substring(u1, u1 + 4500));
