// Test katex parse error
// We can fetch or require katex if available, or write a tiny script to test katex parsing via https
const https = require('https');

https.get('https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Run katex in a vm context
    const vm = require('vm');
    const ctx = { window: {}, document: {} };
    vm.createContext(ctx);
    vm.runInContext(data, ctx);
    const katex = ctx.katex || ctx.window.katex;
    console.log('Katex version:', katex.version);

    // Test 1: with newline
    const latex1 = '\nA \\cup B = \\{x \\mid x \\in A \\text{ hoặc } x \\in B\\}\n';
    try {
      const html1 = katex.renderToString(latex1, { displayMode: true, throwOnError: true });
      console.log('Test 1 SUCCESS! Output length:', html1.length);
    } catch(e) {
      console.log('Test 1 ERROR:', e.message);
    }

    // Test 2: inline from Image 4
    const latex2 = 'x, y, ...';
    try {
      const html2 = katex.renderToString(latex2, { displayMode: false, throwOnError: true });
      console.log('Test 2 SUCCESS! Output length:', html2.length);
    } catch(e) {
      console.log('Test 2 ERROR:', e.message);
    }

    // Test 3: \\overline{P}
    const latex3 = '\\overline{P}';
    try {
      const html3 = katex.renderToString(latex3, { displayMode: false, throwOnError: true });
      console.log('Test 3 SUCCESS! Output length:', html3.length);
    } catch(e) {
      console.log('Test 3 ERROR:', e.message);
    }
  });
});
