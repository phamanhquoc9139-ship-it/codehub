const fs = require('fs');

function checkLeaks(name, path) {
  const content = fs.readFileSync(path, 'utf8');

  // Strip scripts
  let text = content.replace(/<script[\s\S]*?<\/script>/gi, '');
  // Strip $$...$$
  text = text.replace(/\$\$[\s\S]*?\$\$/g, '');
  // Strip $...$
  text = text.replace(/\$[^$]*?\$/g, '');

  const leaked = text.match(/\\[a-zA-Z]+/g) || [];
  const realLeaks = leaked.filter(w => [
    '\\cup', '\\cap', '\\setminus', '\\subset', '\\in', '\\notin',
    '\\frac', '\\sqrt', '\\alpha', '\\beta', '\\sum', '\\vec',
    '\\mathbb', '\\Delta', '\\omega', '\\theta', '\\cos', '\\sin',
    '\\tan', '\\cot'
  ].includes(w));

  console.log(`[${name}] Real LaTeX leaks outside math delimiters:`, realLeaks.length);
  if (realLeaks.length > 0) {
    console.log(`[${name}] Samples:`, realLeaks.slice(0, 10));
  }
}

checkLeaks('TOAN 10', 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html');
checkLeaks('VAT LY 10', 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html');
