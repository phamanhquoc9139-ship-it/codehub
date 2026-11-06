const fs = require('fs');
const toan9 = fs.readFileSync('courses/toan_9.html', 'utf8');

const sIdx = toan9.indexOf('id="modal-search"');
console.log('modal-search preview:');
console.log(toan9.substring(sIdx, sIdx + 1500));
