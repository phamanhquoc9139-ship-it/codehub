const fs = require('fs');
const sv = fs.readFileSync('scratch/diali11_svgs.js', 'utf8');
console.log(sv.slice(0, 1200));
