const fs = require('fs');

const s = fs.readFileSync('scratch/build_ktpl10_full.js', 'utf8');
const p = s.indexOf('// Check if indented sub-item');
console.log(s.slice(p, p + 900));
