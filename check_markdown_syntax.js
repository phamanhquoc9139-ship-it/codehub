const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/congnghe_6_data.js', 'utf8');

console.log('File size:', content.length);
// Check for bullet styles
console.log('Occurrences of "- ":', (content.match(/^- /gm) || []).length);
console.log('Occurrences of "+ ":', (content.match(/^\+ /gm) || []).length);
console.log('Occurrences of "1. ":', (content.match(/^\d+\. /gm) || []).length);
