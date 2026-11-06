const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_8.html', 'utf8');

const svgs = html.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log("Total SVGs in congnghe_8.html now:", svgs.length);

// Đếm theo từng bài
for (let i = 1; i <= 20; i++) {
  const start = html.indexOf(`id="bai-${i}"`);
  const end = i < 20 ? html.indexOf(`id="bai-${i+1}"`) : html.indexOf('id="section-exam"');
  const lessonHtml = html.substring(start, end);
  const count = (lessonHtml.match(/<svg/g) || []).length;
  console.log(`Bài ${i}: ${count} SVG(s)`);
}
