const fs = require('fs');
const code11 = fs.readFileSync('scratch/build_diali11.js', 'utf8');
const p = code11.indexOf('formatItemContent');
console.log(code11.slice(p, p + 1200));
