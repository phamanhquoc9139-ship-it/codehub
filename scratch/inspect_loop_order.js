const fs = require('fs');
const content = fs.readFileSync('scratch/build_tiengtrung10.js', 'utf8');

const lines = content.split('\n');
console.log(lines.slice(55, 75).join('\n'));
