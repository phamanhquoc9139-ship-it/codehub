const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_congnghe_8_page.js', 'utf8');

const modalMatches = content.match(/id="[^"]*modal[^"]*"/gi);
console.log("Modal IDs:", modalMatches);

const filterMatches = content.match(/filter[a-zA-Z0-9_]*\([^)]*\)/gi);
console.log("Filter functions:", filterMatches);
