const fs = require('fs');
const sv = fs.readFileSync('scratch/diali11_svgs.js', 'utf8');
const p = sv.indexOf('svg8_bieudo');
console.log(sv.slice(p, p + 1500));
