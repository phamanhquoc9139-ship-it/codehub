const fs = require('fs');
const indexContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const idx = indexContent.indexOf('courses/tiengtrung_8.html');
console.log(indexContent.slice(idx - 200, idx + 400));
