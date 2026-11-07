const fs = require('fs');
const code = fs.readFileSync('scratch/build_diali11.js', 'utf8');
console.log(code.slice(code.length - 2500));
