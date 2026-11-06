const fs = require('fs');

const p = fs.readFileSync('scratch/user_ktpl10_prompt.txt', 'utf8');
console.log('First 2000 chars:\n', p.slice(0, 2000));
