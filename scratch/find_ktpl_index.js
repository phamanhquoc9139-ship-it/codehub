const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');
const lines = index.split('\n');
lines.forEach((l, idx) => {
  if (l.toLowerCase().includes('ktpl') || l.toLowerCase().includes('pháp luật') || l.toLowerCase().includes('kinh tế')) {
    console.log(`${idx + 1}: ${l.trim()}`);
  }
});
