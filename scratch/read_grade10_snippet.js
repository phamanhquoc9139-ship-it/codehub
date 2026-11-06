const fs = require('fs');
const content = fs.readFileSync('courses/grade_10.html', 'utf8');

const idx = content.indexOf('Con số "45"');
if (idx !== -1) {
  console.log('--- grade_10.html around Con số "45" ---');
  console.log(content.substring(idx - 200, idx + 500));
} else {
  console.log('Not found in grade_10.html');
}
