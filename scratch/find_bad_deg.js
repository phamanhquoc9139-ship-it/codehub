const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../courses/chuyende_hoahoc_10.html'), 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('$^\\circ') || l.includes('$$^\\circ') || l.match(/\$\s*\^/)) {
    console.log(`Line ${i + 1}: ${l.trim()}`);
  }
});
