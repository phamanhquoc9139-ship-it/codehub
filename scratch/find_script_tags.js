const fs = require('fs');
const code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan10.js', 'utf8');

const matches = [];
let re = /<script/gi;
let m;
while ((m = re.exec(code)) !== null) {
  matches.push(m.index);
}
console.log('Script tags count:', matches.length);
matches.forEach(idx => {
  console.log(code.slice(idx, idx + 40));
});
