const fs = require('fs');
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const matches = [...indexHtml.matchAll(/m[iĩ]\s*thu[aậ]t\s*6/gi)];
console.log('Matches for "mĩ thuật 6":', matches.length);
matches.forEach(m => {
  console.log(indexHtml.substring(m.index - 100, m.index + 100));
});

const artMatches = [...indexHtml.matchAll(/art_6|mithuat_6/gi)];
console.log('Matches for art_6 or mithuat_6:', artMatches.length);
