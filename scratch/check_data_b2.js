const fs = require('fs');
const data = fs.readFileSync('scratch/toan10_data.js', 'utf8');
const idx = data.indexOf('Tập hợp và các phép toán');
console.log('Index:', idx);
if (idx !== -1) {
  console.log(data.substring(idx, idx + 800));
}
