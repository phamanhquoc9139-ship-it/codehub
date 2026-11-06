const fs = require('fs');

const c = fs.readFileSync('courses/ktpl_10.html', 'utf8');
const asideMatch = c.match(/<aside[\s\S]*?<\/aside>/);
console.log(asideMatch[0].slice(0, 2000));
