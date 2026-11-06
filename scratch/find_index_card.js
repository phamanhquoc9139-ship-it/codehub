const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('congnghe_9') || line.includes('amnhac_9') || line.includes('Khối Lớp 9') || line.includes('Lớp 9')) {
    console.log((idx + 1) + ': ' + line.trim().substring(0, 120));
  }
});
