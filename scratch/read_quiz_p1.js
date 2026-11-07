const fs = require('fs');
const p1 = fs.readFileSync('scratch/diali12_data_part1.js', 'utf8');
const qIdx = p1.indexOf('quiz:');
console.log(p1.slice(qIdx, qIdx + 1200));
