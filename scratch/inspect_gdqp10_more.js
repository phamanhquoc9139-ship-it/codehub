const fs = require('fs');
const content = fs.readFileSync('courses/gdqp_10.html', 'utf8');
const p = content.indexOf('dau-truong');
console.log('dau-truong idx:', p);
if (p !== -1) {
  console.log(content.slice(p - 100, p + 1000));
}
