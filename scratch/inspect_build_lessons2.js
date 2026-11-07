const fs = require('fs');
const s = fs.readFileSync('scratch/build_hoahoc10.js', 'utf8');

const startLessons = s.indexOf('function renderLessons');
console.log(s.slice(startLessons + 2500, startLessons + 5500));
