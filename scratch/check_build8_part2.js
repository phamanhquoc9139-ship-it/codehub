const fs = require('fs');
const code = fs.readFileSync('build_amnhac_8.js', 'utf8');

console.log('From 2000 to 5000:');
console.log(code.substring(2000, 5000));
