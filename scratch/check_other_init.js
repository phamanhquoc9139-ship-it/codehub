const fs = require('fs');

const files = ['courses/toan_9.html', 'courses/toan_11.html'];
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  let idx = 0;
  while ((idx = c.indexOf('renderMathInElement', idx)) !== -1) {
    console.log(`=== ${f} renderMathInElement ===`);
    console.log(c.substring(idx - 100, idx + 400));
    idx += 19;
  }
}
