const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const pinyinIdx = content.indexOf('togglePinyin');
console.log('--- togglePinyin function ---');
console.log(content.substring(pinyinIdx, pinyinIdx + 400));
