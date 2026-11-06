const fs = require('fs');

const f1 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');
const sections = f1.match(/<section[^>]+id="bai-[^>]+>/g) || [];
console.log('Found bai sections:', sections);
