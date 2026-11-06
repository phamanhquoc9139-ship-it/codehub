const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const mainIdx = content.indexOf('<main');
console.log('--- main section in tiengtrung_10.html ---');
console.log(content.substring(mainIdx, mainIdx + 1200));
