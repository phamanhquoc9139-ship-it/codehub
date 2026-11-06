const fs = require('fs');
const content = fs.readFileSync('courses/ktpl_10.html', 'utf8');
const idx = content.indexOf('id="bai-19"');
console.log('Index of bai-19:', idx);
if (idx !== -1) {
  console.log(content.substring(idx, idx + 2500));
}
