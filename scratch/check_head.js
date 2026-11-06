const fs = require('fs');
const html = fs.readFileSync('courses/toan_7.html', 'utf8');
const head = html.match(/<head>[\s\S]*?<\/head>/)[0];
console.log(head);
