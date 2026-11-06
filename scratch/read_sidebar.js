const fs = require('fs');
const html = fs.readFileSync('courses/gdqp_10.html', 'utf8');
const aside = html.match(/<aside[\s\S]*?<\/aside>/)?.[0] || '';
console.log('Sidebar full text:');
console.log(aside.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
