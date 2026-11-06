const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/build_all_graphics.js', 'utf8');

const regex = /if\s*\(\s*id\s*===\s*(\d+)\s*\)/g;
const ids = [];
let m;
while ((m = regex.exec(content)) !== null) {
  ids.push(parseInt(m[1]));
}
console.log('Defined specific IDs in build_all_graphics:', ids.sort((a,b)=>a-b));

// Check for $\rightarrow$ or any LaTeX in build_all_graphics.js
const latexMatches = content.match(/\$[^$]+\$/g) || [];
console.log('LaTeX matches found:', latexMatches);
