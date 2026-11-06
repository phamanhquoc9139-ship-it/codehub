const fs = require('fs');

for (const f of ['courses/toan_9.html', 'courses/vatly_10.html', 'courses/toan_8.html']) {
  if (fs.existsSync(f)) {
    console.log('=== ' + f + ' ===');
    const content = fs.readFileSync(f, 'utf8');
    const headScripts = content.match(/<script[^>]*katex[^>]*>[\s\S]*?<\/script>/g) || content.match(/<script[^>]*katex[^>]*>/g) || [];
    console.log('Head scripts:', headScripts);
    const renderFn = content.match(/function renderMath[\s\S]*?<\/script>/);
    console.log('Render fn snippet:', renderFn ? renderFn[0].slice(0, 300) : 'none');
  }
}
