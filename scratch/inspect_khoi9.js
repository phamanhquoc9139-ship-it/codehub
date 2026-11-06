const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const p9 = index.indexOf('KHỐI LỚP 9');
if (p9 > -1) {
  console.log('Around KHỐI LỚP 9:\n', index.substring(p9 - 100, p9 + 500));
}
