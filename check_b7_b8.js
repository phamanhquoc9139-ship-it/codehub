const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/mithuat_6.html', 'utf8');

const b7Idx = html.indexOf('id="mt6_b7"');
const b8Idx = html.indexOf('id="mt6_b8"');

console.log('=== BÀI 7 SVG (Mĩ thuật THẾ GIỚI tiền sử) ===');
console.log(html.substring(b7Idx + 500, b7Idx + 1600));

console.log('=== BÀI 8 SVG (Mĩ thuật VIỆT NAM tiền sử) ===');
console.log(html.substring(b8Idx + 500, b8Idx + 1600));
