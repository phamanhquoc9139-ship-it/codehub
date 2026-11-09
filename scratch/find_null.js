const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/chuyende_vatly_11.html', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('null')) {
    console.log(`Line ${i}: ${l}`);
  }
});
