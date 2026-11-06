const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const pGrade9 = index.indexOf('courses/grade_9.html');
if (pGrade9 > -1) {
  console.log('Around grade_9.html:\n', index.substring(pGrade9 - 200, pGrade9 + 400));
}

const pToan8 = index.indexOf('toan_8.html');
if (pToan8 > -1) {
  console.log('Around toan_8.html:\n', index.substring(pToan8 - 200, pToan8 + 400));
}
