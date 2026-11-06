const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const file1 = path.join(baseDir, 'courses', 'toan_9.html');
const file2 = path.join(baseDir, 'courses', 'math_9.html');
const indexFile = path.join(baseDir, 'index.html');

console.log('--- VERIFYING TOÁN 9 ---');

let hasError = false;

// 1. Check file existence
if (!fs.existsSync(file1) || !fs.existsSync(file2)) {
  console.error('FAIL: Missing HTML file(s)!');
  process.exit(1);
}

const c1 = fs.readFileSync(file1, 'utf8');
const c2 = fs.readFileSync(file2, 'utf8');

console.log(`toan_9.html size: ${c1.length} chars`);
console.log(`math_9.html size: ${c2.length} chars`);

// 2. Synchronization
if (c1 !== c2) {
  console.error('FAIL: toan_9.html and math_9.html are not identical!');
  hasError = true;
} else {
  console.log('PASS: Both files are 100% synchronized byte-for-byte.');
}

// 3. Corrupt tokens
const invalidTokens = ['undefined', 'NaN', '[object Object]'];
for (const token of invalidTokens) {
  if (c1.includes(token)) {
    console.error(`FAIL: Detected corrupt token "${token}" in HTML!`);
    hasError = true;
  }
}
if (!hasError) {
  console.log('PASS: No corrupt tokens (undefined, NaN, [object Object]).');
}

// 4. All 10 Chapters
for (let i = 1; i <= 10; i++) {
  const chapId = `id="chuong-${i}"`;
  if (!c1.includes(chapId)) {
    console.error(`FAIL: Missing chapter ${chapId}!`);
    hasError = true;
  }
}
console.log('PASS: All 10 Chapters (chuong-1 to chuong-10) present.');

// 5. All 32 Lessons
for (let i = 1; i <= 32; i++) {
  const lessonId = `id="bai-${i}"`;
  if (!c1.includes(lessonId)) {
    console.error(`FAIL: Missing lesson ${lessonId}!`);
    hasError = true;
  }
}
console.log('PASS: All 32 Lessons (bai-1 to bai-32) present.');

// 6. Practical & 6 Steps
if (c1.includes('id="thuc-hanh-trai-nghiem"') && c1.includes('id="quy-trinh-giai-toan"')) {
  console.log('PASS: Practical projects and 6-step problem-solving sections present.');
} else {
  console.error('FAIL: Missing practical projects or 6-step problem-solving section!');
  hasError = true;
}

// 7. Embedded SVGs
const svgCount = (c1.match(/<svg/g) || []).length;
console.log(`Embedded SVGs found: ${svgCount}`);
if (svgCount < 14) {
  console.error(`FAIL: Expected at least 14 SVGs, found ${svgCount}`);
  hasError = true;
} else {
  console.log('PASS: 14+ SVG diagrams embedded.');
}

// 8. 4 Modals
const modals = ['modal-formulas', 'modal-mistakes', 'modal-exam', 'modal-search'];
for (const m of modals) {
  if (!c1.includes(`id="${m}"`)) {
    console.error(`FAIL: Missing modal id="${m}"!`);
    hasError = true;
  }
}
console.log('PASS: All 4 modals present.');

// 9. KaTeX
if (c1.includes('katex@0.16.8') && c1.includes('renderMathInElement')) {
  console.log('PASS: KaTeX engine configured.');
} else {
  console.error('FAIL: Missing KaTeX configuration!');
  hasError = true;
}

// 10. Exam Questions
if (c1.includes('Đấu Trường Trạng Nguyên Toán') && c1.includes('examQuestions')) {
  console.log('PASS: Trạng Nguyên exam dataset and engine present.');
} else {
  console.error('FAIL: Trạng Nguyên exam missing!');
  hasError = true;
}

// 11. Index.html check
const indexContent = fs.readFileSync(indexFile, 'utf8');
if (indexContent.includes('courses/toan_9.html')) {
  console.log('PASS: index.html contains course card linking to courses/toan_9.html.');
} else {
  console.error('FAIL: index.html does not contain courses/toan_9.html!');
  hasError = true;
}

if (hasError) {
  console.error('VERIFICATION FAILED!');
  process.exit(1);
} else {
  console.log('🎉 ALL VERIFICATION CHECKS PASSED FOR TOÁN 9!');
}
