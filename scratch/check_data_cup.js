const fs = require('fs');

const data = fs.readFileSync('scratch/toan10_data.js', 'utf8');
const idx = data.indexOf('A \\cup B');
if (idx !== -1) {
  console.log('--- scratch/toan10_data.js ---');
  console.log(data.substring(idx - 100, idx + 200));
}
