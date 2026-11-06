const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_chebienthucpham_9.html', 'utf8');

const lessons = ['bai-1', 'bai-2', 'bai-3', 'bai-4', 'bai-5', 'bai-6', 'bai-7'];
lessons.forEach(id => {
  const start = html.indexOf(`id="${id}"`);
  const next = html.indexOf('class="lesson-card', start + 20);
  const chunk = html.substring(start, next !== -1 ? next : start + 3000);
  const diagramTitleMatch = chunk.match(/<div class="text-xs font-bold uppercase tracking-wider[^>]*>([\s\S]*?)<\/div>/);
  console.log(`${id.toUpperCase()}:`, diagramTitleMatch ? diagramTitleMatch[1].replace(/<[^>]+>/g, '').trim() : 'NO DIAGRAM TITLE');
});
