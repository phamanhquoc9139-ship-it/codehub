const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const asideIdx = content.indexOf('<aside');
console.log(content.substring(asideIdx - 400, asideIdx + 200));
