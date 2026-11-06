const fs = require('fs');
const content = fs.readFileSync('scratch/user_chinese10_prompt.txt', 'utf8');

const lines = content.split('\n');
console.log(lines.slice(420, 477).join('\n'));
