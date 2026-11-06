const fs = require('fs');
const d = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/gdtc8_data.js', 'utf8');
console.log(d.substring(0, 1000));
console.log('--- END OF FILE SNIPPET ---');
console.log(d.substring(d.length - 500));
