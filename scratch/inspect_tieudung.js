const fs = require('fs');

const c = fs.readFileSync('courses/ktpl_10.html', 'utf8');
const p = c.indexOf('Tín dụng tiêu dùng', c.indexOf('id="bai-9"'));
console.log(c.slice(p, p + 1200));
