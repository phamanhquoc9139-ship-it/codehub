const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('undefined')) {
    console.log(`Line ${i+1}: ${l.trim()}`);
  }
});
