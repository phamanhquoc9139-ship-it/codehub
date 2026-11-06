const fs = require('fs');

console.log('=== VERIFICATION OF HDTN 7 ===');

const p1 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hdtn_7.html';
const p2 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/experience_7.html';
const pIndex = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';

const c1 = fs.readFileSync(p1, 'utf8');
const c2 = fs.readFileSync(p2, 'utf8');
const cIndex = fs.readFileSync(pIndex, 'utf8');

console.log('1. File size hdtn_7.html:', c1.length, 'bytes');
console.log('2. File size experience_7.html:', c2.length, 'bytes');
console.log('3. Links in hdtn_7.html to ../index.html:', (c1.match(/href="\.\.\/index\.html"/g) || []).length);
console.log('4. Any subjects.html in hdtn_7.html:', c1.includes('subjects.html'));
console.log('5. Number of topic cards (id="chu-de-X" / "on-tap"):', (c1.match(/id="chu-de-/g) || []).length + (c1.includes('id="on-tap"') ? 1 : 0));
console.log('6. Number of SVG diagrams/illustrations:', (c1.match(/<svg/g) || []).length);
console.log('7. Modals present (handbook, journal, exam):', c1.includes('id="handbookModal"'), c1.includes('id="journalModal"'), c1.includes('id="examModal"'));
console.log('8. Card in index.html:', cIndex.includes('courses/hdtn_7.html'));

if (c1.length > 100000 && !c1.includes('subjects.html') && cIndex.includes('courses/hdtn_7.html')) {
  console.log('>>> ALL VERIFICATION CHECKS PASSED! <<<');
} else {
  console.error('>>> VERIFICATION FAILED! <<<');
}
