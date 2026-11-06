const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const heroIdx = content.indexOf('Học Liệu Tiếng Trung Quốc 10');
console.log(content.substring(heroIdx - 200, heroIdx + 800));
