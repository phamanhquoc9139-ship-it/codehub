const fs = require('fs');
const idx = fs.readFileSync('index.html', 'utf8');
const matches = [...idx.matchAll(/courses\/[^"'>\s]+/g)].map(m => m[0]);
const filtered = matches.filter(m => m.includes('10'));
console.log('Grade 10 links in index.html:');
console.log([...new Set(filtered)]);
