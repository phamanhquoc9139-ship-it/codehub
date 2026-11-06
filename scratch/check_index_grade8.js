const fs = require('fs');
const idx = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const m = idx.match(/id=['"]grade-8['"][\s\S]*?(?=id=['"]grade-9['"])/);
if (m) {
  console.log('Grade 8 section found, length:', m[0].length);
  const cardMatches = m[0].match(/<a\s+href=['"][^'"]+['"]\s+class=['"][^'"]*course-card/g);
  console.log('Course cards:', cardMatches);
} else {
  console.log('grade-8 section not found');
}
