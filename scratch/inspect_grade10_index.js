const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

const idx = index.indexOf('courses/grade_10.html');
if (idx !== -1) {
  console.log(index.substring(idx - 100, idx + 200));
}
