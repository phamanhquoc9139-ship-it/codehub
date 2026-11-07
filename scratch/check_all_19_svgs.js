const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_12.html', 'utf8');

for (let i = 1; i <= 19; i++) {
  const p = html.indexOf(`id="bai-${i}"`);
  const endP = html.indexOf('</article>', p);
  const sl = html.slice(p, endP);
  const hasSvg = sl.includes('<svg');
  if (!hasSvg) {
    console.error(`Bài ${i} MISSING SVG!`);
  } else {
    console.log(`Bài ${i}: OK with SVG`);
  }
}
