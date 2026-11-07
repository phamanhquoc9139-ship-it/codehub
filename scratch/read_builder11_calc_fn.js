const fs = require('fs');
const code = fs.readFileSync('scratch/build_diali11.js', 'utf8');
const p = code.indexOf('function runCalculator');
console.log(code.slice(p, p + 1500));
