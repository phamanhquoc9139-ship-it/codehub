const fs = require('fs');
const html = fs.readFileSync('courses/gdqp_10.html', 'utf8');
const start = html.indexOf('id="bai-1"');
const end = html.indexOf('id="bai-2"');
console.log(html.slice(start, end));
