const fs = require('fs');
const cn7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const idx1 = cn7.indexOf('id="bai-1"');
const idx2 = cn7.indexOf('id="bai-2"');
const b1 = cn7.substring(idx1, idx2);

const svgs = b1.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log("SVGs in Bài 1 of Cong Nghe 7:", svgs.length);
svgs.forEach((s, i) => {
  console.log(`SVG ${i}:`, s.substring(0, 150), '... [length:', s.length, ']');
});
