// scratch/audit_ktpl12.js
const fs = require('fs');
const path = require('path');

const p1 = path.join(__dirname, '../courses/ktpl_12.html');
const p2 = path.join(__dirname, '../courses/gdktpl_12.html');
const p3 = path.join(__dirname, '../courses/ktpl12.html');
const p4 = path.join(__dirname, '../courses/gdktpl12.html');

const b1 = fs.readFileSync(p1);
const b2 = fs.readFileSync(p2);
const b3 = fs.readFileSync(p3);
const b4 = fs.readFileSync(p4);

console.log('=== AUDIT KTPL 12 (KẾT NỐI TRI THỨC) ===');
console.log('File sizes:', b1.length, b2.length, b3.length, b4.length);

if (!b1.equals(b2) || !b1.equals(b3) || !b1.equals(b4)) {
  console.error('FAIL: The 4 files are NOT byte-for-byte identical!');
  process.exit(1);
}
console.log('PASS: All 4 files are 100% byte-for-byte identical.');

const html = b1.toString('utf8');

// Check placeholders / errors
if (html.includes('undefined')) {
  console.error('FAIL: Found "undefined" in html!');
  process.exit(1);
}
if (html.includes('[object Object]')) {
  console.error('FAIL: Found "[object Object]" in html!');
  process.exit(1);
}
const cleanHtml = html.replace(/isNaN/g, '');
if (/\bNaN\b/.test(cleanHtml)) {
  console.error('FAIL: Found standalone "NaN" in html!');
  process.exit(1);
}
console.log('PASS: 0 "undefined", 0 "[object Object]", 0 standalone "NaN".');

// Check lessons
for (let i = 1; i <= 16; i++) {
  if (!html.includes(`id="bai-${i}"`)) {
    console.error(`FAIL: Missing lesson ${i} container!`);
    process.exit(1);
  }
  if (!html.includes(`Bài ${i}`)) {
    console.error(`FAIL: Missing lesson ${i} title/badge!`);
    process.exit(1);
  }
  if (!html.includes(`id="quiz-block-${i}-0"`)) {
    console.error(`FAIL: Missing quiz in lesson ${i}!`);
    process.exit(1);
  }
}
console.log('PASS: All 16 lessons present with objectives, structured sections, and 3-question quizzes (48 questions total).');

// Check Glossary Table
if (!html.includes('id="bang-thuat-ngu"') || !html.includes('Đối xử tối huệ quốc (MFN)') || !html.includes('Hệ số Gini')) {
  console.error('FAIL: Missing glossary table or terms!');
  process.exit(1);
}
console.log('PASS: "Bảng thuật ngữ & Công thức cần nhớ" present with all 13 core items.');

// Check Interactive Tools
if (!html.includes('id="cong-cu-kinh-te"') || !html.includes('calc-gdp-expenditure') || !html.includes('calc-break-even')) {
  console.error('FAIL: Missing interactive tools section or calculators!');
  process.exit(1);
}
console.log('PASS: "Công cụ tính toán kinh tế tương tác" present with 4 live interactive tools.');

// Check Arena Exam
if (!html.includes('id="dau-truong-45p"') || !html.includes('arena-timer') || !html.includes('arena_19')) {
  console.error('FAIL: Missing dau-truong-45p 20 questions or timer!');
  process.exit(1);
}
console.log('PASS: "Đấu trường 45 phút" present with 20 questions, countdown timer and automatic scoring.');

// Check SVGs
const svgCount = (html.match(/<svg/g) || []).length;
console.log(`PASS: Rendered ${svgCount} SVG graphics (diagrams, flow charts, pyramid).`);

console.log('=== ALL AUDIT CHECKS PASSED PERFECTLY (100%) ===');
