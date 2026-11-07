const fs = require('fs');
const s = fs.readFileSync('scratch/build_hoahoc10.js', 'utf8');

const startTOC = s.indexOf('function renderFullTableOfContents');
const startLessons = s.indexOf('function renderLessons');
console.log('renderFullTableOfContents:');
console.log(s.slice(startTOC, startLessons));
