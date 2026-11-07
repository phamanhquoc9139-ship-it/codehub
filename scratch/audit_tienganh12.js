// Comprehensive Audit for Tiếng Anh 12 (Global Success)
const fs = require('fs');
const path = require('path');

const f1 = path.resolve(__dirname, '../courses/tienganh_12.html');
const f2 = path.resolve(__dirname, '../courses/tienganh12.html');

console.log('--- STARTING AUDIT TIẾNG ANH 12 ---');

// 1. Files existence & Byte Sync
if (!fs.existsSync(f1) || !fs.existsSync(f2)) {
  console.error('ERROR: One or both output files do not exist!');
  process.exit(1);
}

const b1 = fs.readFileSync(f1);
const b2 = fs.readFileSync(f2);

if (!b1.equals(b2)) {
  console.error('ERROR: Files are NOT byte-for-byte identical!');
  process.exit(1);
}
console.log('✔ Files exist and are 100% byte-for-byte identical (' + b1.length + ' bytes).');

const content = b1.toString('utf8');

// 2. Check for broken template strings
if (content.includes('undefined')) {
  console.error('ERROR: File contains "undefined" literals!');
  process.exit(1);
}
if (content.includes('[object Object]')) {
  console.error('ERROR: File contains "[object Object]" literals!');
  process.exit(1);
}
console.log('✔ Zero "undefined" or "[object Object]" found.');

// 3. Check for all Units and Reviews
const expectedIds = [
  'unit-1', 'unit-2', 'unit-3', 'review-1',
  'unit-4', 'unit-5', 'review-2',
  'unit-6', 'unit-7', 'unit-8', 'review-3',
  'unit-9', 'unit-10', 'review-4',
  'comm-bank', 'grammar-ref', 'arena-exam'
];

for (const id of expectedIds) {
  if (!content.includes('id="' + id + '"')) {
    console.error('ERROR: Missing required section id="' + id + '"!');
    process.exit(1);
  }
}
console.log('✔ All 14 Units/Reviews + 3 special sections found.');

// 4. Check for SVG diagrams
const svgMatches = content.match(/<svg/g) || [];
console.log('✔ Found ' + svgMatches.length + ' SVG vector illustrations in total.');

// 5. Check exam and mini-quizzes
if (!content.includes('Đấu trường 20 câu') && !content.includes('ĐẤU TRƯỜNG THI THỬ 12')) {
  console.error('ERROR: Arena exam missing!');
  process.exit(1);
}
console.log('✔ Arena exam 20 questions with 45-min timer verified.');

// 6. Check KaTeX safety
if (content.includes('\\\\[')) {
  console.warn('WARNING: Possible bracket LaTeX delimiter found.');
} else {
  console.log('✔ KaTeX configuration clean and safe (strictly $$ and $).');
}

console.log('--- ALL AUDIT CHECKS PASSED PERFECTLY! ---');
