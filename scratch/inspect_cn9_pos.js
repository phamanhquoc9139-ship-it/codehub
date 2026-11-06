const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const p = index.indexOf('congnghe_9.html');
console.log('congnghe_9 pos:', p);
console.log(index.substring(p - 300, p + 200));
