// scratch/audit_diali12.js
const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const files = [
  path.join(baseDir, 'courses/diali_12.html'),
  path.join(baseDir, 'courses/diali12.html'),
  path.join(baseDir, 'courses/dia_12.html'),
  path.join(baseDir, 'courses/dia12.html')
];

console.log('=== STARTING AUDIT FOR GEOGRAPHY GRADE 12 (KẾT NỐI TRI THỨC) ===\n');

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

// 2. Check for unwanted tokens
const badTokens = ['undefined', '[object Object]'];
for (const token of badTokens) {
  if (html.includes(token)) {
    throw new Error(`CRITICAL: Found unexpected token "${token}" in HTML!`);
  } else {
    console.log(`[2] Cleanliness check: 0 occurrences of "${token}".`);
  }
}
if (/\bNaN\b/.test(html.replace(/isNaN/g, ''))) {
  throw new Error('CRITICAL: Found unexpected standalone NaN in HTML!');
} else {
  console.log('[2] Cleanliness check: 0 standalone occurrences of "NaN".');
}

// 3. Verify all 35 lessons
let missingLessons = [];
for (let i = 1; i <= 35; i++) {
  if (!html.includes(`id="bai-${i}"`)) {
    missingLessons.push(`bai-${i}`);
  }
}

if (missingLessons.length > 0) {
  throw new Error(`Missing lessons: ${missingLessons.join(', ')}`);
} else {
  console.log('[3] Lesson Structure: All 35 lessons exist with anchor id="bai-1" through id="bai-35".');
}

// 4. Verify 8 SVG diagrams
const svgMatches = html.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log(`[4] SVG Count: Found ${svgMatches.length} SVGs in the document.`);
if (svgMatches.length < 8) {
  throw new Error(`Expected at least 8 SVGs, but found ${svgMatches.length}`);
}

// 5. Verify Modals and Interactive Components
const requiredComponents = [
  'id="formula-modal"',
  'id="search-modal"',
  'id="arena-modal"',
  'id="progress-bar"',
  'id="progress-label"',
  'id="bm-filter-btn"',
  'function syncProgressUI()',
  'function toggleDone(num)',
  'function toggleBookmark(num)',
  'function checkLessonQuiz(lessonNum, qIdx, selectedOpt, correctOpt)',
  'function calculateDensity()',
  'function calculateShare()',
  'function calculateGrowthRate()',
  'function startArenaQuiz()',
  'function submitArenaExam()'
];

for (const comp of requiredComponents) {
  if (!html.includes(comp)) {
    throw new Error(`Missing component or function: ${comp}`);
  }
}
console.log('[5] Interactive features: All modals, sidebar progress tracker, bookmark filter, quiz engine, interactive calculators, and Trạng Nguyên exam arena verified.');

// 6. Verify 5 Parts overview
for (let p = 1; p <= 5; p++) {
  if (!html.includes(`Phần ${p}`)) {
    throw new Error(`Missing Phần ${p}`);
  }
}
console.log('[6] Parts: All 5 Parts verified.');

console.log('\n=== AUDIT PASSED 100%! GEOGRAPHY GRADE 12 IS FULLY COMPLIANT ===');
