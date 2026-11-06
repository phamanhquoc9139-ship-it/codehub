const fs = require('fs');
const path = require('path');

const t8 = fs.readFileSync(path.join(__dirname, '..', 'courses', 'toan_8.html'), 'utf8');

const matches = t8.match(/\$\$[^\$]+\$\$/g) || [];
console.log('$$ matches in toan_8.html:', matches.length);
console.log('Sample in toan_8.html:\n', matches.slice(0, 5));
