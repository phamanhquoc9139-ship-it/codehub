const fs = require('fs');
const content = fs.readFileSync('courses/veo3.html', 'utf8');
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('$')) {
    console.log(`Line ${idx + 1}: ${l.trim()}`);
  }
});
