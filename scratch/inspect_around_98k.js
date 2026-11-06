const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const index = fs.readFileSync(indexPath, 'utf8');

// Find all cards from 98000 to 108000
const sub = index.substring(97500, 108000);
const reg = /<!-- Course Card:\s*(.*?)\s*-->/g;
let m;
console.log('Cards around 98k-108k:');
while ((m = reg.exec(sub)) !== null) {
  console.log(m[1]);
}
