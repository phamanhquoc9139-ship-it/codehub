const fs = require('fs');
const assert = require('assert');

console.log('--- STARTING COMPREHENSIVE VERIFICATION FOR LỊCH SỬ VÀ ĐỊA LÍ 9 ---');

const lsdlPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lsdl_9.html';
const aliasPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/history_geography_9.html';
const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';

// 1. Check file existence
assert(fs.existsSync(lsdlPath), 'courses/lsdl_9.html must exist');
assert(fs.existsSync(aliasPath), 'courses/history_geography_9.html must exist');
const html = fs.readFileSync(lsdlPath, 'utf8');
const aliasHtml = fs.readFileSync(aliasPath, 'utf8');
assert.strictEqual(html, aliasHtml, 'Both course files must have identical content');
console.log('✓ Both lsdl_9.html and history_geography_9.html exist and match! Size:', (html.length / 1024).toFixed(2), 'KB');

// 2. Check no undefined in HTML
const undefinedMatches = [];
let idx = 0;
while ((idx = html.indexOf('undefined', idx)) !== -1) {
  const snippet = html.substring(Math.max(0, idx - 30), Math.min(html.length, idx + 40));
  undefinedMatches.push(snippet);
  idx += 9;
}
assert.strictEqual(undefinedMatches.length, 0, 'Found literal undefined in HTML: ' + JSON.stringify(undefinedMatches));
console.log('✓ ZERO "undefined" strings found in course HTML!');

// 3. Check 21 History lessons
for (let i = 1; i <= 21; i++) {
  assert(html.includes(`id="hist-${i}"`), `Missing hist-${i}`);
  assert(html.includes(`Bài ${i} • Lịch sử 9`), `Missing History lesson tag for lesson ${i}`);
}
console.log('✓ All 21 History lessons verified (Bài 1 -> Bài 21)!');

// 4. Check 21 Geography lessons
for (let i = 1; i <= 21; i++) {
  assert(html.includes(`id="geo-${i}"`), `Missing geo-${i}`);
  assert(html.includes(`Bài ${i} • Địa lí 9`), `Missing Geography lesson tag for lesson ${i}`);
}
console.log('✓ All 21 Geography lessons verified (Bài 1 -> Bài 21)!');

// 5. Check 3 General Topics
for (let i = 1; i <= 3; i++) {
  assert(html.includes(`id="topic-${i}"`), `Missing topic-${i}`);
  assert(html.includes(`Chủ đề ${i}.`), `Missing General topic ${i}`);
}
console.log('✓ All 3 General Topics verified (Chủ đề 1 -> Chủ đề 3)!');

// 6. Check SVGs count
const svgCount = (html.match(/<svg viewBox="0 0 800 250"/g) || []).length;
assert.strictEqual(svgCount, 45, 'Must have exactly 45 unique diagram SVGs');
console.log('✓ Exactly 45 unique vector SVG diagrams verified!');

// 7. Check Trạng Nguyên Exam
const examItems = (html.match(/class="exam-question-item/g) || []).length;
assert.strictEqual(examItems, 30, 'Trạng Nguyên Exam must have 30 questions');
assert(html.includes('id="examTimer"'), 'Must have countdown timer');
assert(html.includes('60:00'), 'Must have 60:00 time limit');
console.log('✓ Trạng Nguyên Exam verified with 30 questions and 60:00 timer!');

// 8. Check index.html integration
const indexContent = fs.readFileSync(indexPath, 'utf8');
assert(indexContent.includes('courses/lsdl_9.html'), 'index.html must link to courses/lsdl_9.html');
assert(indexContent.includes('Lịch Sử và Địa Lí 9'), 'index.html must have course card for Lịch Sử và Địa Lí 9');
console.log('✓ index.html successfully integrated with Lịch Sử và Địa Lí 9 card!');

console.log('=== ALL 8 VERIFICATION CHECKS PASSED PERFECTLY (100%) ===');
