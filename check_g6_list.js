const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const { getCards } = require('./parse_helper.js');

const cards = getCards(content);
const g6 = cards.filter(c => c.grade === 6);
console.log('Grade 6 courses (' + g6.length + '):');
g6.forEach((c, i) => console.log(`  ${i+1}. ${c.title}`));
