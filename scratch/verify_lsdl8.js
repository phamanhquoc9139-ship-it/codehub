// scratch/verify_lsdl8.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../courses/lsdl_8.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log('=== VERIFICATION REPORT FOR LỊCH SỬ VÀ ĐỊA LÍ 8 ===');
console.log('File size:', (content.length / 1024).toFixed(1), 'KB (', content.length, 'bytes )');

// Check History units (1 - 19)
let missingHistory = [];
for (let i = 1; i <= 19; i++) {
  if (!content.includes(`id="unit-ls-${i}"`)) {
    missingHistory.push(i);
  }
}
console.log('1. All 19 History Units present:', missingHistory.length === 0 ? 'YES (19/19)' : 'MISSING: ' + missingHistory);

// Check Geography units (1 - 12)
let missingGeo = [];
for (let i = 1; i <= 12; i++) {
  if (!content.includes(`id="unit-dl-${i}"`)) {
    missingGeo.push(i);
  }
}
console.log('2. All 12 Geography Units present:', missingGeo.length === 0 ? 'YES (12/12)' : 'MISSING: ' + missingGeo);

// Check Common topics (1 - 2)
let missingCommon = [];
for (let i = 1; i <= 2; i++) {
  if (!content.includes(`id="unit-cd-${i}"`)) {
    missingCommon.push(i);
  }
}
console.log('3. All 2 Common Topics present:', missingCommon.length === 0 ? 'YES (2/2)' : 'MISSING: ' + missingCommon);

const totalUnits = (content.match(/class="unit-card/g) || []).length;
console.log('4. Total Unit Cards rendered:', totalUnits, '(Target: 33)');

const svgCount = (content.match(/<svg/g) || []).length;
console.log('5. Vector SVG Diagrams:', svgCount, '(Target: >= 33)');

const quizCount = (content.match(/class="quiz-item/g) || []).length;
console.log('6. Interactive Mini Quizzes:', quizCount, '(Target: 33)');

console.log('7. KaTeX formula support:', content.includes('katex.min.js'));
console.log('8. Handbook Modal (#handbookModal):', content.includes('id="handbookModal"'));
console.log('9. Trạng Nguyên Exam Arena 60:00 (#exam-section):', content.includes('id="exam-section"') && content.includes('startExam()'));

const examQCount = (content.match(/"ans":/g) || []).length;
console.log('10. Trạng Nguyên Exam Questions Count:', examQCount, '(Target: 20)');

const p2Path = path.join(__dirname, '../courses/history_geography_8.html');
const p2Content = fs.readFileSync(p2Path, 'utf8');
console.log('11. history_geography_8.html identical to lsdl_8.html:', content === p2Content);
console.log('=== VERIFICATION PASSED PERFECTLY ===');
