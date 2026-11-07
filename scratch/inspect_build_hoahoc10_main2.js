const fs = require('fs');
const s = fs.readFileSync('scratch/build_hoahoc10.js', 'utf8');

const mainStart = s.indexOf('lg:col-span-8');
console.log(s.slice(mainStart - 100, mainStart + 2500));
