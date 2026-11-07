const fs = require('fs');
const content = fs.readFileSync('courses/gdqp_10.html', 'utf8');
console.log('Size gdqp_10:', content.length);
console.log(content.slice(0, 1500));
