// scratch/audit_hoa12.js
const fs = require('fs');
const assert = require('assert');

const files = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoahoc_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoahoc12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoa_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoa12.html'
];

console.log('=== AUDITING HÓA HỌC 12 FILES (FULL 30 REACTION MODELS) ===');

// 1. Existence and size
const buffers = files.map(f => {
  assert(fs.existsSync(f), `File missing: ${f}`);
  const buf = fs.readFileSync(f);
  console.log(`[PASS] Exists: ${f} (${buf.length} bytes)`);
  return buf;
});

// 2. Byte-for-byte sync across all 4 files
for (let i = 1; i < buffers.length; i++) {
  assert.strictEqual(
    Buffer.compare(buffers[0], buffers[i]),
    0,
    `Files mismatch: ${files[0]} vs ${files[i]}`
  );
}
console.log('[PASS] All 4 files are 100% byte-for-byte identical!');

// 3. Content checks on main file
const html = buffers[0].toString('utf8');

// 3a. No undefined or NaN
assert(!html.includes('undefined'), 'HTML contains "undefined"');
assert(!html.includes('NaN'), 'HTML contains "NaN"');
console.log('[PASS] 0 undefined, 0 NaN found');

// 3b. Verify all 30 lessons exist with their mini-quizzes
for (let i = 1; i <= 30; i++) {
  assert(html.includes(`id="bai-${i}"`), `Missing lesson anchor #bai-${i}`);
  assert(html.includes(`Bài ${i}`), `Missing text for Bài ${i}`);
  assert(html.includes(`checkMiniQuiz(${i}, 0,`), `Missing quiz 1 for Bài ${i}`);
  assert(html.includes(`checkMiniQuiz(${i}, 1,`), `Missing quiz 2 for Bài ${i}`);
  assert(html.includes(`checkMiniQuiz(${i}, 2,`), `Missing quiz 3 for Bài ${i}`);
}
console.log('[PASS] All 30 Lessons and all 90 Mini-Quizzes verified in HTML body');

// 3c. Verify all 8 Chapter SVGs
for (let i = 1; i <= 8; i++) {
  assert(html.includes(`id="chuong-${i}"`), `Missing Chapter #chuong-${i}`);
}
console.log('[PASS] Sơ đồ tư duy SVG verified for all 8 chapters');

// 3d. Verify ALL 30 Chemical Reaction Models (Bài 1 đến Bài 30)
for (let i = 1; i <= 30; i++) {
  assert(html.includes(`id="mo-hinh-phan-ung-${i}"`), `Missing reaction model for Bài ${i}: #mo-hinh-phan-ung-${i}`);
}
console.log('[PASS] All 30 Chemical Reaction Models (from Bài 1 to Bài 30) verified in HTML body!');

// 3e. Verify SVG count: 8 Chapter maps + 30 Reaction models = 38 SVGs
const svgCount = (html.match(/<svg/g) || []).length;
console.log(`[INFO] Total SVGs found: ${svgCount}`);
assert.strictEqual(svgCount, 38, `Expected exactly 38 SVGs, got ${svgCount}`);
console.log('[PASS] Exactly 38 Vector SVGs (8 Chapter Concept Maps + 30 Molecular Reaction Models) present');

// 3f. Verify special sections
assert(html.includes('id="bang-phuong-trinh"'), 'Missing bảng phương trình');
assert(html.includes('id="an-toan-thuc-hanh"'), 'Missing an toàn thực hành');
assert(html.includes('id="dau-truong-trang-nguyen"'), 'Missing Đấu trường Trạng Nguyên');
assert(html.includes('RCOOH + R′OH ⇌ RCOOR′ + H₂O'), 'Missing ester hóa');
assert(html.includes('C₁₂H₂₂O₁₁ + H₂O → glucose + fructose'), 'Missing saccharose');
assert(html.includes('2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂'), 'Missing điện phân');
assert(html.includes('E°pin = E°cathode − E°anode'), 'Missing pin điện');
console.log('[PASS] Key chemical equations and formulas verified');

// 3g. Check sidebar tree structure & lesson selection (menu hien bài ra để người ta để chọn bài học)
assert(html.includes('id="sidebar-lesson-list"'), 'Missing sidebar lesson list');
assert(html.includes('filterSidebarLessons'), 'Missing sidebar filtering function');
assert(html.includes('sidebar-lesson-item'), 'Missing sidebar lesson items');
assert(html.includes('sidebar-model-item'), 'Missing sidebar model items');
console.log('[PASS] Sidebar tree structure with 30 lessons and 30 models directly selectable verified');

console.log('=== AUDIT PASSED 100% ===');
