const fs = require('fs');
const code = fs.readFileSync('scratch/build_diali11.js', 'utf8');
const p1 = code.indexOf('<article id="cong-cu-ky-nang"');
console.log(code.slice(p1, p1 + 3000));
