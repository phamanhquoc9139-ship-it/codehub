const fs = require('fs');
const path = require('path');

const t = fs.readFileSync(path.join(__dirname, '..', 'courses', 'toan_8.html'), 'utf8');

// Check KaTeX loading scripts
const katexPart = t.substring(t.indexOf('katex'), t.indexOf('katex') + 300);
console.log('KaTeX include snippet:\n', katexPart);

// Check exam details
const examIdx = t.indexOf('id="modal-exam"');
console.log('Exam modal snippet:\n', t.substring(examIdx, examIdx + 500));

// Check formula modal
const formulaIdx = t.indexOf('id="modal-formulas"');
console.log('Formula modal snippet:\n', t.substring(formulaIdx, formulaIdx + 500));

// Check how SVG diagram is embedded in a lesson
const svgIdx = t.indexOf('<svg');
console.log('SVG snippet:\n', t.substring(svgIdx, svgIdx + 400));
