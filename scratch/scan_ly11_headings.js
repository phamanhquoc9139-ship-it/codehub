const fs = require('fs');
const text = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/user_request_ly11.txt', 'utf8');
const lines = text.split('\n');
lines.forEach((l, i) => {
  if (l.startsWith('#') || l.startsWith('## ') || l.startsWith('### ')) {
    console.log(`L${i}: ${l}`);
  }
});
