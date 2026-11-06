const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Check grade 6 courses
const g6Regex = /<!--\s*Khối Lớp 6[\s\S]*?-->([\s\S]*?)(?=<!--\s*Khối Lớp 7|$)/i;
const match = indexHtml.match(g6Regex);
if (match) {
  console.log('Grade 6 block found, length:', match[1].length);
  const titles = [...match[1].matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('Current Grade 6 course titles:', titles);
} else {
  console.log('Grade 6 block not matched directly, searching for "lop-6" or similar...');
  const cardMatches = [...indexHtml.matchAll(/data-grade="6"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>/g)];
  console.log('data-grade="6" titles:', cardMatches.map(m => m[1].replace(/<[^>]+>/g, '').trim()));
}
