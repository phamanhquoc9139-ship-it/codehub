const fs = require('fs');
const p1Code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p1.js', 'utf8');

const h4Matches = p1Code.match(/<h4[^>]*>[\s\S]*?<\/h4>/g);
console.log("Found h4 in p1:", h4Matches.length);
h4Matches.slice(0, 10).forEach(h => console.log(h.replace(/\s+/g, ' ')));
