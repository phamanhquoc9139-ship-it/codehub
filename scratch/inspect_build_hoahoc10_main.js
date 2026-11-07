const fs = require('fs');
const s = fs.readFileSync('scratch/build_hoahoc10.js', 'utf8');

const mainStart = s.indexOf('<!-- Right Main Content Area');
console.log(s.slice(mainStart, mainStart + 3500));
