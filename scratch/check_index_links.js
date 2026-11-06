const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
console.log('index.html links to tienganh_10.html:', indexHtml.includes('tienganh_10.html'));
console.log('index.html links to toan_10.html:', indexHtml.includes('toan_10.html'));
console.log('index.html links to vatly_10.html:', indexHtml.includes('vatly_10.html'));
console.log('index.html links to tinhoc_10.html:', indexHtml.includes('tinhoc_10.html'));
console.log('index.html links to tiengtrung_10.html:', indexHtml.includes('tiengtrung_10.html'));
