const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdtc_9.html', 'utf8');
const idx = content.indexOf('ĐỘNG LỰC HỌC 4 PHA NHẢY CAO');
const svgStart = content.lastIndexOf('<svg', idx);
const svgEnd = content.indexOf('</svg>', idx) + 6;
const svgText = content.substring(svgStart, svgEnd);
console.log('SVG found, length:', svgText.length);
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/test_nhay_cao.svg', svgText);
console.log('Written to test_nhay_cao.svg');
