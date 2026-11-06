const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/build_all_graphics.js', 'utf8');

const regex = /\\\w+/g;
const matches = content.match(regex) || [];
console.log('Backslash commands found in graphics:', matches);
