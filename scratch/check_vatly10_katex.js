const fs = require('fs');

const path = 'courses/vatly_10.html';
const content = fs.readFileSync(path, 'utf8');

const headIdx = content.indexOf('katex');
console.log('--- vatly_10.html head KaTeX ---');
if (headIdx !== -1) console.log(content.substring(headIdx - 50, headIdx + 400));

const bottomIdx = content.lastIndexOf('renderMathInElement');
console.log('--- vatly_10.html bottom KaTeX ---');
if (bottomIdx !== -1) console.log(content.substring(bottomIdx - 100, bottomIdx + 400));
