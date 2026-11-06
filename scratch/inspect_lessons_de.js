const fs = require('fs');

const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html', 'utf8');

// find all titles, lektions, headers
const lektions = content.match(/<h3[^>]*>[\s\S]*?<\/h3>/g) || [];
console.log('Total h3:', lektions.length);
lektions.forEach(h => {
  const text = h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.includes('Lektion') || text.includes('Einheit') || text.includes('Start') || text.includes('Plattform') || text.includes('Landeskunde') || text.includes('Projekt')) {
    console.log('  -', text);
  }
});
