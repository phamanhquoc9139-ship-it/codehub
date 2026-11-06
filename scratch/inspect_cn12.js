const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const svgIdx = cn.indexOf('3 PHƯƠNG THỨC TRỒNG TRỌT');
console.log('SVG position:', svgIdx);
console.log('500 chars before SVG:');
console.log(cn.substring(svgIdx - 500, svgIdx));
console.log('500 chars after SVG:');
console.log(cn.substring(svgIdx + 1500, svgIdx + 2000));
