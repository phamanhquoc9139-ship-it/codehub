const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const matches = [...content.matchAll(/href="courses\/([^"]+)"/g)].map(m => m[1]);
console.log('Courses linked in index.html:', [...new Set(matches)]);
