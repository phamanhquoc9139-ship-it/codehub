const fs = require('fs');
const code = fs.readFileSync('scratch/build_vatly10_page.js', 'utf8');

const qIdx = code.indexOf('const examQuestions =');
console.log('examQuestions found:', qIdx !== -1);
if (qIdx !== -1) {
  console.log(code.substring(qIdx, qIdx + 1000));
}
