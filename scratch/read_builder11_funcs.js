const fs = require('fs');
const code = fs.readFileSync('scratch/build_diali11.js', 'utf8');
const p = code.indexOf('quiz');
const matches = [];
let idx = 0;
while ((idx = code.indexOf('function ', idx)) !== -1) {
  const line = code.slice(idx, idx + 60).split('\n')[0];
  matches.push(line);
  idx += 10;
}
console.log(matches.slice(0, 20).join('\n'));
