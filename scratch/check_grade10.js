const fs = require('fs');

const grade10 = fs.readFileSync('courses/grade_10.html', 'utf8');

console.log('grade_10 has PHÉP HỢP:', grade10.includes('PHÉP HỢP'));
console.log('grade_10 has MỆNH ĐỀ PHỦ ĐỊNH:', grade10.includes('MỆNH ĐỀ PHỦ ĐỊNH'));
console.log('grade_10 has Động lượng:', grade10.includes('Động lượng'));
console.log('grade_10 has P≡:', grade10.includes('P≡'));
console.log('grade_10 has \\u20D7:', grade10.includes('\u20D7'));
console.log('grade_10 has 2^10:', grade10.includes('2^10'));

const toan10 = fs.readFileSync('courses/toan_10.html', 'utf8');
console.log('toan_10 has PHÉP HỢP (UNION):', toan10.includes('PHÉP HỢP (UNION)'));
