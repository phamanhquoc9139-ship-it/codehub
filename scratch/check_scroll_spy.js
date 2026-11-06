const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const scrollIdx = content.indexOf("addEventListener('scroll'");
if (scrollIdx !== -1) {
  console.log(content.substring(scrollIdx, scrollIdx + 600));
}
