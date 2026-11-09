const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';

const ktpl12Build = fs.readFileSync(path.join(baseDir, 'scratch/build_ktpl12.js'), 'utf8');
console.log('ktpl12Build length:', ktpl12Build.length);
console.log('First 1200 chars:\n', ktpl12Build.substring(0, 1200));

const ktpl12Master = fs.readFileSync(path.join(baseDir, 'scratch/ktpl12_data_master.js'), 'utf8');
console.log('\nktpl12Master:\n', ktpl12Master);
