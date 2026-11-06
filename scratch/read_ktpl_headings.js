const fs = require('fs');

const p = fs.readFileSync('scratch/user_ktpl10_prompt.txt', 'utf8');
const lines = p.split('\n');
lines.forEach((l, i) => {
  if (l.startsWith('#')) {
    console.log(l);
  }
});
