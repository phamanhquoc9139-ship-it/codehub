const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Find all matches of 218
const matches218 = [...indexHtml.matchAll(/218/g)];
matches218.forEach(m => {
  console.log(indexHtml.substring(m.index - 50, m.index + 50));
  console.log('---');
});
