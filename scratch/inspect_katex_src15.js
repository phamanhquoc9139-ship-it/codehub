const fs = require('fs');
const code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan7_perfect_katex.js', 'utf8');

// Xem bài 15 trong build_toan7_perfect_katex.js
const idx15 = code.indexOf('15: {');
console.log(code.substring(idx15, idx15 + 1500));
