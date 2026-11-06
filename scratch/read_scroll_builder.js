const fs = require('fs');
const content = fs.readFileSync('scratch/build_tiengtrung10.js', 'utf8');

const scrollIdx = content.indexOf("addEventListener('scroll'");
console.log(content.substring(scrollIdx, scrollIdx + 500));
