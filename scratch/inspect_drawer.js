const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

console.log(content.substring(738200, 739200));
