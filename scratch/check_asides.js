const fs = require('fs');
const files = fs.readdirSync('courses').filter(f => f.endsWith('.html'));
for (const f of files) {
  const content = fs.readFileSync('courses/' + f, 'utf8');
  const m = content.match(/<aside[^>]*class="([^"]*)"/);
  if (m) console.log(f, '--> aside class:', m[1]);
  const nav = content.match(/<nav[^>]*id="sidebar-nav"[^>]*class="([^"]*)"/);
  if (nav) console.log(f, '--> nav class:', nav[1]);
}
