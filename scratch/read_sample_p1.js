const fs = require('fs');
const p1 = fs.readFileSync('scratch/diali12_data_part1.js', 'utf8');
console.log(p1.slice(0, 1500));
