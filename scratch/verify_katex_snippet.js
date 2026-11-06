const fs = require('fs');
const path = require('path');

const t = fs.readFileSync(path.join(__dirname, '..', 'courses', 'toan_9.html'), 'utf8');

const p1 = t.indexOf('ax + by = c');
console.log('Snippet 1:\n', t.substring(p1 - 50, p1 + 100));

const p2 = t.indexOf('begin{cases}');
console.log('\nSnippet 2:\n', t.substring(p2 - 50, p2 + 150));
