const fs = require('fs');
const code = fs.readFileSync('scratch/build_diali11.js', 'utf8');
const p1 = code.indexOf('cong-cu-ky-nang');
console.log(code.slice(p1 - 200, p1 + 1500));
