const fs = require('fs');
const content = fs.readFileSync('courses/toan_10.html', 'utf8');

const needle = 'mệnh đề chứa biến';
const idx = content.toLowerCase().indexOf(needle);
console.log('Index:', idx);
if (idx !== -1) {
  console.log(content.substring(idx - 50, idx + 350));
}
