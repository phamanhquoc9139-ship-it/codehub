const fs = require('fs');
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Find existing grade 6 cards
const grade6Regex = /<div[^>]*data-grade="6"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g;
let match;
const cards = [];
while ((match = grade6Regex.exec(indexHtml)) !== null) {
  cards.push(match[0]);
}
console.log('Found Grade 6 cards:', cards.length);
if (cards.length > 0) {
  console.log('Sample Grade 6 card:\n', cards[0].substring(0, 500));
}
