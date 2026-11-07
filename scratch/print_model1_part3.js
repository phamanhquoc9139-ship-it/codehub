const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_11.html', 'utf8');

const start = s.indexOf('id="mo-hinh-phan-ung-1"');
const end = s.indexOf('id="mo-hinh-phan-ung-5"');
const sub = s.slice(start, end);
const svgEnd = sub.indexOf('</svg>');
console.log('After SVG:');
console.log(sub.slice(svgEnd + 6, svgEnd + 1500));
