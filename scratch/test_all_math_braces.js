const fs = require('fs');

const content = fs.readFileSync('courses/toan_10.html', 'utf8');

// Check all inline math
const inlineMatches = content.match(/\$([^\$\n]+?)\$/g) || [];
console.log('Total inline math items:', inlineMatches.length);

let bracketIssues = 0;
inlineMatches.forEach((m, idx) => {
  const inner = m.slice(1, -1);
  const openBrace = (inner.match(/\{/g) || []).length;
  const closeBrace = (inner.match(/\}/g) || []).length;
  if (openBrace !== closeBrace) {
    console.log(`Unmatched braces in inline math ${idx}:`, m);
    bracketIssues++;
  }
});
console.log('Braces issues in inline math:', bracketIssues);

// Check all block math
const blockMatches = content.match(/\$\$([^\$]+?)\$\$/g) || [];
console.log('Total block math items:', blockMatches.length);
let blockBraceIssues = 0;
blockMatches.forEach((m, idx) => {
  const inner = m.slice(2, -2);
  const openBrace = (inner.match(/\{/g) || []).length;
  const closeBrace = (inner.match(/\}/g) || []).length;
  if (openBrace !== closeBrace) {
    console.log(`Unmatched braces in block math ${idx}:`, m);
    blockBraceIssues++;
  }
});
console.log('Braces issues in block math:', blockBraceIssues);
