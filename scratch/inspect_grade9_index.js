const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Find where Grade 9 begins
const matches = [];
let pos = 0;
while ((pos = index.indexOf('Lớp 9', pos)) !== -1) {
  matches.push(pos);
  pos += 5;
}

console.log('Matches for Lớp 9:', matches);
for (const p of matches) {
  console.log('--- AT', p, '---');
  console.log(index.substring(p - 100, p + 300));
}
