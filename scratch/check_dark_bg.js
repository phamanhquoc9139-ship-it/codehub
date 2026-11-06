const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const regex = /dark:bg-([a-zA-Z0-9\/-]+)/g;
const found = new Set();
let m;
while ((m = regex.exec(content)) !== null) {
  found.add(m[1]);
}
console.log('dark:bg- classes found:', Array.from(found));
