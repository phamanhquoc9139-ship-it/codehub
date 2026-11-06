const fs = require('fs');
const code = fs.readFileSync('build_amnhac_8.js', 'utf8');

console.log('Length:', code.length);
console.log('First 2000 chars:');
console.log(code.substring(0, 2000));
