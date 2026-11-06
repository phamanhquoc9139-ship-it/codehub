const fs = require('fs');

const files = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/math_7.html'
];

const cssToAdd = `
    /* Đảm bảo tuyệt đối chống dính chữ & hiển thị sắc nét tiếng Việt */
    body, p, span, li, h1, h2, h3, h4, button, strong {
      letter-spacing: 0.01em !important;
      word-spacing: normal !important;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .lesson-card p, .lesson-card li {
      line-height: 1.65 !important;
    }
    svg text {
      letter-spacing: 0px !important;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      user-select: none;
    }
`;

const jsToReplace = `
    // KaTeX Math Auto-render với Polling bảo vệ nhiều lớp
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
        if (attempts > 25) clearInterval(interval);
      }, 300);
    }

    document.addEventListener("DOMContentLoaded", ensureMathRendered);
    window.addEventListener("load", ensureMathRendered);
    setTimeout(ensureMathRendered, 500);
    setTimeout(ensureMathRendered, 1500);
`;

files.forEach(fp => {
  let content = fs.readFileSync(fp, 'utf8');

  // Thêm CSS chống dính chữ vào thẻ style
  if (!content.includes('Đảm bảo tuyệt đối chống dính chữ')) {
    content = content.replace('</style>', cssToAdd + '\n  </style>');
  }

  // Cập nhật hàm renderMath an toàn hơn
  const oldScriptStart = content.indexOf('// KaTeX Math Auto-render function');
  if (oldScriptStart !== -1) {
    const oldScriptEnd = content.indexOf('window.addEventListener("load", renderMath);') + 'window.addEventListener("load", renderMath);'.length;
    content = content.substring(0, oldScriptStart) + jsToReplace + content.substring(oldScriptEnd);
  }

  fs.writeFileSync(fp, content, 'utf8');
  console.log(`Updated ${fp} successfully! Size: ${fs.statSync(fp).size} bytes`);
});
