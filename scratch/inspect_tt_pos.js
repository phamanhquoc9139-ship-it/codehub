const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const pTT = index.indexOf('tiengtrung_9.html');
console.log('tiengtrung_9.html pos:', pTT);
console.log(index.substring(pTT - 200, pTT + 200));
