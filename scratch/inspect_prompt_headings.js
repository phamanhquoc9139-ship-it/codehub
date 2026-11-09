const fs = require('fs');
const content = fs.readFileSync('scratch/user_prompt_ict12.txt', 'utf8');
const lines = content.split('\n');
const headings = lines.filter(l => l.startsWith('#') || l.startsWith('##'));
console.log(headings.join('\n'));
