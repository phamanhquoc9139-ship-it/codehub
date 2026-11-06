const fs = require('fs');

const fileP1 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p1.js';
const fileP2 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p2.js';

let p1 = fs.readFileSync(fileP1, 'utf8');
let p2 = fs.readFileSync(fileP2, 'utf8');

const countP1 = (p1.match(/&implies;/g) || []).length;
const countP2 = (p2.match(/&implies;/g) || []).length;

console.log(`Replacing ${countP1} in P1 and ${countP2} in P2...`);

p1 = p1.replaceAll('&implies;', '⇒');
p2 = p2.replaceAll('&implies;', '⇒');

fs.writeFileSync(fileP1, p1, 'utf8');
fs.writeFileSync(fileP2, p2, 'utf8');

console.log('Updated data files successfully.');
