const fs = require('fs');
const toan9 = fs.readFileSync('courses/toan_9.html', 'utf8');

const b1Idx = toan9.indexOf('id="bai-1"');
const b2Idx = toan9.indexOf('id="bai-2"');
console.log('--- Lesson 1 rest of content ---');
console.log(toan9.substring(b1Idx + 3000, Math.min(b1Idx + 7000, b2Idx)));
