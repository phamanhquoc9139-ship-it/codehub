const fs = require('fs');
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const filterScriptMatch = indexHtml.match(/function applyFilter[\s\S]*?<\/script>/);
if (filterScriptMatch) {
  console.log(filterScriptMatch[0].substring(0, 1000));
} else {
  console.log('applyFilter not found');
}
