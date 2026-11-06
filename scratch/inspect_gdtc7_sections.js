const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdtc_7.html', 'utf8');

const sectionMatches = content.match(/<section[^>]*id="[^"]*"[^>]*>/g) || [];
console.log("Sections in gdtc_7:", sectionMatches);
