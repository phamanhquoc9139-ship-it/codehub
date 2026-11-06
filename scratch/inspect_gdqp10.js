const fs = require('fs');

console.log('gdqp_10.html size:', fs.statSync('courses/gdqp_10.html').size);
console.log('quocphong_10.html size:', fs.statSync('courses/quocphong_10.html').size);

const c = fs.readFileSync('courses/gdqp_10.html', 'utf8');
const asideMatch = c.match(/<aside[\s\S]*?<\/aside>/);
if (asideMatch) {
  console.log('Aside snippet:\n', asideMatch[0].slice(0, 1000));
}
