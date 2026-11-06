const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const fnIdx = content.indexOf('function togglePinyin(');
console.log(content.substring(fnIdx, fnIdx + 400));
