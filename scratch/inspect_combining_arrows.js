const fs = require('fs');

let code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/vatly10_diagrams.js', 'utf8');

// Find all occurrences of \u20D7
let count = (code.match(/\u20D7/g) || []).length;
console.log('Original count of \\u20D7:', count);

// Sample occurrences:
const lines = code.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('\u20D7')) {
    console.log(`Line ${idx+1}:`, line.trim());
  }
});
