const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/congnghe_6_data.js', 'utf8');

const tableLines = content.split('\n').filter(l => l.trim().startsWith('|'));
console.log('Total table lines:', tableLines.length);
console.log('Sample table lines:');
tableLines.slice(0, 15).forEach(l => console.log(l));
