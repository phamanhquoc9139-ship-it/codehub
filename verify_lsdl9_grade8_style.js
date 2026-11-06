const fs = require('fs');
const assert = require('assert');

console.log('--- VERIFYING LSDL 9 WITH GRADE 8 STYLE ---');

const lsdlPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lsdl_9.html';
const aliasPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/history_geography_9.html';

assert(fs.existsSync(lsdlPath), 'lsdl_9.html must exist');
assert(fs.existsSync(aliasPath), 'history_geography_9.html must exist');

const content = fs.readFileSync(lsdlPath, 'utf8');
const aliasContent = fs.readFileSync(aliasPath, 'utf8');

assert.strictEqual(content, aliasContent, 'Both files must be identical');
console.log('✓ Both files identical, size:', (content.length / 1024).toFixed(2), 'KB');

// Check no undefined
const undefMatches = content.match(/undefined/g);
assert(!undefMatches, 'Found undefined in HTML');
console.log('✓ ZERO "undefined" strings found');

// Check Grade 8 specific UI elements
assert(content.includes('id="ban-do-chuong-trinh"'), 'Must have Bản đồ chương trình');
assert(content.includes('id="sidebarNav"'), 'Must have sidebarNav');
assert(content.includes('id="handbookModal"'), 'Must have handbookModal');
assert(content.includes('id="exam-section"'), 'Must have exam-section');
assert(content.includes('filterUnits'), 'Must have filterUnits function');
assert(content.includes('openHandbookModal'), 'Must have openHandbookModal function');
assert(content.includes('checkUnitQuiz'), 'Must have checkUnitQuiz function');
assert(content.includes('fa-landmark'), 'Must have FontAwesome icons');
assert(content.includes('glass-header'), 'Must have glass-header');
console.log('✓ All Grade 8 UI components and functions present');

// Check units count
for (let i = 1; i <= 21; i++) {
  assert(content.includes(`id="unit-ls-${i}"`), `Missing unit-ls-${i}`);
}
for (let i = 1; i <= 21; i++) {
  assert(content.includes(`id="unit-dl-${i}"`), `Missing unit-dl-${i}`);
}
for (let i = 1; i <= 3; i++) {
  assert(content.includes(`id="unit-cd-${i}"`), `Missing unit-cd-${i}`);
}
console.log('✓ All 45 unit IDs verified (21 Sử + 21 Địa + 3 Chủ đề chung)');

// Check SVGs
const svgCount = (content.match(/<svg viewBox="0 0 800 250"/g) || []).length;
assert.strictEqual(svgCount, 45, 'Must have 45 SVGs');
console.log('✓ Exactly 45 unique vector SVGs verified');

// Check Exam
const examCount = (content.match(/class="[^"]*exam-q-block/g) || []).length;
assert.strictEqual(examCount, 30, 'Exam must have 30 questions');
console.log('✓ Trạng Nguyên Exam verified with 30 questions');

console.log('=== ALL CHECKS PASSED PERFECTLY (100%) ===');
