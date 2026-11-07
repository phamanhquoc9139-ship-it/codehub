const fs = require('fs');
const content = fs.readFileSync('courses/gdqp_10.html', 'utf8');
const re = /id="([^"]+)"/g;
let m;
const ids = [];
while ((m = re.exec(content)) !== null) {
  if (m[1].startsWith('bai-') || m[1].includes('tool') || m[1].includes('exam') || m[1].includes('modal') || m[1].includes('on-tap')) {
    ids.push(m[1]);
  }
}
console.log('Key IDs in gdqp_10:', ids);
