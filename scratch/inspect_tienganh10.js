const fs = require('fs');
const indexContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const idx = indexContent.indexOf('courses/tienganh_10.html');
console.log(indexContent.slice(idx - 100, idx + 600));
