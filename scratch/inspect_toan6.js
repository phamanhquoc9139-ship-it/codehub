const fs = require('fs');
const p6 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_6.html';
const c6 = fs.readFileSync(p6, 'utf8');

const p7 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html';
const c7 = fs.readFileSync(p7, 'utf8');

// Tìm cách KaTeX được khởi chạy trong toan_6
const idxKaTeX6 = c6.indexOf('renderMathInElement');
console.log("Toán 6 KaTeX config:", c6.substring(idxKaTeX6 - 100, idxKaTeX6 + 600));

const idxKaTeX7 = c7.indexOf('renderMathInElement');
console.log("Toán 7 KaTeX config:", c7.substring(idxKaTeX7 - 100, idxKaTeX7 + 600));
