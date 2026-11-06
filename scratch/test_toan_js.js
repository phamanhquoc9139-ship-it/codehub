const fs = require('fs');
const vm = require('vm');

const toan = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

const scriptRegex = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let count = 0;
while ((match = scriptRegex.exec(toan)) !== null) {
  count++;
  const code = match[1];
  try {
    new vm.Script(code);
    console.log(`Script ${count}: Syntax OK (${code.length} chars)`);
  } catch (err) {
    console.error(`Script ${count} ERROR:`, err.message);
  }
}
