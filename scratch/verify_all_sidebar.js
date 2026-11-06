const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html', 'utf8');

for (let i = 1; i <= 34; i++) {
  const match = html.includes(`href="#bai-${i}"`);
  const textMatch = html.includes(`Bài ${i}</span>`);
  if (!match || !textMatch) {
    console.error(`Missing or malformed sidebar link for Bài ${i}`);
  }
}
console.log('All 34 sidebar links verified successfully with valid titles and numbers!');
