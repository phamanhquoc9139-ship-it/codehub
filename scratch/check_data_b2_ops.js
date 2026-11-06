const fs = require('fs');
const data = fs.readFileSync('scratch/toan10_data.js', 'utf8');
const idx = data.indexOf('Các phép toán trên tập hợp');
console.log(data.substring(idx, idx + 1000));
