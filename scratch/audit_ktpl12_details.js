const fs = require('fs');

const f = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/ktpl_12.html', 'utf8');

const lessons = f.match(/id="bai-\d+"[\s\S]*?(?=id="bai-\d+"|<\/main>)/g) || [];
console.log(`Found ${lessons.length} lessons in ktpl_12.html`);

lessons.forEach((l, i) => {
  const num = i + 1;
  const hasGeneric = /Kiến thức trọng tâm phần/i.test(l);
  const hasDashes = />\s*---\s*</.test(l) || /<li>---<\/li>/.test(l);
  const hasRawHash = /#\s+Chương|#\s+Bài/.test(l);
  const hasEmptyUl = /<div class="space-y-[^"]*">\s*<\/div>/.test(l);
  if (hasGeneric || hasDashes || hasRawHash || hasEmptyUl) {
    console.log(`Lesson ${num} has issue:`, { hasGeneric, hasDashes, hasRawHash, hasEmptyUl });
  }
});
