const fs = require('fs');
const toan9 = fs.readFileSync('courses/toan_9.html', 'utf8');

const examIdx = toan9.indexOf('id="modal-exam"');
const searchIdx = toan9.indexOf('id="modal-search"');
console.log('modal-exam preview:');
console.log(toan9.substring(examIdx, examIdx + 2000));
