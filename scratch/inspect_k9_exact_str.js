const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const index = fs.readFileSync(indexPath, 'utf8');

const p9 = index.indexOf('KHỐI LỚP 9');
console.log('p9 index:', p9);
console.log(JSON.stringify(index.substring(p9 - 40, p9 + 120)));
