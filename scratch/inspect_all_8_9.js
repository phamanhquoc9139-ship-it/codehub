const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Find all occurrences of _8.html in index.html
const reg = /courses\/[a-zA-Z0-9_-]+_8\.html/g;
const courses8 = index.match(reg) || [];
console.log('All _8.html courses in index.html:', [...new Set(courses8)]);

// Find all occurrences of _9.html in index.html
const reg9 = /courses\/[a-zA-Z0-9_-]+_9\.html/g;
const courses9 = index.match(reg9) || [];
console.log('\nAll _9.html courses in index.html:', [...new Set(courses9)]);
