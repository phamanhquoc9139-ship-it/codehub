const fs = require('fs');
const content = fs.readFileSync('courses/toan_10.html', 'utf8');

const inlineMatches = content.match(/\$([^$\n]+?)\$/g) || [];
console.log('Total inline math $...$ in toan_10.html:', inlineMatches.length);
console.log('First 10 inline math matches:', inlineMatches.slice(0, 10));

const blockMatches = content.match(/\$\$([\s\S]*?)\$\$/g) || [];
console.log('Total block math $$...$$ in toan_10.html:', blockMatches.length);
console.log('First 5 block math matches:', blockMatches.slice(0, 5));
