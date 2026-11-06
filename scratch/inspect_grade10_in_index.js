const fs = require('fs');
const indexContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const matches = indexContent.match(/courses\/[a-z0-9_]+_10\.html/g) || [];
console.log('Grade 10 courses in index.html:', [...new Set(matches)]);
