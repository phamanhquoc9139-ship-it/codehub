const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, 'build_sinhhoc10.js'), 'utf8');
const lines = code.split('\n');
console.log('Lines 500-600:\n', lines.slice(500, 600).join('\n'));
console.log('\nLines 800-900:\n', lines.slice(800, 900).join('\n'));
