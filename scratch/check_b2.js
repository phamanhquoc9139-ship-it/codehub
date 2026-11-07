const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/user_request_hoa12.md', 'utf8');

const b2Idx = content.indexOf('## Bài 2.');
const b3Idx = content.indexOf('## Bài 3.');
console.log('Bài 2 content:');
console.log(content.slice(b2Idx, b3Idx));
