const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname, '..', 'courses', 'chuyende_toan_10.html');
const file2 = path.join(__dirname, '..', 'courses', 'chuyende_toan10.html');

console.log('Auditing Chuyên đề Toán 10...');

if (!fs.existsSync(file1)) throw new Error('file1 not found: ' + file1);
if (!fs.existsSync(file2)) throw new Error('file2 not found: ' + file2);

const content1 = fs.readFileSync(file1, 'utf8');
const content2 = fs.readFileSync(file2, 'utf8');

// 1. Byte-for-byte check
if (content1 !== content2) {
  throw new Error('Files are not 100% byte-for-byte identical!');
}
console.log('✓ Byte-for-byte identical: ' + content1.length + ' bytes');

// 2. Corruptions check
const badWords = ['undefined', 'NaN', '[object Object]'];
badWords.forEach(w => {
  if (content1.includes(w)) {
    throw new Error('Found forbidden corruption string: ' + w);
  }
});
console.log('✓ 0 undefined, NaN, [object Object]');

// 3. Lessons check
for (let i = 1; i <= 8; i++) {
  if (!content1.includes('id="bai-' + i + '"')) {
    throw new Error('Missing lesson anchor #bai-' + i);
  }
}
console.log('✓ All 8 lessons #bai-1 to #bai-8 present');

// 4. SVGs check
const svgMatches = content1.match(/<svg/g) || [];
console.log('✓ Total SVGs: ' + svgMatches.length + ' (8 required)');
if (svgMatches.length < 8) {
  throw new Error('Expected at least 8 SVGs, found ' + svgMatches.length);
}

// 5. Core cards check
const pillarMatches = content1.match(/Trụ cột \d/g) || [];
console.log('✓ Total Core Pillars: ' + pillarMatches.length + ' (32 required)');
if (pillarMatches.length !== 32) {
  throw new Error('Expected exactly 32 pillars, found ' + pillarMatches.length);
}

// 6. Cases check
const caseMatches = content1.match(/Bối cảnh & Bài toán:/g) || [];
console.log('✓ Total Cases: ' + caseMatches.length + ' (16 required)');
if (caseMatches.length !== 16) {
  throw new Error('Expected exactly 16 cases, found ' + caseMatches.length);
}

// 7. Inline quizzes check
const quizExpMatches = content1.match(/id="quiz-exp-/g) || [];
console.log('✓ Total Inline Quizzes: ' + quizExpMatches.length + ' (24 required)');
if (quizExpMatches.length !== 24) {
  throw new Error('Expected exactly 24 inline quizzes, found ' + quizExpMatches.length);
}

const inlineBtnMatches = content1.match(/<button[^>]*quiz-btn-/g) || [];
console.log('✓ Total Inline Quiz Buttons: ' + inlineBtnMatches.length + ' (96 required)');
if (inlineBtnMatches.length !== 96) {
  throw new Error('Expected exactly 96 quiz buttons, found ' + inlineBtnMatches.length);
}

// 8. Arena questions check
const arenaBoxMatches = content1.match(/id="arena-box-/g) || [];
console.log('✓ Total Arena Questions: ' + arenaBoxMatches.length + ' (20 required)');
if (arenaBoxMatches.length !== 20) {
  throw new Error('Expected exactly 20 arena questions, found ' + arenaBoxMatches.length);
}

const arenaOptMatches = content1.match(/<button[^>]*arena-opt-/g) || [];
console.log('✓ Total Arena Options: ' + arenaOptMatches.length + ' (80 required)');
if (arenaOptMatches.length !== 80) {
  throw new Error('Expected exactly 80 arena options, found ' + arenaOptMatches.length);
}

// 9. Hero constraints
if (!content1.includes('flex-1 min-w-0')) {
  throw new Error('Missing flex-1 min-w-0 for hero title');
}
if (!content1.includes('w-full lg:w-[380px]')) {
  throw new Error('Missing w-full lg:w-[380px] for hero jump box');
}
console.log('✓ Hero layout constraints strictly satisfied');

// 10. KaTeX scripts check
if (!content1.includes('katex.min.css') || !content1.includes('auto-render.min.js')) {
  throw new Error('KaTeX CDN or auto-render script missing');
}
const rawCodeLaTeX = content1.match(/<code[^>]*>\s*\\/g) || [];
if (rawCodeLaTeX.length > 0) {
  throw new Error('Found raw LaTeX trapped in <code> tags: ' + rawCodeLaTeX.length);
}
console.log('✓ KaTeX CDN & auto-render present, 0 raw LaTeX in code tags');

console.log('\nALL 10 AUDIT CHECKS FOR CHUYÊN ĐỀ TOÁN 10 PASSED WITH FLYING COLORS!');
