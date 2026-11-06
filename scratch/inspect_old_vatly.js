const fs = require('fs');
const html = fs.readFileSync('courses/vatly_10.html', 'utf8');

console.log('Size:', html.length);
console.log('Title:', html.match(/<title>[\s\S]*?<\/title>/)?.[0]);
console.log('Sample header:', html.slice(0, 600));
const baiMatches = html.match(/id="bai-\d+"/g) || [];
console.log('Existing bai IDs:', baiMatches.slice(0, 10), 'total:', baiMatches.length);
