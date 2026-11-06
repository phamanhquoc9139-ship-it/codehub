const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/nguvan_8.html', 'utf8');
const lines = content.split('\n');

const ids = lines.filter(l => l.includes('id='));
console.log('Sample IDs in nguvan_8.html:');
ids.slice(0, 30).forEach(l => console.log('  ', l.trim()));
