const fs = require('fs');
const content = fs.readFileSync('scratch/user_chinese10_prompt.txt', 'utf8');

// Print sections of user_chinese10_prompt.txt
const lines = content.split('\n');
console.log('Total lines:', lines.length);
lines.forEach((l, i) => {
  if (l.startsWith('#') || l.startsWith('##') || l.startsWith('###')) {
    console.log(`L${i+1}: ${l}`);
  }
});
