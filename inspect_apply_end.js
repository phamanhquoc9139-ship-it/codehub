const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const jsMatch = content.match(/if \(matchesFilter && matchesSearch\)[\s\S]*?function/);
if (jsMatch) {
    console.log(jsMatch[0]);
}
