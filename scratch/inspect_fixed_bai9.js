const fs = require('fs');
const html = fs.readFileSync('courses/diali_12.html', 'utf8');
const p = html.indexOf('Hai mặt của đô thị hóa và yêu cầu quy hoạch bền vững');
console.log(html.slice(p - 100, p + 1200));
