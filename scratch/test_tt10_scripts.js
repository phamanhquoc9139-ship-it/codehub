const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

const scriptRegex = /<script(?![^>]*src=)([^>]*)>([\s\S]*?)<\/script>/gi;
let m;
let i = 0;
while ((m = scriptRegex.exec(html)) !== null) {
  i++;
  const code = m[2];
  try {
    new vm.Script(code);
    console.log(`Script ${i} syntax: OK (${code.length} chars)`);
  } catch(e) {
    console.error(`Script ${i} ERROR:`, e.message);
  }
}
