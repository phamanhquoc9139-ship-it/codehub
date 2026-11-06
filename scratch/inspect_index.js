const fs = require('fs');
const idx = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const matches = idx.match(/(?:Lớp 8|Khối 8|lop-8|grade8|khoi-8|tienganh_8|art_8)/gi);
console.log('Matches:', matches);

// Find where tienganh_8.html is mentioned
const pos = idx.indexOf('tienganh_8.html');
if (pos !== -1) {
  console.log('Found tienganh_8.html at:', pos);
  console.log('Snippet around it:\n', idx.substring(pos - 300, pos + 500));
}
