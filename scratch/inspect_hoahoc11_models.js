const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_11.html', 'utf8');

const regex = /id="mo-hinh-phan-ung-[^"]+"/g;
let match;
const matches = [];
while ((match = regex.exec(s)) !== null) {
  matches.push({ id: match[0], index: match.index });
}
console.log('Total reaction models in hoahoc_11:', matches.length);

if (matches.length > 0) {
  console.log('Sample model 1:');
  console.log(s.slice(matches[0].index - 50, matches[0].index + 1200));
}
