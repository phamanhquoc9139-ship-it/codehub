const fs = require('fs');
const p = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html';
let content = fs.readFileSync(p, 'utf8');

content = content.replace(
  '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>',
  '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" onload="ensureMathRendered()"></script>'
);

fs.writeFileSync(p, content, 'utf8');
console.log('Added onload="ensureMathRendered()" to vatly_10.html');
