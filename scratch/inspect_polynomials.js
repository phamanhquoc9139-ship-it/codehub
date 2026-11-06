const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

[25, 26, 27, 28].forEach(id => {
  const start = t7.indexOf(`id="lesson-${id}"`);
  const end = t7.indexOf(`id="lesson-${id+1}"`);
  console.log(`=== LESSON ${id} ===`);
  const snippet = t7.substring(start, end);
  const mathBlock = snippet.indexOf('<!-- Tóm tắt');
  const mathEnd = snippet.indexOf('<!-- Thực hành');
  console.log(snippet.substring(mathBlock, mathBlock + 1200));
});
