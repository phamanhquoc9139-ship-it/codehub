const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

for (let i = 1; i <= 37; i++) {
  const start = t7.indexOf(`id="lesson-${i}"`);
  const end = i < 37 ? t7.indexOf(`id="lesson-${i+1}"`) : t7.indexOf('</main>');
  const snippet = t7.substring(start, end);
  const rawMatches = snippet.match(/x\^[a-z0-9]/g) || [];
  const slashMatches = snippet.match(/\d+\/\d+/g) || [];
  const degreeMatches = snippet.match(/\d+°/g) || [];
  if (rawMatches.length > 0 || slashMatches.length > 3) {
    console.log(`Lesson ${i}: rawExp=${rawMatches.length}, slashes=${slashMatches.length}`);
  }
}
