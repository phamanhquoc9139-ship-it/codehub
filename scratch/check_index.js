const fs = require('fs');
const idx = fs.readFileSync('index.html', 'utf8');
const lines = idx.split('\n').filter(l => l.includes('chuyende_tin'));
console.log(lines.join('\n'));
