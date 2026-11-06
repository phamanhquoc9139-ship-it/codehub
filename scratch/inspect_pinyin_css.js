const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const cssIdx = content.indexOf('hide-pinyin');
console.log(content.substring(cssIdx - 50, cssIdx + 150));
