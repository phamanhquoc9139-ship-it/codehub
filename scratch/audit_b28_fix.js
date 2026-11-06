const fs = require('fs');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html', 'utf8');

console.log('=== AUDIT OF VATLY_10.HTML POST-FIX ===');
console.log('Length:', html.length);
console.log('Remaining \\u20D7 in html:', (html.match(/\u20D7/g) || []).length);
console.log('Remaining undefined in html:', (html.match(/undefined/g) || []).length);

const b28Idx = html.indexOf('id="bai-28"');
const b29Idx = html.indexOf('id="bai-29"');
const b28 = html.substring(b28Idx, b29Idx);

console.log('--- BÀI 28 PREVIEW ---');
const diagStart = b28.indexOf('Vectơ Động lượng');
console.log(b28.substring(diagStart - 50, diagStart + 600));

console.log('=== AUDIT FINISHED ===');
