const fs = require('fs');
const html = fs.readFileSync('courses/gdqp_10.html', 'utf8');
const start = html.indexOf('id="bai-1"');
const end = html.indexOf('id="bai-2"');
const b1 = html.slice(start, end);

// Find all h4, h5, or main titles inside b1
const titles = [...b1.matchAll(/<(h[345]|strong)[^>]*>([\s\S]*?)<\/\1>/g)].map(m => m[0].replace(/<[^>]+>/g, '').trim());
console.log('Titles found in Bai 1 HTML:');
console.log(titles.slice(0, 30));
