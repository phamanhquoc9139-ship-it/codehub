const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const headerIdx = content.indexOf('<header');
const headerEnd = content.indexOf('</header>');
console.log('--- HEADER ---');
console.log(content.substring(headerIdx, headerEnd + 9));
