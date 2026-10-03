const fs = require('fs');
const content = fs.readFileSync('courses/chuyende_toan_11.html', 'utf8');

const articles = (content.match(/<article[^>]*id="([^"]+)"[^>]*>/g) || []);
console.log('Total articles:', articles.length);
articles.forEach(a => console.log(a));

const headings = (content.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g) || []);
console.log('\nHeadings:');
headings.forEach(h => console.log(h.replace(/<[^>]+>/g, '').trim()));
