const fs = require('fs');
const content = fs.readFileSync('courses/toan_10.html', 'utf8');

// Count $$ with newlines
const matchWithNewline = content.match(/\$\$\s*\n[\s\S]*?\n\s*\$\$/g);
console.log('Display math with newlines inside $$:', matchWithNewline ? matchWithNewline.length : 0);

// Sample first 5
if (matchWithNewline) {
  matchWithNewline.slice(0, 5).forEach((m, i) => console.log(`Sample ${i+1}:\n${m}\n`));
}
