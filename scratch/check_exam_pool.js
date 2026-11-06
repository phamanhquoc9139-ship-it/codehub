const fs = require('fs');
const code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan10.js', 'utf8');

const exIdx = code.indexOf('examPool');
console.log(code.slice(exIdx - 100, exIdx + 400));
