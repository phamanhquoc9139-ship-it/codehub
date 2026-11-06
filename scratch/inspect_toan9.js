const fs = require('fs');
const toan9 = fs.readFileSync('courses/toan_9.html', 'utf8');

const b1Idx = toan9.indexOf('id="bai-1"');
console.log('--- Lesson 1 preview ---');
console.log(toan9.substring(b1Idx, b1Idx + 2500));

console.log('--- Lesson 2 preview start ---');
const b2Idx = toan9.indexOf('id="bai-2"');
console.log(toan9.substring(b2Idx, b2Idx + 1200));

// Check what modals exist in toan_9
const modalIdx = toan9.indexOf('<!-- ==================== MODALS ==================== -->');
console.log('--- MODALS preview ---');
console.log(toan9.substring(modalIdx, modalIdx + 3000));
