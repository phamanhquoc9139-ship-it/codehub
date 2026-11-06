const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/congnghe_6_data.js', 'utf8');

const lines = content.split('\n');
const listLines = [];
lines.forEach((l, i) => {
    if (/^\s*[-+*]\s/.test(l)) {
        listLines.push(`${i+1}: ${l}`);
    }
});
console.log('Total list lines with [-+*]:', listLines.length);
console.log('Sample list lines:');
listLines.slice(0, 20).forEach(l => console.log(l));
