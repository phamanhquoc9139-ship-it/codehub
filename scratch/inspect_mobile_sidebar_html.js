const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const idx = content.indexOf('id="mobile-sidebar"');
console.log(content.substring(idx - 100, idx + 600));
