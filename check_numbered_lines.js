const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/congnghe_6_data.js', 'utf8');

const lines = content.split('\n');
const numLines = [];
lines.forEach((l, i) => {
    if (/^\s*\d+\.\s/.test(l)) {
        numLines.push(`${i+1}: ${l}`);
    }
});
console.log('Total numbered lines:', numLines.length);
console.log('Sample numbered lines:');
numLines.slice(0, 15).forEach(l => console.log(l));
