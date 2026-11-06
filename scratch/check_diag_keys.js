const fs = require('fs');
const diag = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/toan10_diagrams.js');

console.log('Diagrams keys:', Object.keys(diag));
for (let i = 1; i <= 30; i++) {
  if (!diag[i]) console.log('Missing diagram for lesson:', i);
}
