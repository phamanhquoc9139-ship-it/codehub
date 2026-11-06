const fs = require('fs');
const t6 = fs.readFileSync('courses/toan_6.html', 'utf8');
const lines = t6.split('\n');
console.log('Total lines:', lines.length);
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Lũy thừa')) {
    console.log('Found at line', i);
    console.log(lines.slice(Math.max(0, i - 15), Math.min(lines.length, i + 35)).join('\n'));
    break;
  }
}
