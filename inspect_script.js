const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lsdl_8.html', 'utf8');

const scriptIdx = content.indexOf('<script>\n    // Dark mode logic');
if (scriptIdx !== -1) {
  console.log('--- FOUND SCRIPT ---');
  console.log(content.substring(scriptIdx, scriptIdx + 3000));
} else {
  const lastScript = content.lastIndexOf('<script>');
  console.log('--- LAST SCRIPT ---');
  console.log(content.substring(lastScript, lastScript + 3000));
}
