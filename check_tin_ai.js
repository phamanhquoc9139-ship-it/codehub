const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const tinAiMatches = [...indexHtml.matchAll(/Tin & AI/g)];
tinAiMatches.forEach(m => {
  console.log(indexHtml.substring(m.index - 100, m.index + 150));
  console.log('---');
});
