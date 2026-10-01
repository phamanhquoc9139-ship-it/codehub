const fs = require('fs');
const content = fs.readFileSync('courses/toan_12.html', 'utf8');

const regex = /<article id="(bai-\d+)"[\s\S]*?<\/article>/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const art = match[0];
  const title = (art.match(/<h3[^>]*>([\s\S]*?)<\/h3>/) || [])[1]?.trim().replace(/\s+/g, ' ');
  const h4s = [...art.matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/g)].map(h => h[1].trim().replace(/\s+/g, ' '));
  console.log(`=== ${match[1]}: ${title} ===`);
  h4s.forEach(h => console.log('  - ' + h));
}
