const fs = require('fs');
const k10 = fs.readFileSync('courses/ktpl_10.html', 'utf8');
const k11 = fs.readFileSync('courses/ktpl_11.html', 'utf8');
console.log('ktpl_10 size:', k10.length);
console.log('ktpl_11 size:', k11.length);
console.log('ktpl_10 header snippet:\n', k10.slice(0, 800));
