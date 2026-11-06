const fs = require('fs');

const path = 'courses/tinhoc_10.html';
let content = fs.readFileSync(path, 'utf8');

// 1. Add KaTeX to head
if (!content.includes('katex.min.css')) {
  const headTarget = '</head>';
  const katexHead = `  <!-- KaTeX CSS & JS Auto-render -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
</head>`;
  content = content.replace(headTarget, katexHead);
  console.log('Added KaTeX to <head> of tinhoc_10.html');
}

// 2. Add ensureMathRendered before </body>
if (!content.includes('renderMathInElement')) {
  const bodyTarget = '</body>';
  const katexBody = `  <script>
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
  </script>
</body>`;
  content = content.replace(bodyTarget, katexBody);
  console.log('Added KaTeX script trigger before </body> of tinhoc_10.html');
}

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated courses/tinhoc_10.html! New size:', fs.statSync(path).size);
