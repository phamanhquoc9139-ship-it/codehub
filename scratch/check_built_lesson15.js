const fs = require('fs');
const html = fs.readFileSync('courses/toan_7.html', 'utf8');

const idx = html.indexOf('id="lesson-15"');
const endIdx = html.indexOf('</article>', idx);
console.log(html.substring(idx, endIdx + 10));
