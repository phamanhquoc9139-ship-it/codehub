const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');
const lines = index.split('\n');
lines.forEach((l, i) => {
  if (l.includes('grade_10.html')) {
    console.log(`Line ${i+1}: ${JSON.stringify(l)}`);
    console.log(`Lines ${i-2} to ${i+4}:`);
    for (let j = Math.max(0, i-2); j <= Math.min(lines.length-1, i+3); j++) {
      console.log(`${j+1}: ${JSON.stringify(lines[j])}`);
    }
  }
});
