const fs = require('fs');
const content = fs.readFileSync('courses/toan_10.html', 'utf8');

const idx1 = content.indexOf('MỆNH ĐỀ CHỨA BIẾN');
console.log('--- MỆNH ĐỀ CHỨA BIẾN ---');
console.log(content.substring(idx1 - 100, idx1 + 600));

const idx2 = content.indexOf('PHÉP HỢP');
console.log('--- PHÉP HỢP ---');
console.log(content.substring(idx2 - 100, idx2 + 600));
