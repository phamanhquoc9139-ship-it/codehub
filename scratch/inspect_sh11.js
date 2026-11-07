const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, '../courses/sinhhoc_11.html'), 'utf8');
const re = /<article id="bai-(\d+)"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>/g;
let m;
const list = [];
while ((m = re.exec(code)) !== null) {
  list.push({ num: parseInt(m[1]), title: m[2].replace(/<[^>]+>/g, '').trim() });
}
console.log('Total articles found:', list.length);
list.forEach(t => console.log(t.num, t.title));
