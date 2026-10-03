const fs = require('fs');
const content = fs.readFileSync('courses/chuyende_toan_11.html', 'utf8');

const articles = content.match(/<article[\s\S]*?<\/article>/g) || [];
console.log('Total articles:', articles.length);
articles.forEach((art, i) => {
  const idMatch = art.match(/id="([^"]+)"/);
  const titleMatch = art.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'No title';
  console.log(`Bài ${i + 1} (${idMatch ? idMatch[1] : 'no-id'}): ${title} - Length: ${art.length} chars`);
});
