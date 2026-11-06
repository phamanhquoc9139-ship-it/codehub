const fs = require('fs');
const de = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html', 'utf8');

const m = de.match(/tailwind\.config\s*=\s*\{[\s\S]*?\};/);
if (m) console.log(m[0]);
