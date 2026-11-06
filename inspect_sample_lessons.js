const fs = require('fs');
const text = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_all_text.txt', 'utf8');
const lines = text.split('\n\n');

for (let i = 66; i <= 95; i++) {
  console.log(`[${i}] ${lines[i]}`);
}
