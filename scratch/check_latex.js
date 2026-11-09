const fs = require('fs');
const content = fs.readFileSync('courses/chuyende_toan_11.html', 'utf8');

const rawCodeLaTeX = content.match(/<code[^>]*>\s*\\/g) || [];
console.log('Matches of <code with LaTeX backslash:', rawCodeLaTeX.length);

const katexMatches = content.match(/\$[^\$]+\$/g) || [];
console.log('Total inline KaTeX math blocks ($...$):', katexMatches.length);
