const fs = require('fs');
const content = fs.readFileSync('courses/toan_10.html', 'utf8');

// find katex
const headIdx = content.indexOf('<head>');
const headEnd = content.indexOf('</head>');
console.log('--- HEAD ---');
console.log(content.substring(headIdx, headEnd + 7));

// find renderMathInElement
let idx = 0;
while ((idx = content.indexOf('renderMathInElement', idx)) !== -1) {
  console.log('--- renderMathInElement around pos', idx, '---');
  console.log(content.substring(idx - 100, idx + 400));
  idx += 19;
}
