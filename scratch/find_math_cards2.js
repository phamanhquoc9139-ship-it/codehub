const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_9.html', 'utf8');
const idx = html.indexOf('$$\\');
if (idx >= 0) {
  console.log('Found $$\\ in toan_9:');
  console.log(html.substring(idx - 100, idx + 300));
} else {
  const idx2 = html.indexOf('$');
  console.log('Found $ in toan_9 at:', idx2);
  console.log(html.substring(idx2 - 50, idx2 + 250));
}
