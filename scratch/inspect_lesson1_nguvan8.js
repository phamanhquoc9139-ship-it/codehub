const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/nguvan_8.html', 'utf8');

const start = content.indexOf('<article id="bai-1"');
const end = content.indexOf('<article id="bai-2"');
console.log(content.substring(start, start + 3000));
