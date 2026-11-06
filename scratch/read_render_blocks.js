const fs = require('fs');
const code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_vatly10_complete.js', 'utf8');
const idx = code.indexOf("b.type === 'equation'");
console.log(code.substring(idx - 50, idx + 1200));
