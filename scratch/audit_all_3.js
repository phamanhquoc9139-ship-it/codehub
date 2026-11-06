const fs = require('fs');

const toanPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html';
const toan = fs.readFileSync(toanPath, 'utf8');
console.log('Toan 10 size:', (toan.length / 1024).toFixed(1), 'KB');
console.log('Toan 10 undefined count in titles:', (toan.match(/Bài undefined/g) || []).length);
console.log('Toan 10 KaTeX defined in head:', toan.includes('window.renderMath = function()'));

const vatlyPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html';
const vatly = fs.readFileSync(vatlyPath, 'utf8');
console.log('Vat ly 10 size:', (vatly.length / 1024).toFixed(1), 'KB');
console.log('Vat ly 10 undefined count in titles:', (vatly.match(/Bài undefined/g) || []).length);
console.log('Vat ly 10 triple bar count:', (vatly.match(/≡/g) || []).length);
