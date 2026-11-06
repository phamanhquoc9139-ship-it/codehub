const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lsdl_8.html', 'utf8');

const regex = /<article[\s\S]*?<\/article>/;
const match = content.match(regex);
if (match) {
  console.log('--- FOUND ARTICLE (length: ' + match[0].length + ') ---');
  console.log(match[0].substring(0, 3000));
} else {
  console.log('No article tag found');
}
