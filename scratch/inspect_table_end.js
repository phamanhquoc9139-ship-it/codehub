const fs = require('fs');

const c = fs.readFileSync('courses/ktpl_10.html', 'utf8');
const p = c.indexOf('</table>', c.indexOf('id="bai-19"'));
console.log(c.slice(p, p + 900));
