const fs = require('fs');
const p1Code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p1.js', 'utf8');
const p2Code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p2.js', 'utf8');

const h4P1 = p1Code.match(/<h4[^>]*>[\s\S]*?<\/h4>/g);
console.log("=== H4 in P1 (bài 6-10) ===");
h4P1.slice(10).forEach(h => console.log(h.replace(/\s+/g, ' ')));

const h4P2 = p2Code.match(/<h4[^>]*>[\s\S]*?<\/h4>/g);
console.log("=== H4 in P2 (bài 11-20) ===");
h4P2.forEach(h => console.log(h.replace(/\s+/g, ' ')));
