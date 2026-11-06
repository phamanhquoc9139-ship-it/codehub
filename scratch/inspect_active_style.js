const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const styleIdx = content.indexOf('.nav-link.active');
console.log(content.substring(styleIdx - 50, styleIdx + 300));
