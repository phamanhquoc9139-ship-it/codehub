const fs = require('fs');
const c = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/chuyende_vatly_11.html', 'utf8');

const inlineMath = [];
const regex = /\$([^\$]+)\$/g;
let m;
while ((m = regex.exec(c)) !== null) {
  inlineMath.push(m[1]);
}
console.log('Total inline math items:', inlineMath.length);
console.log('Sample 10 items:');
inlineMath.slice(0, 10).forEach((item, i) => console.log(`${i+1}: $${item}$`));
