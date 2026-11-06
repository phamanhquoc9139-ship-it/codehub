const fs = require('fs');
const p = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan10.js';
let code = fs.readFileSync(p, 'utf8');

code = code.replace(
  '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>',
  '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" onload="ensureMathRendered()"></script>'
);

fs.writeFileSync(p, code, 'utf8');
console.log('Added onload="ensureMathRendered()" to KaTeX auto-render in build_toan10.js');
