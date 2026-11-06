const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', 'utf8');

const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
let m;
let scriptIdx = 0;
while ((m = scriptRegex.exec(content)) !== null) {
  scriptIdx++;
  if (scriptIdx === 2) {
    const scriptContent = m[1];
    // Binary search or line-by-line inspection to find syntax error
    // Write the script to a temp file and parse with require('vm')
    const vm = require('vm');
    try {
      new vm.Script(scriptContent);
    } catch (e) {
      console.log('VM Error:', e.message);
      console.log('Stack:', e.stack);
    }
  }
}
