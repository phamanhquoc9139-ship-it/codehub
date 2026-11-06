const fs = require('fs');
const toan9 = fs.readFileSync('courses/toan_9.html', 'utf8');

const jsIdx = toan9.indexOf('<!-- ==================== JAVASCRIPT ==================== -->');
console.log('--- JAVASCRIPT in toan_9 ---');
console.log(toan9.substring(jsIdx, jsIdx + 4000));
