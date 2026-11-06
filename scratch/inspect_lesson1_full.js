const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/nguvan_8.html', 'utf8');
const start = content.indexOf('<article id="bai-1"');
const end = content.indexOf('<article id="bai-2"');
const lesson1 = content.substring(start, end);

// List all <h3> or section titles in lesson 1
const h3s = lesson1.match(/<h3[^>]*>[\s\S]*?<\/h3>/g) || [];
console.log('H3s in lesson 1:');
h3s.forEach(h => console.log('  ', h.replace(/<[^>]+>/g, '').trim()));
