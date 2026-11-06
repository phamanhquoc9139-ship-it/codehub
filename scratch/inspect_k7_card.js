const fs = require('fs');
const k7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/khtn_7.html', 'utf8');

const b1Idx = k7.indexOf('id="bai-1"');
if (b1Idx !== -1) {
  const b2Idx = k7.indexOf('id="bai-2"', b1Idx);
  console.log('--- LESSON 1 CARD ---');
  console.log(k7.slice(b1Idx, b2Idx !== -1 ? b2Idx : b1Idx + 2000));
} else {
  console.log('bai-1 not found as id');
}
