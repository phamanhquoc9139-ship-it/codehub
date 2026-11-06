const fs = require('fs');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const gridStartTag = '<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" id="courses-grid">';
const gridStartIndex = html.indexOf(gridStartTag);
const gridEndIndex = html.indexOf('<div id="no-courses-found"');

const gridContent = html.substring(gridStartIndex + gridStartTag.length, gridEndIndex);

const cardRegex = /(?:(<!--\s*Course Card:\s*([^\n\r]*?)\s*-->)\s*)?(<div class="bg-white dark:bg-gray-700[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/gi;

const cards = [];
let match;
while ((match = cardRegex.exec(gridContent)) !== null) {
  const fullHtml = match[0].trim();
  const commentTitle = match[2] || '';
  const cardDiv = match[3];

  const titleMatch = cardDiv.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : commentTitle;

  const linkMatch = cardDiv.match(/href="([^"]+)"/i);
  const link = linkMatch ? linkMatch[1] : '';

  cards.push({ title, commentTitle, link, fullHtml });
}

// Print all cards with index, title, link
cards.forEach((c, idx) => {
  console.log(`${idx + 1}. [${c.title}] (${c.link})`);
});
