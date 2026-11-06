const fs = require('fs');
const code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan10.js', 'utf8');

const idx = code.indexOf('renderMathInElement(feedback');
console.log(code.slice(idx - 50, idx + 400));
