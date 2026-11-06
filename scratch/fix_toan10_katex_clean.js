const fs = require('fs');

const path = 'courses/toan_10.html';
let content = fs.readFileSync(path, 'utf8');

// 1. Clean head KaTeX section
const oldHeadScriptRegex = /<!-- KaTeX CSS & JS Auto-render -->[\s\S]*?<script defer src="https:\/\/cdn\.jsdelivr\.net\/npm\/katex@0\.16\.9\/dist\/contrib\/auto-render\.min\.js"[^>]*><\/script>/;

const newHeadKaTeX = `<!-- KaTeX CSS & JS Auto-render -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>`;

if (oldHeadScriptRegex.test(content)) {
  content = content.replace(oldHeadScriptRegex, newHeadKaTeX);
  console.log('Replaced KaTeX scripts in <head>');
} else {
  console.log('Old head KaTeX regex did not match, checking alternative...');
}

// 2. Clean all $$ with newlines inside
const countBefore = (content.match(/\$\$\s*\n/g) || []).length;
content = content.replace(/\$\$\s*\n([\s\S]*?)\n\s*\$\$/g, (match, formula) => {
  return `$$${formula.trim()}$$`;
});
console.log(`Cleaned ${countBefore} multiline $$ delimiters into single-line delimited formulas.`);

// 3. Update ensureMathRendered at bottom
const bottomRenderRegex = /\/\/ KaTeX Math Rendering Trigger[\s\S]*?setTimeout\(ensureMathRendered, 500\);/;
const newBottomRender = `// KaTeX Math Rendering Trigger with Retry Polling (ensures all display and inline equations render)
    function renderMath() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\\\[', right: '\\\\]', display: true},
            {left: '\\\\(', right: '\\\\)', display: false}
          ],
          throwOnError: false
        });
      }
    }

    function ensureMathRendered() {
      renderMath();
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (typeof renderMathInElement === 'function') {
          renderMath();
          if (attempts > 5) clearInterval(interval);
        }
        if (attempts > 30) clearInterval(interval);
      }, 200);
    }

    document.addEventListener("DOMContentLoaded", ensureMathRendered);
    window.addEventListener("load", ensureMathRendered);
    setTimeout(ensureMathRendered, 300);
    setTimeout(ensureMathRendered, 800);
    setTimeout(ensureMathRendered, 2000);`;

if (bottomRenderRegex.test(content)) {
  content = content.replace(bottomRenderRegex, newBottomRender);
  console.log('Replaced bottom KaTeX rendering script.');
} else {
  console.log('Bottom render regex did not match.');
}

fs.writeFileSync(path, content, 'utf8');
console.log('Updated courses/toan_10.html successfully! New size:', fs.statSync(path).size);
