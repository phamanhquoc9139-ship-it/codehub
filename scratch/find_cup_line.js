const fs = require('fs');
const lines = fs.readFileSync('courses/toan_10.html', 'utf8').split('\n');
lines.forEach((l, i) => {
  if (l.includes('A \\cup B')) console.log(`Line ${i+1}: ${l}`);
});
