const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html', 'utf8');
const idx = html.indexOf('id="bai-3"');
const idxEnd = html.indexOf('id="bai-4"');
const b3 = html.substring(idx, idxEnd);
const eqIdx = b3.indexOf('Giá trị trung bình');
console.log(b3.substring(eqIdx - 100, eqIdx + 600));
