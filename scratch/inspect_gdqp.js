const fs = require('fs');
const html = fs.readFileSync('courses/gdqp_10.html', 'utf8');

console.log('Sidebar links count:');
const matches = [...html.matchAll(/<a href="(#bai-\d+)"/g)];
console.log('Total #bai-X links:', matches.length);
console.log(matches.map(m => m[1]));

console.log('Checking quiz headers:');
const quizHeaders = html.match(/Mini-Quiz[^\n<]*/g);
console.log('Quiz headers count:', quizHeaders ? quizHeaders.length : 0);
if (quizHeaders) console.log(quizHeaders.slice(0, 3));

console.log('IDs in document:');
const ids = [...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
console.log(ids);
