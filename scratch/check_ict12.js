const fs = require('fs');
const content = fs.readFileSync('courses/chuyende_tinhoc_12_ict.html', 'utf8');
const matches = content.match(/id="bai-\d+"/g) || [];
console.log('Existing bai IDs:', matches);
