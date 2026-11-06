const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

function getSvg(lessonId) {
  const start = t7.indexOf(`id="lesson-${lessonId}"`);
  const svgStart = t7.indexOf('<svg', start);
  const svgEnd = t7.indexOf('</svg>', svgStart);
  return t7.substring(svgStart, svgEnd + 6);
}

console.log('SVG 15:\n', getSvg(15));
console.log('SVG 16:\n', getSvg(16));
