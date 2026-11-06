const fs = require('fs');

const files = ['courses/toan_9.html', 'courses/toan_11.html', 'courses/toan_12.html', 'courses/toan_7.html'];
for (const f of files) {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    const idx = c.indexOf('katex');
    if (idx !== -1) {
      console.log(`=== ${f} KaTeX section ===`);
      console.log(c.substring(idx - 50, idx + 600));
    }
  }
}
