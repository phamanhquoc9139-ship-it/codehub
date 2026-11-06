const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
const indexHtml = fs.readFileSync(path, 'utf8');

const pos = indexHtml.indexOf('courses/tiengnhat_9.html');
console.log('tiengnhat_9 pos in index:', pos);
if (pos !== -1) {
  const cardEnd = indexHtml.indexOf('</div>\n                    </div>', pos) + 26;
  console.log('Snippet around card end:\n', indexHtml.slice(cardEnd - 100, cardEnd + 400));
}
