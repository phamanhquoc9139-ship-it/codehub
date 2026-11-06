const fs = require('fs');
const content = fs.readFileSync('scratch/build_tiengtrung10.js', 'utf8');

console.log('Size of build_tiengtrung10.js:', content.length);
console.log('First 60 lines:\n', content.split('\n').slice(0, 60).join('\n'));
