const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_12.html', 'utf8');

[7, 9, 13, 14, 16, 19].forEach(n => {
  const p = html.indexOf(`id="bai-${n}"`);
  const sl = html.slice(p, p + 8000);
  const hasSvg = sl.includes('<svg');
  console.log(`Bài ${n} has SVG: ${hasSvg}`);
});
