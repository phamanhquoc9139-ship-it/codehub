const fs = require('fs');
const html = fs.readFileSync('courses/hoahoc_12.html', 'utf8');

const b3 = html.substring(html.indexOf('id="b3-noi-dung"'), html.indexOf('id="b3-so-do"'));
console.log(b3);
