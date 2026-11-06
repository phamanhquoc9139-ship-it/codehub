const fs = require('fs');
const content = fs.readFileSync('courses/toan_10.html', 'utf8');

let idx = 0;
while ((idx = content.indexOf('A \\cup B', idx)) !== -1) {
  console.log('=== AT INDEX', idx, '===');
  console.log(content.substring(idx - 250, idx + 450));
  idx += 10;
}
