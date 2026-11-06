const fs = require('fs');
const content = fs.readFileSync('scratch/build_tiengtrung10.js', 'utf8');

const asideIdx = content.indexOf('<aside');
console.log(content.substring(asideIdx - 100, asideIdx + 800));
