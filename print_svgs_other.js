const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/mithuat_6.html', 'utf8');

function getSvg(id) {
  const idx = html.indexOf(`id="${id}"`);
  const svgStart = html.indexOf('<svg', idx);
  const svgEnd = html.indexOf('</svg>', svgStart);
  return html.substring(svgStart, svgEnd + 6);
}

console.log('*** BÀI 11 SVG ***\n', getSvg('mt6_b11'));
console.log('*** BÀI 12 SVG ***\n', getSvg('mt6_b12'));
console.log('*** BÀI 15 SVG ***\n', getSvg('mt6_b15'));
console.log('*** BÀI 16 SVG ***\n', getSvg('mt6_b16'));
