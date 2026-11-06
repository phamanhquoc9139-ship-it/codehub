const fs = require('fs');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html', 'utf8');

const laws = [14, 15, 16, 21, 25, 26, 28, 29, 33];
for (const num of laws) {
  const start = html.indexOf(`id="bai-${num}"`);
  const nextStart = html.indexOf(`id="bai-${num+1}"`);
  const chunk = html.substring(start, nextStart);
  const hasLawBox = chunk.includes('border-l-4 border-indigo-500');
  console.log(`Bài ${num}: Law highlight box present:`, hasLawBox);
}
