const fs = require('fs');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html', 'utf8');

console.log('=== AUDIT REPORT FOR VATLY_10.HTML ===');
console.log('File size:', html.length, 'bytes');

// 1. Lessons check
let missingLessons = [];
for (let i = 1; i <= 34; i++) {
  if (!html.includes(`id="bai-${i}"`)) missingLessons.push(i);
}
console.log('Missing lessons (1-34):', missingLessons.length ? missingLessons : 'None (All 34 present!)');

// 2. Modals check
const modals = ['modal-formulas', 'modal-mistakes', 'modal-search', 'modal-exam'];
modals.forEach(m => {
  console.log('Modal', m, ':', html.includes(`id="${m}"`) ? 'PRESENT' : 'MISSING');
});

// 3. Isolated display math delimiters
// Check if there are cards containing ONLY \[, \], $$, or similar
const emptyEqBlocks = (html.match(/<div[^>]*>\s*\\\[\s*<\/div>/g) || []).length;
console.log('Empty display math blocks with only \\[:', emptyEqBlocks);

// 4. Raw markdown tables check
const rawTables = (html.match(/\|---\|/g) || []).length;
console.log('Raw unparsed markdown tables:', rawTables);

// 5. Check Lesson 3 formula block specifically
const b3Idx = html.indexOf('id="bai-3"');
const b4Idx = html.indexOf('id="bai-4"');
const b3Content = html.substring(b3Idx, b4Idx);
console.log('Bài 3 content length:', b3Content.length);
console.log('Bài 3 contains delta A formula:', b3Content.includes('\\bar{A}') || b3Content.includes('\\bar A'));

// 6. Typography audit
console.log('Contains leading-[1.85]:', html.includes('leading-[1.85]'));
console.log('Contains tracking-[0.015em]:', html.includes('tracking-[0.015em]'));
console.log('Contains space-y-4:', html.includes('space-y-4'));

// 7. Mini quizzes check
let missingQuizzes = [];
for (let i = 1; i <= 34; i++) {
  if (!html.includes(`quiz-exp-${i}`)) missingQuizzes.push(i);
}
console.log('Quizzes present in lessons:', 34 - missingQuizzes.length, '/ 34');

console.log('=== AUDIT COMPLETE ===');
