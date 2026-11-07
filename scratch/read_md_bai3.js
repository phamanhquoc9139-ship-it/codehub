const fs = require('fs');
const md = fs.readFileSync('scratch/user_request_hoa12.md', 'utf8');
const p = md.indexOf('Bài 3');
console.log(md.slice(p, p + 800));
