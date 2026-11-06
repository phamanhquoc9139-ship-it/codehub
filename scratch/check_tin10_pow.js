const fs = require('fs');

const content = fs.readFileSync('courses/tinhoc_10.html', 'utf8');

const matches = [];
const regex = /([^<\n]{0,50}\d+\^\d+[^>\n]{0,50})/g;
let m;
while ((m = regex.exec(content)) !== null) {
  matches.push(m[0].trim());
}
console.log('Matches in tinhoc_10.html:', matches);
