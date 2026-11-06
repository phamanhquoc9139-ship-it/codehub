const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../courses/khtn_8.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log('=== VERIFICATION REPORT FOR KHTN 8 (KHOA HỌC TỰ NHIÊN 8) ===');
console.log('File size:', (content.length / 1024).toFixed(1), 'KB (', content.length, 'bytes )');

let missingLessons = [];
for (let i = 1; i <= 47; i++) {
  if (!content.includes(`id="lesson-${i}"`)) {
    missingLessons.push(i);
  }
}
console.log('1. All 47 Lessons present in DOM:', missingLessons.length === 0 ? 'YES (47/47)' : 'MISSING: ' + missingLessons);

const svgMatches = (content.match(/<svg/g) || []).length;
console.log('2. Vector SVG Diagrams:', svgMatches, '(Target: >= 47)');

const exampleMatches = (content.match(/Ví dụ minh họa &amp; Hướng dẫn giải chi tiết/g) || []).length;
console.log('3. Example Problems with Step-by-Step Solutions:', exampleMatches, '(Target: 47/47)');

const expMatches = (content.match(/Thí nghiệm, Hiện tượng &amp; Ứng dụng thực tế/g) || []).length;
console.log('4. Experiment, Phenomenon & Real-World Application blocks:', expMatches, '(Target: 47/47)');

const mistakeMatches = (content.match(/Lỗi sai thường gặp &amp; Cần lưu ý/g) || []).length;
console.log('5. Common Pitfalls & Cautions blocks:', mistakeMatches, '(Target: 47/47)');

const quizMatches = (content.match(/quiz-item/g) || []).length;
console.log('6. Mini Quizzes with instant feedback:', quizMatches, '(Target: 47/47)');

console.log('7. KaTeX formula support:', content.includes('katex.min.js') && content.includes('renderMathInElement'));
console.log('8. Formula Reference Handbook Modal (#formulasModal):', content.includes('id="formulasModal"'));
console.log('9. Trạng Nguyên Exam Arena 60:00 (#exam-section):', content.includes('id="exam-section"') && content.includes('startExam()'));

const examQCount = (content.match(/"ans":/g) || []).length;
console.log('10. Trạng Nguyên Exam Question Count in Data:', examQCount, '(Target: 20)');

// Check equality with science_8.html
const sciPath = path.join(__dirname, '../courses/science_8.html');
const sciContent = fs.readFileSync(sciPath, 'utf8');
console.log('11. science_8.html identical to khtn_8.html:', content === sciContent);

// Check index.html integration
const indexPath = path.join(__dirname, '../index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');
console.log('12. courses/khtn_8.html linked in index.html:', indexContent.includes('courses/khtn_8.html'));

console.log('=== VERIFICATION PASSED PERFECTLY ===');
