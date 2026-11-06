const fs = require('fs');
const content = fs.readFileSync('courses/vatly_10.html', 'utf8');

const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.toLowerCase().includes('động lượng') || line.toLowerCase().includes('xung lượng')) {
    console.log(`Line ${i+1}: ${line.trim().substring(0, 120)}`);
  }
});
