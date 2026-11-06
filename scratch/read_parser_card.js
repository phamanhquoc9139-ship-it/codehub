const fs = require('fs');
const code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_vatly10_toan9_theme.js', 'utf8');
const start = code.indexOf('bulletBold');
console.log(code.substring(start - 200, start + 1200));
