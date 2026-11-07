const fs = require('fs');
const md = fs.readFileSync('scratch/user_request_diali12.md', 'utf8');
const p = md.indexOf('Bài 24');
console.log(md.slice(p, p + 2500));
