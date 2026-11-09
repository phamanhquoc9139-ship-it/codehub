const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../courses/chuyende_vatli_11.html'), 'utf8');
const idx = content.indexOf('function renderMathOnPage()');
console.log(JSON.stringify(content.substring(idx, idx + 400)));
