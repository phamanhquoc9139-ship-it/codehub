const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const p = index.indexOf('tienganh_9.html');
if (p > -1) {
  console.log('Context around tienganh_9.html:\n', index.substring(p - 300, p + 200));
}

// Find all occurrences of _9.html
const reg = /courses\/[a-zA-Z0-9_-]+_9\.html/g;
const courses9 = index.match(reg) || [];
console.log('Courses 9 list in index.html:', [...new Set(courses9)]);
