const fs = require('fs');
const indexContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const matches = indexContent.match(/href="[^"]*tiengtrung[^"]*"/g) || [];
console.log('tiengtrung links in index.html:', matches);
