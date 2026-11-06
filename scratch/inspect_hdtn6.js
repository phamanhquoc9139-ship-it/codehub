const fs = require('fs');

const f = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hdtn_6.html', 'utf8');

const modals = f.match(/id="[^"]*modal[^"]*"/gi) || [];
console.log('Modals in hdtn_6:', modals);

const h3s = f.match(/<h3[^>]*>[\s\S]*?<\/h3>/g) || [];
console.log('Total h3 in hdtn_6:', h3s.length);
h3s.slice(0, 10).forEach(h => console.log('  -', h.replace(/<[^>]+>/g, '').trim()));
