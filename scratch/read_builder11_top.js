const fs = require('fs');
const code = fs.readFileSync('scratch/build_diali11.js', 'utf8');
console.log('build_diali11.js total length:', code.length);
console.log(code.slice(0, 1500));
