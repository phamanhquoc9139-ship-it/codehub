const fs = require('fs');
const path = require('path');

const t8 = fs.readFileSync(path.join(__dirname, '..', 'courses', 'toan_8.html'), 'utf8');

const rMath = t8.indexOf('function renderMath()');
if (rMath > -1) {
  console.log(t8.substring(rMath - 100, rMath + 600));
}
