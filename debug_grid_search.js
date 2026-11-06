const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Find all cards in #courses-grid
const gridIdx = indexHtml.indexOf('id="courses-grid"');
const gridEnd = indexHtml.indexOf('<!-- Phân trang hoặc tải thêm -->', gridIdx);
const gridHtml = indexHtml.substring(gridIdx, gridEnd);

const cardRegex = /<div\s+onclick="window\.location\.href='([^']+)'"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g;
let m;
const cards = [];
while ((m = cardRegex.exec(gridHtml)) !== null) {
  cards.push({
    url: m[1],
    title: m[2].replace(/<[^>]+>/g, '').trim(),
    desc: m[3].replace(/<[^>]+>/g, '').trim()
  });
}

console.log('Total cards found in #courses-grid:', cards.length);

const query = 'tin hoc 4';
cards.forEach((c, i) => {
  const cardText = (c.title + ' ' + c.desc).toLowerCase();
  if (cardText.includes(query)) {
    console.log(`Matched card #${i}: ${c.title} (url: ${c.url})`);
  }
});
