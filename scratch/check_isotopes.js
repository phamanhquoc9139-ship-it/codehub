const fs = require('fs');
const path = require('path');

const files = ['chuyende_hoahoc_10.html', 'chuyende_hoahoc10.html', 'chuyende_hoa_10.html'];
const coursesDir = path.join(__dirname, '../courses');

for (const f of files) {
  const p = path.join(coursesDir, f);
  if (!fs.existsSync(p)) {
    console.log(`${f} does not exist`);
    continue;
  }
  const content = fs.readFileSync(p, 'utf8');
  // Find occurrences of $^{ or $ ^{ or unanchored isotopes
  const matches = content.match(/\$\s*\^\{[0-9A-Za-z]+\}/g);
  console.log(`${f}: found ${matches ? matches.length : 0} unanchored isotopes with $\^`);
  
  // Also find in \to or +
  const inlineUnanchored = content.match(/[+=\to\s]\^\{[0-9A-Za-z]+\}_\{[0-9A-Za-z]+\}/g);
  console.log(`${f}: found ${inlineUnanchored ? inlineUnanchored.length : 0} inline unanchored isotopes like + ^{...}_{...}`);
  if (inlineUnanchored) {
    console.log('Samples:', inlineUnanchored.slice(0, 5));
  }
}
