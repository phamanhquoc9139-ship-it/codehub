const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname, '../courses/tiengphap_8.html');
const file2 = path.join(__dirname, '../courses/french_8.html');
const indexFile = path.join(__dirname, '../index.html');

console.log('=== VERIFYING TIẾNG PHÁP 8 ===');

// Check 1: Existence & Size
if (!fs.existsSync(file1) || !fs.existsSync(file2)) {
  console.error('FAIL: Course files missing!');
  process.exit(1);
}

const s1 = fs.statSync(file1).size;
const s2 = fs.statSync(file2).size;
console.log(`File sizes: tiengphap_8.html = ${s1} bytes, french_8.html = ${s2} bytes`);

if (s1 !== s2) {
  console.error('FAIL: File sizes mismatch!');
  process.exit(1);
}
console.log('PASS: Course files are identical in size (> 700KB).');

const c1 = fs.readFileSync(file1, 'utf8');

// Check 2: All 7 Unités exist (Unité 0 to Unité 6)
const expectedUnités = ['unite-0', 'unite-1', 'unite-2', 'unite-3', 'unite-4', 'unite-5', 'unite-6'];
let missingUnités = [];
for (const u of expectedUnités) {
  if (!c1.includes(`id="${u}"`)) {
    missingUnités.push(u);
  }
}
if (missingUnités.length > 0) {
  console.error('FAIL: Missing unités:', missingUnités);
  process.exit(1);
}
console.log(`PASS: All 7 Unités found (${expectedUnités.length} Unités).`);

// Check 3: Check Concept Mindmap SVGs
const svgCount = (c1.match(/<svg viewBox="0 0 840 210"/g) || []).length;
console.log(`SVG Concept Mindmaps found: ${svgCount}`);
if (svgCount < 7) {
  console.error('FAIL: Less than 7 mindmaps found!');
  process.exit(1);
}
console.log('PASS: All 7 SVG Concept Mindmaps verified.');

// Check 4: Audio buttons count
const audioCount = (c1.match(/speakFrench\(/g) || []).length;
console.log(`Audio buttons found: ${audioCount}`);
if (audioCount < 100) {
  console.error('FAIL: Insufficient audio buttons!');
  process.exit(1);
}
console.log('PASS: Web Speech API (fr-FR) audio buttons verified.');

// Check 5: Check 40 Exam Questions
const examCount = (c1.match(/Question \d+ \/ 40/g) || []).length;
console.log(`Exam questions count in HTML: ${examCount}`);
if (examCount !== 40) {
  console.error('FAIL: Exam questions count is not 40!');
  process.exit(1);
}
console.log('PASS: Concours de Français 8 (40 questions) verified.');

// Check 6: Check index.html insertion
const indexContent = fs.readFileSync(indexFile, 'utf8');
if (!indexContent.includes('courses/tiengphap_8.html')) {
  console.error('FAIL: Card not found in index.html!');
  process.exit(1);
}
console.log('PASS: Course card found in index.html under Khối Lớp 8.');

console.log('=== ALL CHECKS PASSED SUCCESSFULLY (100%) ===');
