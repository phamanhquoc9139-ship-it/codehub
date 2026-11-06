const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const inputIdx = indexHtml.indexOf('courseSearchInput');
console.log(indexHtml.substring(inputIdx - 50, inputIdx + 400));

// Find all event listeners on courseSearchInput
const elMatches = [...indexHtml.matchAll(/courseSearchInput/g)];
console.log('Total courseSearchInput mentions:', elMatches.length);
elMatches.forEach(m => {
  console.log(indexHtml.substring(m.index - 50, m.index + 200));
  console.log('---');
});
