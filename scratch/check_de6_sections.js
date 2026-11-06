const fs = require('fs');

const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html';
const content = fs.readFileSync(path, 'utf8');

const sections = content.match(/<section[^>]+>/g);
console.log('Sections found:', sections);

const h2s = content.match(/<h2[^>]*>[\s\S]*?<\/h2>/g);
console.log('H2s count:', h2s ? h2s.length : 0);
if (h2s) {
  h2s.slice(0, 15).forEach(h => console.log('H2:', h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()));
}
