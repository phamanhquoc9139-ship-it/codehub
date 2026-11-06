const fs = require('fs');

const file1 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/mithuat_9.html';
const file2 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/art_9.html';

const html1 = fs.readFileSync(file1, 'utf8');
const html2 = fs.readFileSync(file2, 'utf8');

console.log('--- VERIFICATION SUITE FOR MĨ THUẬT 9 ---');

// Check 1: Files identical and reasonable size
console.log('1. File size check:');
console.log('   mithuat_9.html:', html1.length, 'bytes');
console.log('   art_9.html:', html2.length, 'bytes');
if (html1 === html2) {
  console.log('   [PASS] Both files are identical.');
} else {
  console.error('   [FAIL] Files differ!');
}

// Check 2: Undefined / Null / NaN / [object Object]
console.log('2. Broken strings check:');
const brokenTerms = ['undefined', 'NaN', '[object Object]'];
brokenTerms.forEach(term => {
  const has = html1.includes(term);
  console.log('   Term "' + term + '": ' + (has ? 'FOUND (ERROR)' : '0 occurrences (PASS)'));
  if (has) console.error('   [FAIL] Found ' + term);
});


// Check 3: 16 Lessons + 2 Exhibitions
console.log('3. Lesson articles check:');
let allArticlesOk = true;
for (let i = 1; i <= 16; i++) {
  if (!html1.includes('id="bai-' + i + '"')) {
    console.error('   [FAIL] Missing lesson: bai-' + i);
    allArticlesOk = false;
  }
}
if (!html1.includes('id="trien-lam-1"')) {
  console.error('   [FAIL] Missing trien-lam-1');
  allArticlesOk = false;
}
if (!html1.includes('id="trien-lam-2"')) {
  console.error('   [FAIL] Missing trien-lam-2');
  allArticlesOk = false;
}
if (allArticlesOk) {
  console.log('   [PASS] All 16 lessons + 2 exhibition articles present.');
}

// Check 4: SVGs embedded
console.log('4. SVGs check:');
const svgOpenCount = (html1.match(/<svg /g) || []).length;
const svgCloseCount = (html1.match(/<\/svg>/g) || []).length;
console.log('   SVG opening tags:', svgOpenCount, 'closing tags:', svgCloseCount);
if (svgOpenCount >= 18 && svgOpenCount === svgCloseCount) {
  console.log('   [PASS] At least 18 unique SVGs properly rendered with matching closing tags.');
} else {
  console.error('   [FAIL] SVG count mismatch or insufficient!');
}

// Check 5: Quizzes
console.log('5. Interactive lesson quizzes check:');
const quizItemsCount = (html1.match(/class=\"quiz-item /g) || []).length;
console.log('   Quiz items count:', quizItemsCount);
if (quizItemsCount >= 64) {
  console.log('   [PASS] All lesson quiz items rendered (expected 64+, got ' + quizItemsCount + ').');
} else {
  console.error('   [FAIL] Quiz items count too low!');
}

// Check 6: Trạng Nguyên Exam
console.log('6. Trạng Nguyên 60:00 exam check:');
const examQuestionsCount = (html1.match(/id=\"exam-q-\d+\"/g) || []).length;
console.log('   Exam questions count:', examQuestionsCount);
if (examQuestionsCount === 25) {
  console.log('   [PASS] Exactly 25 Trạng Nguyên questions rendered.');
} else {
  console.error('   [FAIL] Exam question count mismatch!');
}

// Check 7: 10 Glossary Terms
console.log('7. 10 Glossary terms check:');
const terms = [
  "Nguyên mẫu", "Tỉ lệ", "Bố cục", "Hoà sắc", "Tượng tròn",
  "Phù điêu", "Sắp đặt", "Trình diễn", "Mĩ thuật ứng dụng", "Nhận diện thương hiệu"
];
let termsOk = true;
terms.forEach(t => {
  if (!html1.includes(t)) {
    console.error('   [FAIL] Missing glossary term: ' + t);
    termsOk = false;
  }
});
if (termsOk) {
  console.log('   [PASS] All 10 core art glossary terms present.');
}

console.log('--- VERIFICATION COMPLETED ---');
