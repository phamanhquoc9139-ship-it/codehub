const fs = require('fs');
const s = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_su12_complete.js', 'utf8');
const idx = s.indexOf('function startArenaExam');
console.log(s.slice(idx, idx + 2500));
