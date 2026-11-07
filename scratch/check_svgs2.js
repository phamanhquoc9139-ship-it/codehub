const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_12.html', 'utf8');

[7, 9, 13, 14, 16, 19].forEach(n => {
  const p = html.indexOf(`id="bai-${n}"`);
  const endP = html.indexOf('</article>', p);
  const sl = html.slice(p, endP);
  const hasSvg = sl.includes('<svg');
  console.log(`Bài ${n} has SVG inside </article>: ${hasSvg}`);
});
