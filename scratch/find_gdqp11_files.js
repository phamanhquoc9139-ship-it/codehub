const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';

const files = fs.readdirSync(path.join(baseDir, 'courses')).filter(f => f.includes('gdqp') || f.includes('quocphong'));
console.log('Existing GDQP files in courses:', files);

const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const regex = /href="([^"]*(?:gdqp|quocphong)[^"]*)"/gi;
let m;
const links = [];
while ((m = regex.exec(indexHtml)) !== null) {
  links.push(m[1]);
}
console.log('Links in index.html:', links);
