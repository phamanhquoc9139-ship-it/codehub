const fs = require('fs');
const d = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/vatly10_diagrams.js');
console.log('Keys and preview:');
for (const k of Object.keys(d)) {
  console.log('---', k, '---');
  console.log(d[k].substring(0, 150));
}
