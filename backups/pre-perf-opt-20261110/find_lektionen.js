const fs = require('fs');

const html = fs.readFileSync('courses/tiengduc_4.html', 'utf8');
const lines = html.split('\n');

lines.forEach((l, i) => {
  if (l.includes('Lektion 1') || l.includes('Lektion 2') || l.includes('Landeskunde') || l.includes('Projekt')) {
    console.log(`${i}: ${l.trim().substring(0, 100)}`);
  }
});
