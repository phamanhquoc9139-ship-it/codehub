const fs = require('fs');
const code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan10.js', 'utf8');

const qIdx = code.indexOf('function checkQuiz');
console.log(code.slice(qIdx - 100, qIdx + 800));
