const fs = require('fs');
const code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_vatly10_complete.js', 'utf8');
const start = code.indexOf('function parseBlocks');
const end = code.indexOf('function renderBlocks');
console.log(code.substring(start, end));
