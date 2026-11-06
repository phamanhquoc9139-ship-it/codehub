const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const regex = /(?:KHỐI 7|LỚP 7)[\s\S]*?(?=(?:KHỐI 8|LỚP 8|<\/main>))/i;
const match = html.match(regex);
if (match) {
  // Let's print out the first card in grade 7
  const cardMatch = match[0].match(/<a[\s\S]*?courses\/congnghe_7\.html[\s\S]*?<\/a>/);
  if (cardMatch) {
    console.log('Cong nghe 7 card snippet:\n', cardMatch[0]);
  } else {
    // print first 1500 chars of section
    console.log(match[0].substring(0, 1500));
  }
}
