const fs = require('fs');
const code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan7_perfect_katex.js', 'utf8');

// Xem thử một số bài trong lessonMathContent
const sample = code.substring(code.indexOf('const lessonMathContent = {'), code.indexOf('const lessonMathContent = {') + 3000);
console.log(sample);
