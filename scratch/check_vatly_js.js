const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html', 'utf8');

const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
let m;
let scriptIdx = 0;
while ((m = scriptRegex.exec(content)) !== null) {
  scriptIdx++;
  const scriptContent = m[1];
  console.log(`Checking Vat Ly 10 inline script #${scriptIdx} (length: ${scriptContent.length})`);
  try {
    new Function(scriptContent);
    console.log(`Script #${scriptIdx} syntax OK!`);
  } catch (err) {
    console.error(`Script #${scriptIdx} SYNTAX ERROR:`, err.message);
  }
}
