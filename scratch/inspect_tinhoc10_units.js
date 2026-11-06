const fs = require('fs');

const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tinhoc_10.html';
const content = fs.readFileSync(path, 'utf8');

const matches = content.match(/.{0,40}(1024|byte|bội|lũy thừa).{0,40}/gi);
console.log('Matches in tinhoc_10.html:');
if (matches) {
  console.log(matches.slice(0, 10));
}
