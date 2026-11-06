const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/nguvan_8.html', 'utf8');
console.log('nguvan_8.html size:', content.length);
console.log(content.substring(0, 1500));
