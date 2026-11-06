const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const regex = /(?:KHỐI 7|LỚP 7)[\s\S]*?(?=(?:KHỐI 8|LỚP 8|<\/main>))/i;
const match = html.match(regex);
if (match) {
  console.log('Found grade 7 section: length', match[0].length);
  const re = /href=['"]([^'"]+)['"]/g;
  let m;
  const links = [];
  while ((m = re.exec(match[0])) !== null) {
    links.push(m[1]);
  }
  console.log('Grade 7 links:', links);
} else {
  console.log('No direct match');
}
