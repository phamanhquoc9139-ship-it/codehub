const fs = require('fs');
const html = fs.readFileSync('courses/vatly_10.html', 'utf8');

const regex = /<div class="font-mono font-bold text-([^"]+) text-center my-1 text-sm">([\s\S]*?)<\/div>/g;
let m;
let count = 0;
while ((m = regex.exec(html)) !== null && count < 10) {
  count++;
  console.log(`Formula ${count}:`, m[2].trim());
}
console.log('Total formula divs matching regex:', (html.match(/<div class="font-mono font-bold text-[^"]+ text-center/g) || []).length);
