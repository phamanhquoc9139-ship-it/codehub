const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const b1Idx = content.indexOf('id="bai-1"');
const b2Idx = content.indexOf('id="bai-2"');
console.log('--- Lesson 1 length:', b2Idx - b1Idx);
console.log(content.substring(b1Idx, b1Idx + 2000));
