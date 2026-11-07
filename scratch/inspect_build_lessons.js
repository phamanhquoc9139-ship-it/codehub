const fs = require('fs');
const s = fs.readFileSync('scratch/build_hoahoc10.js', 'utf8');

const startLessons = s.indexOf('function renderLessons');
const startTables = s.indexOf('function renderSummaryTables');
console.log('renderLessons:');
console.log(s.slice(startLessons, startLessons + 3500));
