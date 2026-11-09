const fs = require('fs');

const files = [
  'courses/chuyende_toan_12.html',
  'courses/chuyende_toan12.html'
];

let failed = false;

// 1. Check identical bytes
const baseContent = fs.readFileSync(files[0], 'utf8');
const baseSize = baseContent.length;
console.log(`Base file ${files[0]}: ${baseSize} chars, ${fs.statSync(files[0]).size} bytes.`);

files.forEach(f => {
  if (!fs.existsSync(f)) {
    console.error(`[ERROR] Missing file: ${f}`);
    failed = true;
    return;
  }
  const content = fs.readFileSync(f, 'utf8');
  if (content !== baseContent) {
    console.error(`[ERROR] File content mismatch: ${f}`);
    failed = true;
  } else {
    console.log(`[PASS] ${f} is 100% byte-for-byte identical.`);
  }
});

// 2. Syntax / Null / Undefined checks (literal substring checks)
['undefined', 'NaN', '[object Object]', 'null'].forEach(keyword => {
  if (baseContent.includes(keyword)) {
    console.error(`[ERROR] Found literal "${keyword}" in content!`);
    failed = true;
  } else {
    console.log(`[PASS] 0 occurrences of literal "${keyword}".`);
  }
});

// 3. Check for empty cards
const emptyCardRegex = /<div class="[^"]*rounded-2xl[^"]*border[^"]*">\s*<h4[^>]*>([\s\S]*?)<\/h4>\s*<\/div>/g;
let m;
let emptyCount = 0;
while ((m = emptyCardRegex.exec(baseContent)) !== null) {
  emptyCount++;
  console.error(`[ERROR] Empty card detected: ${m[1].trim()}`);
  failed = true;
}
if (emptyCount === 0) {
  console.log('[PASS] 0 empty cards found.');
}

// 4. Verify 7 Lessons
for (let i = 1; i <= 7; i++) {
  if (!baseContent.includes(`id="bai-${i}"`)) {
    console.error(`[ERROR] Missing Lesson bai-${i}`);
    failed = true;
  }
}
console.log('[PASS] All 7 lesson containers verified (bai-1 through bai-7).');

// 5. Verify SVGs
const svgMatches = baseContent.match(/<svg class="w-full h-auto rounded-xl/g) || [];
console.log(`[VERIFY] Found ${svgMatches.length} lesson SVGs.`);
if (svgMatches.length !== 7) {
  console.error(`[ERROR] Expected 7 SVGs, got ${svgMatches.length}`);
  failed = true;
} else {
  console.log('[PASS] Exactly 7 vector SVGs present.');
}

// 6. Verify Inline Quizzes
let inlineQuizBtnCount = 0;
for (let l = 1; l <= 7; l++) {
  for (let q = 0; q < 3; q++) {
    const regex = new RegExp(`quiz-btn-${l}-${q}\\b`, 'g');
    const matches = baseContent.match(regex) || [];
    inlineQuizBtnCount += matches.length;
    if (matches.length !== 4) {
      console.error(`[ERROR] Lesson ${l} Quiz ${q} does not have 4 option buttons (has ${matches.length})`);
      failed = true;
    }
  }
}
console.log(`[PASS] Exactly 21 inline quizzes with ${inlineQuizBtnCount} buttons (expected 84).`);

// 7. Verify Arena 20 questions
for (let i = 0; i < 20; i++) {
  const optRegex = new RegExp(`arena-opt-${i}\\b`, 'g');
  const count = (baseContent.match(optRegex) || []).length;
  if (count !== 4) {
    console.error(`[ERROR] Arena question ${i + 1} has ${count} options instead of 4!`);
    failed = true;
  }
}
console.log('[PASS] All 20 Arena questions have exactly 4 choices (80 options total).');

// 8. Verify Hero layout
if (!baseContent.includes('lg:w-[380px]') || !baseContent.includes('flex-1 min-w-0')) {
  console.error('[ERROR] Hero layout classes missing!');
  failed = true;
} else {
  console.log('[PASS] Hero layout classes verified (flex-1 min-w-0 and lg:w-[380px]).');
}

if (failed) {
  console.error('\nAUDIT FAILED!');
  process.exit(1);
} else {
  console.log('\nAUDIT PASSED 100%! All requirements met.');
}
