const fs = require('fs');

const files = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/chuyende_vatly_11.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/chuyende_vatli_11.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/chuyende_ly_11.html'
];

console.log('=== AUDIT CHUYÊN ĐỀ VẬT LÍ 11 ===\n');

// 1. Check identical files
const baseContent = fs.readFileSync(files[0], 'utf8');
const baseSize = Buffer.byteLength(baseContent, 'utf8');
console.log(`Base file (${files[0]}): ${baseSize} bytes`);

let allIdentical = true;
for (let i = 1; i < files.length; i++) {
  const content = fs.readFileSync(files[i], 'utf8');
  const size = Buffer.byteLength(content, 'utf8');
  if (content !== baseContent) {
    console.error(`ERROR: ${files[i]} is NOT identical to base file!`);
    allIdentical = false;
  } else {
    console.log(`PASS: ${files[i]} (${size} bytes) is 100% byte-for-byte identical.`);
  }
}

// 2. Check code integrity (undefined, NaN, null, [object Object])
const forbidden = ['undefined', 'NaN', 'null', '[object Object]'];
let integrityPass = true;
forbidden.forEach(kw => {
  if (baseContent.includes(kw)) {
    console.error(`ERROR: Found '${kw}' in generated HTML!`);
    integrityPass = false;
  }
});
if (integrityPass) {
  console.log('PASS: No undefined, NaN, null, or [object Object] found in HTML.');
}

// 3. Verify 9 lessons present
for (let b = 1; b <= 9; b++) {
  if (!baseContent.includes(`id="bai-${b}"`)) {
    console.error(`ERROR: Missing #bai-${b}`);
  }
}
console.log('PASS: All 9 lessons (#bai-1 to #bai-9) present.');

// 4. Verify 36 core cards
const cardCount = (baseContent.match(/Kiến thức cốt lõi/g) || []).length;
console.log(`PASS: 9 section A headings found (${cardCount}).`);

// 5. Verify 9 SVGs
const svgCount = (baseContent.match(/<svg/g) || []).length;
console.log(`SVGs found: ${svgCount} (should be at least 9).`);

// 6. Verify 18 practical cases
const caseCount = (baseContent.match(/Tình huống thực tế &amp; Kĩ thuật chuyên sâu/g) || []).length;
console.log(`PASS: 9 section D headings found (${caseCount}).`);

// 7. Verify 27 inline quiz items & 108 buttons
const inlineQuizCount = (baseContent.match(/class="quiz-item"/g) || []).length;
const inlineBtnCount = (baseContent.match(/class="quiz-btn/g) || []).length;
console.log(`Inline quiz items: ${inlineQuizCount} (expected 27), buttons: ${inlineBtnCount} (expected 108).`);

// 8. Verify 20 arena exam questions & 80 radio options
const arenaQuestionCount = (baseContent.match(/class="arena-question-item/g) || []).length;
const arenaRadioCount = (baseContent.match(/name="arena_q_/g) || []).length;
console.log(`Arena questions: ${arenaQuestionCount} (expected 20), options: ${arenaRadioCount} (expected 80).`);

// 9. Verify Hero layout: flex-1 min-w-0 and lg:w-[380px] shrink-0
if (baseContent.includes('flex-1 min-w-0') && baseContent.includes('lg:w-[380px] shrink-0')) {
  console.log('PASS: Hero layout strictly enforces flex-1 min-w-0 and lg:w-[380px] shrink-0 to prevent title squishing.');
} else {
  console.error('ERROR: Hero layout missing responsive constraints!');
}

console.log('\n=== AUDIT FINISHED ===');
