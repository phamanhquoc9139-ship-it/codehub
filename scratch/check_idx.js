const fs = require('fs');
const content = fs.readFileSync('courses/toan_10.html', 'utf8');
console.log('idx1:', content.indexOf('MỆNH ĐỀ CHỨA BIẾN'));
console.log('idx2:', content.indexOf('PHÉP HỢP'));
