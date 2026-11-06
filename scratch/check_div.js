const fs = require('fs');
const path = require('path');

const t = fs.readFileSync(path.join(__dirname, '..', 'courses', 'toan_9.html'), 'utf8');
const p = t.indexOf('ax + by = c \\quad');
console.log('Snippet inside div:\n', t.substring(p - 10, p + 60));
