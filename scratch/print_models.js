const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_11.html', 'utf8');

const regex = /<div id="mo-hinh-phan-ung-(\d+)"[\s\S]*?(?=<div id="mo-hinh-phan-ung-|$)/g;
let match;
let count = 0;
while ((match = regex.exec(s)) !== null) {
  count++;
  console.log(`=== MODEL ${count} ===`);
  console.log(match[0].slice(0, 1000));
}
console.log('Total models:', count);
