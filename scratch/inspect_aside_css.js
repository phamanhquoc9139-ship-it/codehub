const fs = require('fs');

const tt = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const asideIdx = tt.indexOf('<aside');
console.log(tt.substring(asideIdx, asideIdx + 400));
