// Comprehensive audit for GDQP 12, Hóa học 12, and Địa lí 12
const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';

console.log('========================================');
console.log('1. AUDITING GDQP 12 (4 ALIASES)');
console.log('========================================');

const gdqpFiles = [
  'courses/gdqp_12.html',
  'courses/quocphong_12.html',
  'courses/gdqp12.html',
  'courses/quocphong12.html'
];

let primaryGdqpBuffer = null;
let gdqpSyncOk = true;

gdqpFiles.forEach((f, idx) => {
  const p = path.join(baseDir, f);
  if (!fs.existsSync(p)) {
    console.error(`[FAIL] File missing: ${f}`);
    gdqpSyncOk = false;
    return;
  }
  const buf = fs.readFileSync(p);
  if (idx === 0) {
    primaryGdqpBuffer = buf;
    console.log(`[OK] Primary file ${f}: ${buf.length} bytes`);
  } else {
    if (buf.equals(primaryGdqpBuffer)) {
      console.log(`[OK] Alias ${f}: 100% byte-for-byte identical to primary`);
    } else {
      console.error(`[FAIL] Alias ${f} differs from primary!`);
      gdqpSyncOk = false;
    }
  }
});

const gdqpHtml = primaryGdqpBuffer.toString('utf8');

// Check placeholders and errors
const errors = {
  undefined: (gdqpHtml.match(/undefined/g) || []).length,
  nan: (gdqpHtml.match(/>\s*NaN\s*</g) || []).length,
  objObj: (gdqpHtml.match(/\[object Object\]/g) || []).length,
  emptyContainers: (gdqpHtml.match(/<div class="space-y-[^"]*">\s*<\/div>/g) || []).length,
  genericHeadings: (gdqpHtml.match(/Kiến thức trọng tâm phần \d+/gi) || []).length,
  standaloneDashes: (gdqpHtml.match(/>\s*---\s*</g) || []).length,
  rawMdHeadings: (gdqpHtml.match(/#+\s+(Chương|Bài)/g) || []).length
};

console.log('GDQP 12 Structural Cleanliness:', errors);
if (Object.values(errors).some(v => v > 0)) {
  console.error('[FAIL] Structural errors found in GDQP 12!');
} else {
  console.log('[OK] GDQP 12 is completely clean of placeholders, raw markdown, and empty cards.');
}

// Check 9 lessons
for (let i = 1; i <= 9; i++) {
  const hasId = gdqpHtml.includes(`id="bai-${i}"`);
  const hasA = gdqpHtml.includes(`id="b${i}-cong-thuc"`);
  const hasB = gdqpHtml.includes(`id="b${i}-noi-dung"`);
  const hasC = gdqpHtml.includes(`id="b${i}-mo-hinh"`);
  const hasD = gdqpHtml.includes(`id="b${i}-thuc-hanh"`);
  const hasE = gdqpHtml.includes(`id="b${i}-trac-nghiem"`);
  const quizBtns = (gdqpHtml.match(new RegExp(`quiz-btn-${i}-\\d+`, 'g')) || []).length;
  console.log(`Bài ${i}: ID=${hasId}, A=${hasA}, B=${hasB}, C=${hasC}, D=${hasD}, E=${hasE}, QuizButtons=${quizBtns}`);
}

// Check review section and arena
const hasReview = gdqpHtml.includes('id="tong-ket-khoa-hoc"');
const hasArena = gdqpHtml.includes('id="dau-truong-arena"');
const arenaRadios = (gdqpHtml.match(/name="arena-q-\d+"/g) || []).length;
console.log(`Review Table: ${hasReview}, Arena: ${hasArena}, Total Arena Options: ${arenaRadios}`);

console.log('\n========================================');
console.log('2. AUDITING HÓA HỌC 12 & ĐỊA LÍ 12 AGAINST USER SCREENSHOTS');
console.log('========================================');

// Check Hóa 12 for the exact defect in screenshot 1
const hoaFiles = ['courses/hoahoc12.html', 'courses/hoa_12.html', 'courses/hoahoc_12.html', 'courses/hoa12.html'];
hoaFiles.forEach(f => {
  const p = path.join(baseDir, f);
  const html = fs.readFileSync(p, 'utf8');
  const hasGeneric1 = html.includes('1. Kiến thức trọng tâm phần 1');
  const hasDashes = html.includes('<li>---</li>') || html.includes('>---<');
  const hasRawMd = html.includes('# Chương 2. Carbohydrate');
  console.log(`${f}: GenericHeading=${hasGeneric1}, Dashes=${hasDashes}, RawMd=${hasRawMd}`);
});

// Check Địa 12 for the exact defect in screenshot 2
const diaFiles = ['courses/diali_12.html', 'courses/dia_12.html', 'courses/diali12.html', 'courses/dia12.html'];
diaFiles.forEach(f => {
  const p = path.join(baseDir, f);
  const html = fs.readFileSync(p, 'utf8');
  const hasEmptyDothi = html.includes('Hai mặt của đô thị hóa và yêu cầu quy hoạch bền vững') &&
    html.includes('<div class="space-y-2.5 mt-2">\n        </div>');
  const hasDothiText = html.includes('Tác động tích cực:') && html.includes('Hạn chế khi đô thị hóa tự phát:');
  console.log(`${f}: EmptyDothiBox=${hasEmptyDothi}, HasDothiText=${hasDothiText}`);
});

console.log('\n>>> AUDIT FINISHED SUCCESSFULLY! <<<');
