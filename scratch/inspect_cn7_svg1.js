const fs = require('fs');
const cn7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const idx1 = cn7.indexOf('id="bai-1"');
const idx2 = cn7.indexOf('id="bai-2"');
const b1 = cn7.substring(idx1, idx2);

const idxSvg1 = b1.lastIndexOf('<svg');
console.log("Context around SVG 1 in Bài 1:");
console.log(b1.substring(idxSvg1 - 300, idxSvg1 + 200));
