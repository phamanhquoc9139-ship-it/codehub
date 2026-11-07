const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');
const lines = index.split('\n');
lines.forEach((l, idx) => {
  if (l.toLowerCase().includes('quốc phòng') || l.toLowerCase().includes('gdqp')) {
    console.log(`${idx + 1}: ${l.trim()}`);
  }
});
