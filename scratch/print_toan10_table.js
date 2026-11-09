const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../courses/chuyende_toan_10.html'), 'utf8');
const tblStart = content.indexOf('<table');
const tblEnd = content.indexOf('</table>', tblStart);
console.log(content.substring(tblStart, tblEnd + 8));
