const fs = require('fs');
const content = fs.readFileSync('courses/ktpl_12.html', 'utf8');
console.log('Size:', content.length);
console.log(content.slice(0, 1500));
