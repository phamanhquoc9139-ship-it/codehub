const fs = require('fs');
const html = fs.readFileSync('courses/toan_7.html', 'utf8');
const idx = html.indexOf('Các trường hợp bằng nhau đặc biệt');
console.log(html.substring(idx - 100, idx + 600));
