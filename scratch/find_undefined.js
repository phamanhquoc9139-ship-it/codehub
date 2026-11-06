const fs = require('fs');
const content = fs.readFileSync('courses/tienganh_10.html', 'utf8');

const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('undefined')) {
    console.log(`Line ${i+1}: ${line.trim().substring(0, 100)}`);
  }
});
