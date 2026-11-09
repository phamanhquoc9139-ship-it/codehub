const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../courses/chuyende_hoahoc_10.html'), 'utf8');

// Find all math blocks $...$ and $$...$$
const mathRegex = /\$\$([\s\S]*?)\$\$|\$([^$]+)\$/g;
let match;
let potentialErrors = [];

while ((match = mathRegex.exec(content)) !== null) {
  const math = match[1] || match[2];
  // Check for caret at start of math or after space, +, -, \to, etc.
  const badCaret = math.match(/(^|[\s+\-=\\(>])\^/);
  if (badCaret) {
    potentialErrors.push({
      math,
      match: badCaret[0],
      index: match.index
    });
  }
}

console.log(`Found ${potentialErrors.length} potential bad carets in math blocks.`);
potentialErrors.forEach(e => console.log('Bad math:', e.math));
