const fs = require('fs');
const s = fs.readFileSync('scratch/build_hoahoc10.js', 'utf8');

const startOverview = s.indexOf('function renderChapterOverviewCards');
const startTOC = s.indexOf('function renderFullTableOfContents');
console.log('renderChapterOverviewCards:');
console.log(s.slice(startOverview, startTOC));
