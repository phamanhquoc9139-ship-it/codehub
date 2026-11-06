const fs = require('fs');

const html = fs.readFileSync('courses/toan_9.html', 'utf8');
const cdns = html.match(/https:\/\/[^"'\s]+/g);
console.log('CDNs in toan_9.html:', [...new Set(cdns)]);
