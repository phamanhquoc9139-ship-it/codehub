const fs = require('fs');

const m7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/math_7.html', 'utf8');
const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

console.log('math_7.html length:', m7.length);
console.log('toan_7.html length:', t7.length);
console.log('Are they identical?', m7 === t7);

// Kiểm tra xem chuỗi trong ảnh 1 xuất hiện ở đâu
const p1 = 'Ví dụ minh họa chuẩn';
console.log('In math_7:', m7.includes(p1));
console.log('In toan_7:', t7.includes(p1));

// Kiểm tra bài 15 trong math_7
const idxM15 = m7.indexOf('Bài 15: Các trường hợp bằng nhau của tam giác vuông');
console.log('math_7 lesson 15 snippet:', m7.substring(idxM15, idxM15 + 1500));
