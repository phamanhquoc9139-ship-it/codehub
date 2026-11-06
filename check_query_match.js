const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const query = 'tin hoc 4';
const cards = [...indexHtml.matchAll(/<div[^>]*class="[^"]*rounded-2xl[^"]*"[\s\S]*?<\/div>\s*<\/div>/g)];
console.log('Searching for "tin hoc 4" in index.html...');
const matched = [];
cards.forEach((c, idx) => {
  const text = c[0].replace(/<[^>]+>/g, '').toLowerCase();
  if (text.includes(query)) {
    matched.push({ idx, text: text.substring(0, 150) });
  }
});
console.log('Matches count:', matched.length);
matched.forEach(m => console.log(m));
