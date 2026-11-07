// scratch/audit_sinhhoc12.js
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const path1 = path.resolve(__dirname, '../courses/sinhhoc_12.html');
const path2 = path.resolve(__dirname, '../courses/sinhhoc12.html');

console.log('=== AUDITING SINH HỌC 12 COURSE FILES ===');

// 1. Check existence
if (!fs.existsSync(path1) || !fs.existsSync(path2)) {
  console.error('ERROR: One or both output files do not exist!');
  process.exit(1);
}

const buf1 = fs.readFileSync(path1);
const buf2 = fs.readFileSync(path2);
const content = buf1.toString('utf8');

console.log('File 1 size (courses/sinhhoc_12.html):', buf1.length, 'bytes');
console.log('File 2 size (courses/sinhhoc12.html):', buf2.length, 'bytes');

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

// 4. Lessons count check (must have all 35 lessons)
let missingLessons = [];
for (let i = 1; i <= 35; i++) {
  if (!content.includes(`id="bai-${i}"`)) {
    missingLessons.push(i);
  }
}
console.log('Total verified lesson articles: ' + (35 - missingLessons.length) + '/35');
if (missingLessons.length > 0) {
  console.error('ERROR: Missing lessons:', missingLessons);
  process.exit(1);
}

// 5. Check all 8 chapters in sidebar
const chapterMatches = content.match(/sidebar-chapter-group/g);
console.log('Sidebar chapters count:', chapterMatches ? chapterMatches.length : 0);
if (!chapterMatches || chapterMatches.length !== 8) {
  console.error('ERROR: Expected 8 chapters in sidebar, got:', chapterMatches ? chapterMatches.length : 0);
  process.exit(1);
}

// 6. Check mini-quizzes and arena
const quizBoxes = content.match(/id="quiz-\d+-\d+"/g);
console.log('In-lesson quiz questions count:', quizBoxes ? quizBoxes.length : 0);
if (!quizBoxes || quizBoxes.length !== 105) {
  console.error('ERROR: Expected 105 quiz questions, got:', quizBoxes ? quizBoxes.length : 0);
  process.exit(1);
}

// 7. Check special sections
console.log('Formula table exists:', content.includes('id="bang-cong-thuc"'));
console.log('Summary cards exist:', content.includes('id="so-do-tong-ket"'));
console.log('searchModal exists:', content.includes('id="searchModal"'));
console.log('examModal exists:', content.includes('id="examModal"'));

// 8. Inline scripts syntax verification
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

console.log('=== AUDIT PASSED 100% SUCCESSFULLY! ===');
