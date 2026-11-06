const fs = require('fs');

const f = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan7_perfect_katex.js', 'utf8');

console.log('build_toan7_perfect_katex length:', f.length);
// Tìm bài 3 trong build_toan7_perfect_katex
const idx = f.indexOf('3: {');
console.log('Lesson 3 in build_toan7_perfect_katex:');
console.log(f.substring(idx, idx + 1500));
