const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

let idx = 0;
while ((idx = content.indexOf('MỤC LỤC BÀI HỌC', idx)) !== -1) {
  console.log('--- At index', idx, '---');
  console.log(content.substring(idx - 200, idx + 200));
  idx += 15;
}
