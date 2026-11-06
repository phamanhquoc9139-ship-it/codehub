const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Find all comments mentioning KHỐI or LỚP
const comments = index.match(/<!--.*?-->/g) || [];
const gradeComments = comments.filter(c => c.includes('KHỐI') || c.includes('LỚP') || c.includes('Lớp'));
console.log('Grade comments in index.html:', gradeComments);

// Find occurrences of toan_7, toan_8, toan_9
console.log('toan_7 pos:', index.indexOf('toan_7.html'));
console.log('toan_8 pos:', index.indexOf('toan_8.html'));
console.log('toan_9 pos:', index.indexOf('toan_9.html'));
