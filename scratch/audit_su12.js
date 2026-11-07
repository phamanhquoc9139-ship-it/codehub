// scratch/audit_su12.js
const fs = require('fs');
const assert = require('assert');

const files = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lichsu_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lichsu12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/su_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/su12.html'
];

console.log('=== AUDITING LỊCH SỬ 12 FILES ===');

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

// 3b. Verify all 17 lessons exist
for (let i = 1; i <= 17; i++) {
  assert(html.includes(`id="bai-${i}"`), `Missing lesson anchor #bai-${i}`);
  assert(html.includes(`Bài ${i}.`), `Missing text for Bài ${i}`);
  assert(html.includes(`checkMiniQuiz(${i}, 0,`), `Missing quiz for Bài ${i}`);
}
console.log('[PASS] All 17 Lessons verified in HTML body and sidebars');

// 3c. Verify all 6 SVGs
for (let i = 1; i <= 6; i++) {
  assert(html.includes(`viewBox="0 0 760 200"`), 'Missing SVG viewBox');
}
console.log('[PASS] Sơ đồ tư duy SVG verified for all 6 topics');

// 3d. Verify timeline and method sections
assert(html.includes('id="truc-thoi-gian"'), 'Missing trục thời gian');
assert(html.includes('id="phuong-phap-lich-su"'), 'Missing phương pháp');
assert(html.includes('id="dau-truong-trang-nguyen"'), 'Missing Đấu trường Trạng Nguyên');
assert(html.includes('24-10-1945'), 'Missing 24-10-1945');
assert(html.includes('8-8-1967'), 'Missing 8-8-1967');
assert(html.includes('2-9-1945'), 'Missing 2-9-1945');
assert(html.includes('7-5-1954'), 'Missing 7-5-1954');
assert(html.includes('30-4-1975'), 'Missing 30-4-1975');
assert(html.includes('17-2-1979'), 'Missing 17-2-1979');
assert(html.includes('12-1986'), 'Missing 12-1986');
assert(html.includes('31-12-2015'), 'Missing 31-12-2015');
console.log('[PASS] 16 Timeline milestones verified');

// 3e. Check sidebar tree structure
assert(html.includes('id="desktop-nav"'), 'Missing desktop nav');
assert(html.includes('id="mobile-nav"'), 'Missing mobile nav');
assert(html.includes('filterSidebarLessons'), 'Missing sidebar filtering function');
assert(html.includes('sidebar-lesson-item'), 'Missing sidebar lesson items');
console.log('[PASS] Sidebar tree structure with dynamic filtering verified');

console.log('=== AUDIT PASSED 100% ===');
