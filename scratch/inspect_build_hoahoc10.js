const fs = require('fs');
const s = fs.readFileSync('scratch/build_hoahoc10.js', 'utf8');

console.log('Length of build_hoahoc10.js:', s.length);
console.log('Top 1500 chars:');
console.log(s.slice(0, 1500));
