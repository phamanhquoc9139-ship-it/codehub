const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_9.html', 'utf8');
const idx = html.indexOf('bg-blue-50/70');
if (idx >= 0) {
  console.log('Found equation in toan_9:');
  console.log(html.substring(idx - 100, idx + 400));
} else {
  console.log('bg-blue-50/70 not found, finding katex in toan_9:');
  const kIdx = html.indexOf('\\[');
  console.log(html.substring(kIdx - 100, kIdx + 300));
}
