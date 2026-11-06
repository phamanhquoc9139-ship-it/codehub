const fs = require('fs');
const content = fs.readFileSync('scratch/user_chinese10_prompt.txt', 'utf8');
console.log(content.substring(0, 1500));
