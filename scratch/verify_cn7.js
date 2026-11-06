const fs = require('fs');

const f1 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');
const f2 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/technology_7.html', 'utf8');

console.log('--- Cong Nghe 7 Verification ---');
console.log('File size:', f1.length);
console.log('Identical check:', f1 === f2);

const sections = f1.match(/<section id="([^"]+)" class="lesson-section[^"]*">/g) || [];
console.log('Total lesson sections:', sections.length);

const svgs = (f1.match(/<svg/g) || []).length;
console.log('Total SVGs count:', svgs);

console.log('Back to index.html link present:', f1.includes('href="../index.html"'));
console.log('Has subjects.html:', f1.includes('subjects.html'));
console.log('Has toolModal:', f1.includes('toolModal'));
console.log('Has handbookModal:', f1.includes('handbookModal'));
console.log('Has examModal:', f1.includes('examModal'));

for (let i = 1; i <= 16; i++) {
  const hasBai = f1.includes(`id="bai-${i}"`);
  console.log(`Bài ${i} section present:`, hasBai ? '✅' : '❌');
}
console.log('Ôn tập section present:', f1.includes('id="on-tap-toan-mon"') ? '✅' : '❌');
