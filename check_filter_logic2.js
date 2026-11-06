const fs = require('fs');
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const filterScriptMatch = indexHtml.match(/function applyFiltering[\s\S]*?<\/script>/);
if (filterScriptMatch) {
  console.log(filterScriptMatch[0]);
}
