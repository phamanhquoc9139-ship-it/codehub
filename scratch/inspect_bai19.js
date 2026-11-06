const fs = require('fs');

const c = fs.readFileSync('courses/ktpl_10.html', 'utf8');
const p = c.indexOf('id="bai-19"');
console.log('--- Bài 19 in courses/ktpl_10.html ---');
console.log(c.slice(p, p + 2500));
