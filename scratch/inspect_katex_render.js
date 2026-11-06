const fs = require('fs');
const path = require('path');

const t = fs.readFileSync(path.join(__dirname, '..', 'courses', 'toan_8.html'), 'utf8');

const rMath = t.indexOf('renderMathInElement');
if (rMath > -1) {
  console.log('renderMathInElement call:\n', t.substring(rMath - 50, rMath + 350));
}
