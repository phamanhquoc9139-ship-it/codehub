const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

// Đếm số lượng bài học (article id="lesson-X")
const lessonRegex = /id="lesson-(\d+)"/g;
let match;
const foundLessons = [];
while ((match = lessonRegex.exec(t7)) !== null) {
  foundLessons.push(parseInt(match[1]));
}
console.log('Total lessons in toan_7.html:', foundLessons.length);
console.log('Lesson numbers:', foundLessons);

// Kiểm tra xem có bao nhiêu công thức katex dạng \( hoặc \[ trong toan_7
const inlineMath = (t7.match(/\\\(/g) || []).length;
const displayMath = (t7.match(/\\\[/g) || []).length;
console.log('Inline math count \\(:', inlineMath);
console.log('Display math count \\[:', displayMath);

// Kiểm tra xem có bài nào vẫn còn dạng thô như "x^m" hoặc "x^n" không
const rawExp = (t7.match(/x\^[a-z0-9]/g) || []).length;
console.log('Raw exponent count (x^m):', rawExp);
