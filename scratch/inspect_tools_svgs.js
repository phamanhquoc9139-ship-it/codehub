const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';

const tools = fs.readFileSync(path.join(baseDir, 'scratch/ktpl12_tools_arena.js'), 'utf8');
console.log('ktpl12_tools_arena preview:\n', tools.substring(0, 1000));

const svgs = fs.readFileSync(path.join(baseDir, 'scratch/ktpl12_svgs.js'), 'utf8');
console.log('ktpl12_svgs keys:\n', Object.keys(require(path.join(baseDir, 'scratch/ktpl12_svgs.js'))));
