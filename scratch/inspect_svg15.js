const fs = require('fs');
const genFile = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/generate_math7_like_math6.js', 'utf8');

const idx15 = genFile.indexOf('15: `');
console.log(genFile.substring(idx15, idx15 + 1200));
