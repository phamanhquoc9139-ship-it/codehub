const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const mainIdx = content.indexOf('<main');
console.log(content.substring(mainIdx - 800, mainIdx));
