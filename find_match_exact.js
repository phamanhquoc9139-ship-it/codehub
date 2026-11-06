const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Find all cards inside #courses-grid
const gridIdx = indexHtml.indexOf('id="courses-grid"');
const gridEnd = indexHtml.indexOf('id="no-courses-found"', gridIdx);
const gridHtml = indexHtml.substring(gridIdx, gridEnd);

// Split into card divs
const cardRegex = /<div class="bg-white dark:bg-gray-700[\s\S]*?(?=(?:<div class="bg-white dark:bg-gray-700|$))/g;
const cards = [...gridHtml.matchAll(cardRegex)];

console.log('Cards matched:', cards.length);

cards.forEach((c, idx) => {
  const text = c[0].replace(/<[^>]+>/g, ' ').toLowerCase();
  if (text.includes('tin hoc 4')) {
    console.log(`Card ${idx} matches "tin hoc 4":`, text.substring(0, 100));
  }
});
