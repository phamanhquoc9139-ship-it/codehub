const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';

const kinhte = fs.readFileSync(path.join(baseDir, 'scratch/ktpl12_data_kinhte.js'), 'utf8');
console.log('ktpl12_data_kinhte preview:\n', kinhte.substring(0, 1500));
