const fs = require('fs');

const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html';
let content = fs.readFileSync(path, 'utf8');

const regex = /<script defer src="https:\/\/cdn\.jsdelivr\.net\/npm\/katex@0\.16\.9\/dist\/katex\.min\.js"><\/script>\s*<script defer src="https:\/\/cdn\.jsdelivr\.net\/npm\/katex@0\.16\.9\/dist\/contrib\/auto-render\.min\.js" onload="ensureMathRendered\(\)"><\/script>/;

const replacement = `<script>
    window.renderMath = function() {
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
    };
    window.ensureMathRendered = function() {
      window.renderMath();
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (typeof renderMathInElement === 'function') {
          window.renderMath();
          if (attempts > 6) clearInterval(interval);
        }
        if (attempts > 20) clearInterval(interval);
      }, 200);
    };
  </script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" onload="window.ensureMathRendered && window.ensureMathRendered()"></script>`;

if (regex.test(content)) {
  content = content.replace(regex, () => replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated KaTeX scripts in toan_10.html');
} else {
  console.log('Regex did not match');
}
