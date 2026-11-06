const fs = require('fs');
const html = fs.readFileSync('courses/ktpl_10.html', 'utf8');
const start = html.indexOf('id="bai-19"');
const end = html.indexOf('</article>', start);
console.log(html.slice(start, end));
