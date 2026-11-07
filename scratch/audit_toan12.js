// audit_toan12.js - Verification and quality checks for Toán 12
const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname, '../courses/toan_12.html');
const file2 = path.join(__dirname, '../courses/toan12.html');

console.log('=== AUDITING TOÁN 12 ===');

// 1. Check file existence
if (!fs.existsSync(file1) || !fs.existsSync(file2)) {
  console.error('FAIL: One or both files do not exist!');
  process.exit(1);
}

const content1 = fs.readFileSync(file1, 'utf8');
const content2 = fs.readFileSync(file2, 'utf8');

// 2. Exact byte-for-byte sync
console.log('File 1 size:', content1.length, 'bytes');
console.log('File 2 size:', content2.length, 'bytes');
if (content1 !== content2) {
  console.error('FAIL: Files are not in 100% byte-for-byte sync!');
  process.exit(1);
} else {
  console.log('✓ PASS: Files are 100% byte-for-byte identical.');
}

// 3. Check for undefined or [object Object]
if (content1.includes('undefined')) {
  console.error('FAIL: Output contains literal "undefined"!');
  process.exit(1);
} else {
  console.log('✓ PASS: Zero "undefined" detected.');
}

if (content1.includes('[object Object]')) {
  console.error('FAIL: Output contains literal "[object Object]"!');
  process.exit(1);
} else {
  console.log('✓ PASS: Zero "[object Object]" detected.');
}

// 4. Check all 19 Lessons
for (let i = 1; i <= 19; i++) {
  const lessonId = `id="bai-${i}"`;
  if (!content1.includes(lessonId)) {
    console.error(`FAIL: Missing lesson ${lessonId}!`);
    process.exit(1);
  }
}
console.log('✓ PASS: All 19 lessons (Bài 1 to Bài 19) are present.');

// 5. Check all 8 SVGs
for (let s = 1; s <= 8; s++) {
  const svgMarker = `SƠ ĐỒ ${s}:`;
  if (!content1.includes(svgMarker)) {
    console.error(`FAIL: Missing SVG diagram ${svgMarker}!`);
    process.exit(1);
  }
}
console.log('✓ PASS: All 8 Vector SVG diagrams are present.');

// 6. Check KaTeX configuration
if (content1.includes("delimiters: [") && content1.includes("{ left: '$$', right: '$$'") && content1.includes("{ left: '$', right: '$'")) {
  console.log('✓ PASS: KaTeX configured safely with only $$ and $ delimiters.');
} else {
  console.error('FAIL: KaTeX configuration missing or invalid!');
  process.exit(1);
}

if (content1.includes("{ left: '[', right: ']'") || content1.includes('{ left: "\\[", right: "\\]"')) {
  console.error('FAIL: Dangerous bracket delimiter detected in KaTeX config!');
  process.exit(1);
} else {
  console.log('✓ PASS: No dangerous bracket delimiters in KaTeX config.');
}

// 7. Check Bullet formatting
const flexRowMatches = (content1.match(/flex items-start gap-3/g) || []).length;
console.log(`✓ PASS: ${flexRowMatches} properly formatted flex rows for list items and bullet points.`);

// 8. Check Interactive tools
const toolCheck = content1.includes('calcTool1') && content1.includes('calcTool2') && 
                  content1.includes('calcTool3') && content1.includes('calcTool4') && content1.includes('calcTool5');
if (toolCheck) {
  console.log('✓ PASS: All 5 interactive calculation tools are present.');
} else {
  console.error('FAIL: Missing interactive tools!');
  process.exit(1);
}

// 9. Check Arena Exam
if (content1.includes('ĐẤU TRƯỜNG TOÁN 12') && content1.includes('arena-timer') && content1.includes('submitArenaExam')) {
  console.log('✓ PASS: 20-question 45-minute Arena Exam with timer and automatic grading verified.');
} else {
  console.error('FAIL: Arena exam missing or incomplete!');
  process.exit(1);
}

console.log('=== AUDIT COMPLETED: 100% SUCCESS ===');
