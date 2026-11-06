const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Find all occurrences of Toán in headings or course cards
const regex = /<h3[^>]*>(Toán\s*\d+)<\/h3>/g;
let m;
while ((m = regex.exec(index)) !== null) {
  console.log('Found:', m[1], 'at pos:', m.index);
}
