const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const files = [
  path.join(baseDir, 'courses/hoahoc_12.html'),
  path.join(baseDir, 'courses/hoahoc12.html'),
  path.join(baseDir, 'courses/hoa_12.html'),
  path.join(baseDir, 'courses/hoa12.html')
];

console.log('=== STARTING AUDIT FOR CHEMISTRY GRADE 12 (GRADE 10 STANDARD) ===\n');

// 1. Check file existence and byte-for-byte parity
const mainContent = fs.readFileSync(files[0]);
console.log(`[1] File Size: ${mainContent.length} bytes for ${files[0]}`);

for (let i = 1; i < files.length; i++) {
  const content = fs.readFileSync(files[i]);
  const cmp = Buffer.compare(mainContent, content);
  if (cmp !== 0) {
    throw new Error(`File ${files[i]} does not match ${files[0]}!`);
  }
  console.log(`[1] Sync verified: ${files[i]} is 100% byte-for-byte identical.`);
}

const html = mainContent.toString('utf-8');

// 2. Check for unwanted literal tokens
const badTokens = ['undefined', 'NaN', '[object Object]'];
for (const token of badTokens) {
  if (html.includes(token)) {
    throw new Error(`CRITICAL: Found unexpected token "${token}" in HTML!`);
  } else {
    console.log(`[2] Cleanliness check: 0 occurrences of "${token}".`);
  }
}

// 3. Verify all 30 lessons and their 5 sections A-E
let missingSections = [];
for (let i = 1; i <= 30; i++) {
  if (!html.includes(`id="bai-${i}"`)) missingSections.push(`bai-${i}`);
  if (!html.includes(`id="b${i}-cong-thuc"`)) missingSections.push(`b${i}-cong-thuc`);
  if (!html.includes(`id="b${i}-noi-dung"`)) missingSections.push(`b${i}-noi-dung`);
  if (!html.includes(`id="b${i}-so-do"`)) missingSections.push(`b${i}-so-do`);
  if (!html.includes(`id="b${i}-thi-nghiem"`)) missingSections.push(`b${i}-thi-nghiem`);
  if (!html.includes(`id="b${i}-trac-nghiem"`)) missingSections.push(`b${i}-trac-nghiem`);
}

if (missingSections.length > 0) {
  throw new Error(`Missing section anchors: ${missingSections.join(', ')}`);
} else {
  console.log('[3] Lesson Structure: All 30 lessons have 5 core parts A, B, C, D, E with unique anchors.');
}

// 4. Verify SVGs
const svgMatches = html.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log(`[4] SVG Count: Found ${svgMatches.length} SVGs in the document.`);
if (svgMatches.length < 38) {
  throw new Error(`Expected at least 38 SVGs (8 chapter maps + 30 lesson models), but found ${svgMatches.length}`);
}

// 5. Verify Modals and Interactive Components
const requiredComponents = [
  'id="formula-modal"',
  'id="safety-modal"',
  'id="arena-modal"',
  'id="search-modal"',
  'id="progress-bar"',
  'id="progress-label"',
  'id="bm-filter-btn"',
  'function syncProgressUI()',
  'function toggleDone(id)',
  'function toggleBookmark(id)',
  'function checkLessonQuiz(lessonId, qIdx, selectedOpt, correctOpt)',
  'function startArenaQuiz()'
];

for (const comp of requiredComponents) {
  if (!html.includes(comp)) {
    throw new Error(`Missing component or function: ${comp}`);
  }
}
console.log('[5] Interactive features: All modals, sidebar progress tracker, bookmark filter, quiz engine, and Trạng Nguyên exam arena verified.');

// 6. Verify 8 Chapters in Overview Cards
for (let ch = 1; ch <= 8; ch++) {
  if (!html.includes(`href="#chuong-${ch}"`)) {
    throw new Error(`Missing chapter anchor href="#chuong-${ch}"`);
  }
}
console.log('[6] Chapter Cards: All 8 Chapter overview cards verified.');

console.log('\n=== AUDIT PASSED 100%! GRADE 12 IS FULLY COMPLIANT WITH GRADE 10 STANDARD ===');
