const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

const matches = index.match(/href="[^"]*(?:tin|grade)[^"]*"/gi) || [];
console.log('Tin/grade links in index.html:', matches);
