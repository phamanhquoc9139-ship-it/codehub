const fs = require('fs');
const d = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/vatly10_diagrams.js');

for (let i = 1; i <= 34; i++) {
  const raw = d[i];
  const m = /<i class="fa-solid fa-chart-line"><\/i>\s*([^<\n]+)/.exec(raw);
  const title = m ? m[1].trim() : 'Unknown';
  console.log(`Bài ${i}: ${title}`);
}
