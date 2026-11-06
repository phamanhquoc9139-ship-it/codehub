// scratch/fix_toan10_formulas.js
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'toan10_data.js');
let content = fs.readFileSync(dataPath, 'utf8');

// Replace all occurrences of:
// \
// formula
// \
// with:
// $$
// formula
// $$

const lines = content.split('\n');
const newLines = [];
let i = 0;

while (i < lines.length) {
  const line = lines[i];
  if (line.trim() === '\\') {
    // Check if next line has content and next+1 has '\'
    if (i + 2 < lines.length && lines[i + 2].trim() === '\\') {
      newLines.push('$$');
      newLines.push(lines[i + 1]);
      newLines.push('$$');
      i += 3;
      continue;
    }
  }
  newLines.push(line);
  i++;
}

content = newLines.join('\n');
fs.writeFileSync(dataPath, content, 'utf8');
console.log('Successfully updated toan10_data.js!');
