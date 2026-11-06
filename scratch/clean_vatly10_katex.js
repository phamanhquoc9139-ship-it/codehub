const fs = require('fs');

const path = 'courses/vatly_10.html';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" onload="ensureMathRendered()"></script>',
  '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>'
);
content = content.replace(
  '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>',
  '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>'
);
content = content.replace(
  '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">',
  '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">'
);

// Also clean any $$ \n multiline in vatly_10.html
content = content.replace(/\$\$\s*\n([\s\S]*?)\n\s*\$\$/g, (match, formula) => {
  return `$$${formula.trim()}$$`;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Cleaned KaTeX in courses/vatly_10.html');
