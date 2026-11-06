const fs = require('fs');
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const idx8 = indexHtml.indexOf('Course Card: Mĩ Thuật 8');
if (idx8 !== -1) {
  const endIdx = indexHtml.indexOf('<!-- ==================== KHỐI LỚP 9', idx8);
  console.log(indexHtml.substring(idx8 - 30, endIdx));
} else {
  console.log('Not found');
}
