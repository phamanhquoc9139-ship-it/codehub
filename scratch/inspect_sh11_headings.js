const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, '../courses/sinhhoc_11.html'), 'utf8');

// find headings inside bai-1
const b1Match = code.match(/id="bai-1"[\s\S]*?<\/article>/);
if (b1Match) {
  const headings = b1Match[0].match(/<h[345][^>]*>([\s\S]*?)<\/h[345]>/g) || [];
  console.log('Headings in Bai 1:');
  headings.forEach(h => console.log(' - ', h.replace(/<[^>]+>/g, '').trim()));
}
