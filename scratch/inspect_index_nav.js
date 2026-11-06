const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Check navbar or subject filter in index.html
const pNav = index.substring(0, 5000);
console.log('Index head and navigation preview:\n', pNav.substring(0, 2500));
