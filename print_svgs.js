const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/mithuat_6.html', 'utf8');

function getSvg(id) {
  const idx = html.indexOf(`id="${id}"`);
  const svgStart = html.indexOf('<svg', idx);
  const svgEnd = html.indexOf('</svg>', svgStart);
  return html.substring(svgStart, svgEnd + 6);
}

console.log('*** BÀI 7 SVG ***\n', getSvg('mt6_b7'));
console.log('*** BÀI 8 SVG ***\n', getSvg('mt6_b8'));
