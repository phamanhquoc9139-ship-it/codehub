const fs = require('fs');
const filePath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan7_perfect_katex.js';
let code = fs.readFileSync(filePath, 'utf8');

const startIdx = code.indexOf('15: {');
const endIdx = code.indexOf('16: {');
console.log("Length between 15 and 16:", endIdx - startIdx);
console.log(code.substring(startIdx, endIdx));
