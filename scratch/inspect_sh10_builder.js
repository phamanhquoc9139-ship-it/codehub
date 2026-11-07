const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, 'build_sinhhoc10.js'), 'utf8');
console.log('build_sinhhoc10.js lines:', code.split('\n').length);
console.log('First 1200 chars:\n', code.slice(0, 1200));
