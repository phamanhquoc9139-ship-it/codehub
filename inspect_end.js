const fs = require('fs');
const text = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_all_text.txt', 'utf8');
const lines = text.split('\n\n');

for (let i = 365; i < lines.length; i++) {
  console.log(`[${i}] ${lines[i]}`);
}
