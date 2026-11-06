const fs = require('fs');
const content = fs.readFileSync('scratch/build_tiengtrung10.js', 'utf8');

const mIdx = content.indexOf('mobile-sidebar');
console.log(content.substring(mIdx - 100, mIdx + 600));
