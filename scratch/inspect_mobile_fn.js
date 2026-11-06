const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const fnIdx = content.indexOf('function toggleMobileSidebar');
console.log(content.substring(fnIdx - 50, fnIdx + 400));
