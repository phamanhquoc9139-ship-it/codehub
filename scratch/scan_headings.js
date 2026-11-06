const fs = require('fs');

const p = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/user_prompt_gdtc8.txt', 'utf8');

const headings = p.match(/^#{1,4}\s+.+$/gm) || [];
console.log('All Headings in prompt:');
headings.forEach(h => console.log(h));
