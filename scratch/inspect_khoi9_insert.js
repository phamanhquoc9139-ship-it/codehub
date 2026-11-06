const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const index = fs.readFileSync(indexPath, 'utf8');

const p9 = index.indexOf('KHỐI LỚP 9');
console.log('Position of KHỐI LỚP 9:', p9);
console.log(index.substring(p9 - 150, p9 + 400));
