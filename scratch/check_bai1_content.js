const fs = require('fs');
const content = fs.readFileSync('courses/toan_10.html', 'utf8');

const idx = content.indexOf('KÍ HIỆU MỆNH ĐỀ');
console.log(content.slice(idx, idx + 600));
