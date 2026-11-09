// scratch/audit_cd_hoahoc10.js
// Comprehensive audit for Chuyên đề Hóa học 10

const fs = require('fs');
const path = require('path');

console.log('Auditing Chuyên đề Hóa học 10...');

const f1 = path.join(__dirname, '../courses/chuyende_hoahoc_10.html');
const f2 = path.join(__dirname, '../courses/chuyende_hoa_10.html');
const f3 = path.join(__dirname, '../courses/chuyende_hoahoc10.html');

const b1 = fs.readFileSync(f1);
const b2 = fs.readFileSync(f2);
const b3 = fs.readFileSync(f3);

if (b1.length !== b2.length || b1.length !== b3.length || !b1.equals(b2) || !b1.equals(b3)) {
  console.error('FAIL: Target files are not byte-for-byte identical!');
  process.exit(1);
}
console.log('✓ Byte-for-byte identical across all 3 files: ' + b1.length + ' bytes');

const content = b1.toString('utf8');

// 1. Check for corruptions
['undefined', 'NaN', '[object Object]'].forEach(bad => {
  if (content.includes(bad)) {
    console.error(`FAIL: Found literal string "${bad}" in content`);
    process.exit(1);
  }
});
console.log('✓ 0 undefined, NaN, [object Object]');

// 2. Check 11 lessons
for (let i = 1; i <= 11; i++) {
  if (!content.includes(`id="bai-${i}"`)) {
    console.error(`FAIL: Missing lesson #bai-${i}`);
    process.exit(1);
  }
}
console.log('✓ All 11 lessons #bai-1 to #bai-11 present');

// 3. Check SVGs
const svgCount = (content.match(/<svg/g) || []).length;
if (svgCount < 11) {
  console.error(`FAIL: Found only ${svgCount} SVGs, expected at least 11`);
  process.exit(1);
}
console.log(`✓ Total SVGs: ${svgCount} (>= 11 required)`);

// 4. Check Pillars (44 required)
const pillarCount = (content.match(/Trụ cột \d+ \/ 4/g) || []).length;
if (pillarCount !== 44) {
  console.error(`FAIL: Found ${pillarCount} pillars, expected 44`);
  process.exit(1);
}
console.log(`✓ Total Core Pillars: ${pillarCount} (44 required)`);

// 5. Check Cases (22 required)
const caseCount = (content.match(/Case Study 0[12]/g) || []).length;
if (caseCount !== 22) {
  console.error(`FAIL: Found ${caseCount} cases, expected 22`);
  process.exit(1);
}
console.log(`✓ Total Cases: ${caseCount} (22 required)`);

// 6. Check Inline Quizzes (33 required)
const quizCount = (content.match(/Câu hỏi [123] \/ 3/g) || []).length;
if (quizCount !== 33) {
  console.error(`FAIL: Found ${quizCount} inline quizzes, expected 33`);
  process.exit(1);
}
console.log(`✓ Total Inline Quizzes: ${quizCount} (33 required)`);

// 7. Check Inline Quiz Buttons (132 required)
const quizBtnCount = (content.match(/onclick="checkInlineQuiz\(/g) || []).length;
if (quizBtnCount !== 132) {
  console.error(`FAIL: Found ${quizBtnCount} quiz buttons, expected 132`);
  process.exit(1);
}
console.log(`✓ Total Inline Quiz Buttons: ${quizBtnCount} (132 required)`);

// 8. Check Arena Questions (20 required)
const arenaCount = (content.match(/id="arena-q-\d+"/g) || []).length;
if (arenaCount !== 20) {
  console.error(`FAIL: Found ${arenaCount} arena questions, expected 20`);
  process.exit(1);
}
console.log(`✓ Total Arena Questions: ${arenaCount} (20 required)`);

// 9. Check Arena Option Buttons (80 required)
const arenaBtnCount = (content.match(/onclick="selectArenaOpt\(/g) || []).length;
if (arenaBtnCount !== 80) {
  console.error(`FAIL: Found ${arenaBtnCount} arena option buttons, expected 80`);
  process.exit(1);
}
console.log(`✓ Total Arena Options: ${arenaBtnCount} (80 required)`);

// 10. Check Tables
if (!content.includes('min-w-[980px]') || !content.includes('min-w-[860px]')) {
  console.error('FAIL: Missing responsive min-width on summary or formula tables');
  process.exit(1);
}
console.log('✓ Summary & Formula tables have responsive min-width constraints');

// 11. Check KaTeX scripts & auto-render
if (!content.includes('katex.min.css') || !content.includes('renderMathInElement') || !content.includes('mathRetryCount')) {
  console.error('FAIL: KaTeX CDN, auto-render or retry mechanism missing');
  process.exit(1);
}
console.log('✓ KaTeX CDN, auto-render & retry loop fully configured');

console.log('\nALL 11 AUDIT CHECKS FOR CHUYÊN ĐỀ HÓA HỌC 10 PASSED WITH FLYING COLORS!');
