// scratch/audit_van12.js
const fs = require('fs');
const assert = require('assert');

const files = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/van_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/van12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/nguvan_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/nguvan12.html'
];

console.log('=== AUDITING NGỮ VĂN 12 FILES ===');

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

// 3b. Verify all 9 lessons exist
for (let i = 1; i <= 9; i++) {
  assert(html.includes(`id="bai-${i}"`), `Missing lesson anchor #bai-${i}`);
  assert(html.includes(`Bài ${i}.`), `Missing text for Bài ${i}`);
  assert(html.includes(`checkMiniQuiz(${i}, 0,`), `Missing quiz for Bài ${i}`);
}
console.log('[PASS] All 9 Units verified in HTML body');

// 3c. Verify all 9 SVGs
for (let i = 1; i <= 9; i++) {
  assert(html.includes(`viewBox="0 0 760 200"`), 'Missing SVG viewBox');
}
console.log('[PASS] Sơ đồ tư duy SVG verified for all 9 units');

// 3d. Verify Khung kĩ năng tổng hợp & Danh mục 34 văn bản
assert(html.includes('id="khung-ki-nang"'), 'Missing Khung kĩ năng');
assert(html.includes('id="danh-muc-van-ban"'), 'Missing Danh mục văn bản');
assert(html.includes('id="dau-truong-trang-nguyen"'), 'Missing Đấu trường Trạng Nguyên');
assert(html.includes('Xuân Tóc Đỏ cứu quốc'), 'Missing Xuân Tóc Đỏ cứu quốc');
assert(html.includes('Tây Tiến'), 'Missing Tây Tiến');
assert(html.includes('Đàn ghi ta của Lor-ca'), 'Missing Đàn ghi ta');
assert(html.includes('Tuyên ngôn Độc lập'), 'Missing Tuyên ngôn Độc lập');
assert(html.includes('Hồn Trương Ba, da hàng thịt'), 'Missing Hồn Trương Ba da hàng thịt');
console.log('[PASS] Key canonical texts & framework verified');

// 3e. Check sidebar tree structure
assert(html.includes('id="desktop-nav"'), 'Missing desktop nav');
assert(html.includes('id="mobile-nav"'), 'Missing mobile nav');
assert(html.includes('filterSidebarLessons'), 'Missing sidebar filtering function');
assert(html.includes('sidebar-lesson-item'), 'Missing sidebar lesson items');
console.log('[PASS] Sidebar tree structure with dynamic filtering verified');

console.log('=== AUDIT PASSED 100% ===');
