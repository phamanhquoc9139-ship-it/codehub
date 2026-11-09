const fs = require('fs');
const files = ['chuyende_vatly_11.html', 'chuyende_vatli_11.html', 'chuyende_ly_11.html'];

for (const f of files) {
  const p = 'courses/' + f;
  if (!fs.existsSync(p)) continue;
  let c = fs.readFileSync(p, 'utf8');
  
  const search = `    function renderMathOnPage() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }`;

  const repl = `    let mathRetryCount = 0;
    function renderMathOnPage() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\\\[', right: '\\\\]', display: true },
            { left: '\\\\(', right: '\\\\)', display: false },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } else if (mathRetryCount++ < 50) {
        setTimeout(renderMathOnPage, 100);
      }
    }`;

  if (c.includes(search)) {
    c = c.replace(search, repl);
    fs.writeFileSync(p, c, 'utf8');
    console.log('Successfully updated KaTeX retry in', f);
  } else {
    console.log('Search block not matched in', f);
  }
}
