const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/congnghe_6_data.js', 'utf8');

const lines = content.split('\n');
console.log('Occurrences of "# ":', (content.match(/^# /gm) || []).length);
console.log('Occurrences of "## ":', (content.match(/^## /gm) || []).length);
console.log('Occurrences of "### ":', (content.match(/^### /gm) || []).length);
console.log('Occurrences of "#### ":', (content.match(/^#### /gm) || []).length);
