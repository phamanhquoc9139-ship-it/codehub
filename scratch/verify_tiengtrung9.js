const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const file1 = path.join(baseDir, 'courses', 'tiengtrung_9.html');
const file2 = path.join(baseDir, 'courses', 'chinese_9.html');

console.log('--- VERIFYING TIENG TRUNG 9 ---');

if (!fs.existsSync(file1) || !fs.existsSync(file2)) {
  console.error('FAIL: Missing HTML file(s)!');
  process.exit(1);
}

const c1 = fs.readFileSync(file1, 'utf8');
const c2 = fs.readFileSync(file2, 'utf8');

console.log(`tiengtrung_9.html size: ${c1.length} chars`);
console.log(`chinese_9.html size: ${c2.length} chars`);

if (c1 !== c2) {
  console.error('FAIL: tiengtrung_9.html and chinese_9.html are not identical!');
  process.exit(1);
}
console.log('PASS: Both files are 100% synchronized byte-for-byte.');

// Check for unparsed variables or corrupt tokens
const invalidTokens = ['undefined', 'NaN', '[object Object]'];
let hasError = false;
for (const token of invalidTokens) {
  if (c1.includes(token)) {
    console.error(`FAIL: Detected corrupt token "${token}" in HTML!`);
    hasError = true;
  }
}
if (!hasError) {
  console.log('PASS: No corrupt tokens (undefined, NaN, [object Object]).');
}

// Check all 16 lesson IDs
const expectedIds = [
  'bai-1', 'bai-2', 'bai-3', 'on-tap-1',
  'bai-5', 'bai-6', 'bai-7', 'on-tap-2',
  'bai-9', 'bai-10', 'bai-11', 'on-tap-3',
  'bai-13', 'bai-14', 'bai-15', 'on-tap-4'
];

for (const id of expectedIds) {
  if (!c1.includes(`id="${id}"`)) {
    console.error(`FAIL: Missing section id="${id}"!`);
    hasError = true;
  }
}
if (!hasError) {
  console.log('PASS: All 16 lesson and review sections are present with correct IDs.');
}

// Check SVG count
const svgCount = (c1.match(/<svg/g) || []).length;
console.log(`Embedded SVGs found: ${svgCount}`);
if (svgCount < 12) {
  console.error(`FAIL: Expected at least 12 SVGs, found ${svgCount}`);
  hasError = true;
} else {
  console.log('PASS: SVG illustrations embedded successfully.');
}

// Check 4 modals
const expectedModals = ['modal-hanzi', 'modal-grammar', 'modal-communication', 'modal-exam'];
for (const m of expectedModals) {
  if (!c1.includes(`id="${m}"`)) {
    console.error(`FAIL: Missing modal id="${m}"!`);
    hasError = true;
  }
}
console.log('PASS: All 4 modals present.');

// Check Speech API
if (c1.includes('speakChinese') && c1.includes('zh-CN')) {
  console.log('PASS: Web Speech API speakChinese configured for zh-CN.');
} else {
  console.error('FAIL: Missing speakChinese or zh-CN configuration!');
  hasError = true;
}

// Check 14 grammar points & 的地得 table
if (c1.includes('的、地、得') && c1.includes('14 Trọng Điểm Ngữ Pháp')) {
  console.log('PASS: 14 Grammar points and 的、地、得 distinction table present.');
} else {
  console.error('FAIL: Missing grammar summary or 的、地、得 table!');
  hasError = true;
}

// Check Trạng Nguyên exam
if (c1.includes('Đấu Trường Trạng Nguyên Tiếng Trung') && c1.includes('examQuestions')) {
  console.log('PASS: Trạng Nguyên exam present with examQuestions dataset.');
} else {
  console.error('FAIL: Trạng Nguyên exam missing!');
  hasError = true;
}

if (hasError) {
  process.exit(1);
} else {
  console.log('🎉 ALL VERIFICATION CHECKS PASSED FOR TIẾNG TRUNG 9!');
}
