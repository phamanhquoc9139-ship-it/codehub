const fs = require('fs');
const vm = require('vm');
const path = require('path');

const path1 = path.resolve(__dirname, '../courses/tienganh_10.html');
const path2 = path.resolve(__dirname, '../courses/tienganh10.html');

console.log('=== AUDITING TIENG ANH 10 COURSE FILES ===');

// 1. Check existence
if (!fs.existsSync(path1) || !fs.existsSync(path2)) {
  console.error('ERROR: One or both output files do not exist!');
  process.exit(1);
}

const buf1 = fs.readFileSync(path1);
const buf2 = fs.readFileSync(path2);
const content = buf1.toString('utf8');

console.log('File 1 size (courses/tienganh_10.html):', buf1.length, 'bytes');
console.log('File 2 size (courses/tienganh10.html):', buf2.length, 'bytes');

// 2. Exact byte-for-byte sync
const isSynced = Buffer.compare(buf1, buf2) === 0;
console.log('Byte-for-byte identical sync:', isSynced ? 'PASS (100% MATCH)' : 'FAIL');
if (!isSynced) {
  console.error('ERROR: Files are not in sync!');
  process.exit(1);
}

// 3. Undefined and NaN checks
const undefinedMatches = content.match(/\bundefined\b/g);
console.log('Undefined count:', undefinedMatches ? undefinedMatches.length : 0);
if (undefinedMatches && undefinedMatches.length > 0) {
  console.error('ERROR: Found undefined in HTML output!');
  process.exit(1);
}

const nanMatches = content.match(/\bNaN\b/g);
console.log('NaN count:', nanMatches ? nanMatches.length : 0);
if (nanMatches && nanMatches.length > 0) {
  console.error('ERROR: Found NaN in HTML output!');
  process.exit(1);
}

// 4. Skills solutions check
const skillsAccordions = content.match(/HỆ THỐNG GIẢI CHI TIẾT BÀI TẬP 4 KỸ NĂNG/g);
console.log('4-Skills Solutions Accordions count:', skillsAccordions ? skillsAccordions.length : 0);

const readingQuizBtns = content.match(/checkSkillReadingQuiz10\(/g);
console.log('Reading Quiz Buttons count:', readingQuizBtns ? readingQuizBtns.length : 0);

const speakWordBtns = content.match(/speakWord\(/g);
console.log('Audio Speak Triggers count:', speakWordBtns ? speakWordBtns.length : 0);

// 5. Units count
const unitMatches = content.match(/id="unit-[^"]+"/g);
console.log('Unit sections count:', unitMatches ? unitMatches.length : 0);

// 6. Inline Scripts Syntax Check
const scriptRegex = /<script(?![^>]*src=)([^>]*)>([\s\S]*?)<\/script>/gi;
let match;
let sCount = 0;
let hasSyntaxError = false;
while ((match = scriptRegex.exec(content)) !== null) {
  sCount++;
  const code = match[2];
  try {
    new vm.Script(code);
    console.log(`Inline script #${sCount} syntax: OK`);
  } catch(e) {
    console.error(`Inline script #${sCount} SYNTAX ERROR:`, e.message);
    hasSyntaxError = true;
  }
}

if (hasSyntaxError) {
  console.error('ERROR: One or more scripts contain syntax errors!');
  process.exit(1);
}

// 7. Modals check
console.log('handbookModal exists:', content.includes('id="handbookModal"'));
console.log('examModal exists:', content.includes('id="examModal"'));

console.log('=== AUDIT PASSED 100% SUCCESSFULLY! ===');
