const fs = require('fs');

const f = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoahoc12.html', 'utf8');

// Check every lesson's section titles and content
const lessons = f.match(/id="bai-\d+"[\s\S]*?(?=id="bai-\d+"|<\/main>)/g) || [];
console.log(`Found ${lessons.length} lessons in hoahoc12.html`);

lessons.forEach((l, i) => {
  const num = i + 1;
  const hasGeneric = /Kiến thức trọng tâm phần/i.test(l);
  const hasDashes = />\s*---\s*</.test(l) || /<li>---<\/li>/.test(l);
  const hasRawHash = /#\s+Chương|#\s+Bài/.test(l);
  const hasEmptyUl = /<ul[^>]*>\s*<\/ul>/.test(l);
  if (hasGeneric || hasDashes || hasRawHash || hasEmptyUl) {
    console.log(`Lesson ${num} has issue:`, { hasGeneric, hasDashes, hasRawHash, hasEmptyUl });
  }
});
