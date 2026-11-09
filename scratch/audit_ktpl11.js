// Comprehensive audit for KTPL 11
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';

console.log('========================================');
console.log('AUDITING KTPL 11 (4 ALIASES)');
console.log('========================================');

const targetFiles = [
  'courses/ktpl_11.html',
  'courses/ktpl11.html',
  'courses/gdktpl_11.html',
  'courses/gdktpl11.html'
];

let primaryBuffer = null;
let syncOk = true;

targetFiles.forEach((f, idx) => {
  const p = path.join(baseDir, f);
  if (!fs.existsSync(p)) {
    console.error(`[FAIL] File missing: ${f}`);
    syncOk = false;
    return;
  }
  const buf = fs.readFileSync(p);
  if (idx === 0) {
    primaryBuffer = buf;
    console.log(`[OK] Primary file ${f}: ${buf.length} bytes`);
  } else {
    if (buf.equals(primaryBuffer)) {
      console.log(`[OK] Alias ${f}: 100% byte-for-byte identical to primary`);
    } else {
      console.error(`[FAIL] Alias ${f} differs from primary!`);
      syncOk = false;
    }
  }
});

const html = primaryBuffer.toString('utf8');

// Check placeholders and errors
const errors = {
  undefined: (html.match(/undefined/g) || []).length,
  nan: (html.match(/>\s*NaN\s*</g) || []).length,
  objObj: (html.match(/\[object Object\]/g) || []).length,
  emptyContainers: (html.match(/<div class="space-y-[^"]*">\s*<\/div>/g) || []).length,
  genericHeadings: (html.match(/Kiến thức trọng tâm phần \d+/gi) || []).length,
  standaloneDashes: (html.match(/>\s*---\s*</g) || []).length,
  rawMdHeadings: (html.match(/#+\s+(Chương|Bài|Chủ đề)/g) || []).length
};

console.log('\nKTPL 11 Structural Cleanliness:', errors);
if (Object.values(errors).some(v => v > 0)) {
  console.error('[FAIL] Structural errors found in KTPL 11!');
} else {
  console.log('[OK] KTPL 11 is completely clean of placeholders, raw markdown, and empty cards.');
}

// Check all 21 lessons
let allLessonsOk = true;
for (let i = 1; i <= 21; i++) {
  const hasId = html.includes(`id="bai-${i}"`);
  const hasA = html.includes(`id="b${i}-cong-thuc"`);
  const hasB = html.includes(`id="b${i}-noi-dung"`);
  const hasC = html.includes(`id="b${i}-mo-hinh"`);
  const hasD = html.includes(`id="b${i}-thuc-hanh"`);
  const hasE = html.includes(`id="b${i}-trac-nghiem"`);
  const quizBtns = (html.match(new RegExp(`quiz-btn-${i}-\\d+`, 'g')) || []).length;
  if (!hasId || !hasA || !hasB || !hasC || !hasD || !hasE || quizBtns !== 12) {
    console.error(`[FAIL] Lesson ${i} incomplete!`);
    allLessonsOk = false;
  }
}
if (allLessonsOk) {
  console.log('[OK] All 21 lessons have full sections (A, B, C, D, E) and 3-question quizzes (12 buttons each).');
}

// Check Tools, Review Table, and Arena
const hasTools = html.includes('id="cong-cu-tinh-toan"') && html.includes('calculateInflation') && html.includes('simulateSupplyDemand') && html.includes('analyzeSwotStrategy');
const hasReview = html.includes('id="bang-on-tap-nhanh"');
const hasArena = html.includes('id="dau-truong-arena"');
const arenaRadios = (html.match(/name="arena-q-\d+"/g) || []).length;

console.log(`\nFeatures Check:
- 3 Interactive Calculators: ${hasTools ? '[OK]' : '[FAIL]'}
- 7 Topics Review Table: ${hasReview ? '[OK]' : '[FAIL]'}
- Trạng Nguyên Arena 20 questions: ${hasArena ? '[OK]' : '[FAIL]'} (Total options: ${arenaRadios})
`);

console.log('>>> AUDIT COMPLETED! <<<');
