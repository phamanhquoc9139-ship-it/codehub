const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

const gridLines = lines.slice(279, 3563);
const gridContent = gridLines.join('\n');

const cardBlocks = gridContent.split('<div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer').slice(1);

const cards = cardBlocks.map((chunk, i) => {
  const titleMatch = chunk.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  const linkMatch = chunk.match(/href="courses\/([^"]+)"/);
  const link = linkMatch ? linkMatch[1] : '';
  return { id: i + 1, title, link };
});

console.log('Total cards in index.html:', cards.length);

cards.forEach(c => {
  console.log(`${c.id}. ${c.title} -> ${c.link}`);
});
