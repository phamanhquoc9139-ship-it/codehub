const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

const matches = [];
let re = /<script[^>]*>/gi;
let m;
while ((m = re.exec(content)) !== null) {
  matches.push({
    tag: m[0],
    after: content.slice(m.index + m[0].length, m.index + m[0].length + 30)
  });
}
console.log(matches);
