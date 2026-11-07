const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_11.html', 'utf8');

[5, 16, 24].forEach(lessonId => {
  const marker = `id="mo-hinh-phan-ung-${lessonId}"`;
  const idx = s.indexOf(marker);
  if (idx !== -1) {
    console.log(`=== MODEL LESSON ${lessonId} ===`);
    console.log(s.slice(idx, idx + 800));
  }
});
