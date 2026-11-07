const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

function findLinks(keyword) {
  const regex = new RegExp(`href="([^"]*${keyword}[^"]*)"`, 'gi');
  let match;
  const matches = [];
  while ((match = regex.exec(indexHtml)) !== null) {
    matches.push(match[1]);
  }
  return matches;
}

console.log('hoa links in index.html:', findLinks('hoa'));
console.log('dia links in index.html:', findLinks('dia'));
console.log('gdqp links in index.html:', findLinks('gdqp'));
console.log('quocphong links in index.html:', findLinks('quocphong'));
