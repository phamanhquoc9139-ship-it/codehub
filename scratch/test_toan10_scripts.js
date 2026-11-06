const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('courses/toan_10.html', 'utf8');

// extract inline scripts
const scriptRegex = /<script(?![^>]*src=)([^>]*)>([\s\S]*?)<\/script>/gi;
let match;
let count = 0;
while ((match = scriptRegex.exec(html)) !== null) {
  count++;
  const code = match[2];
  console.log(`Testing script ${count} (length ${code.length})...`);
  try {
    // Check syntax with vm
    new vm.Script(code);
    console.log(`Script ${count} syntax OK.`);
  } catch(e) {
    console.error(`Script ${count} SYNTAX ERROR:`, e.message);
  }
}
