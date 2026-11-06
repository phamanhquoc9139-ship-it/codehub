const fs = require('fs');
const html = fs.readFileSync('courses/toan_7.html', 'utf8');
const idx = html.lastIndexOf('<script>');
console.log(html.substring(idx));
