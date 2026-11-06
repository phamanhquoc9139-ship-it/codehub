const fs = require('fs');

for (const f of ['courses/tiengtrung_10.html', 'courses/tinhoc_10.html']) {
  console.log('=== FILE:', f, '===');
  const html = fs.readFileSync(f, 'utf8');
  const nav = html.match(/<nav[^>]*id="sidebar-nav"[^>]*>/);
  console.log('Nav tag:', nav ? nav[0] : 'NOT FOUND');
  const aside = html.match(/<aside[^>]*class="([^"]*)"/);
  console.log('Aside class:', aside ? aside[1] : 'NOT FOUND');
}
