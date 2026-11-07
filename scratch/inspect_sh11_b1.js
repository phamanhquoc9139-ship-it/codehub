const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, '../courses/sinhhoc_11.html'), 'utf8');

// check bai 1 content
const b1Start = code.indexOf('id="bai-1"');
const b2Start = code.indexOf('id="bai-2"');
console.log('BAI 1 CONTENT SLICE:');
console.log(code.slice(b1Start, b1Start + 1500));

// check header actions
const headerStart = code.indexOf('<header');
const headerEnd = code.indexOf('</header>');
console.log('\nHEADER CONTENT:');
console.log(code.slice(headerStart, headerEnd + 10));
