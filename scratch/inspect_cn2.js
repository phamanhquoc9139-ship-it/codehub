const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

console.log('File length:', cn.length);
// Find where 'Trồng trọt' is in cn:
let pos = 0;
while (true) {
  pos = cn.indexOf('Trồng trọt', pos);
  if (pos === -1) break;
  console.log('Found "Trồng trọt" at:', pos);
  console.log(cn.substring(Math.max(0, pos - 100), Math.min(cn.length, pos + 150)));
  pos += 11;
  if (pos > 50000) break;
}
