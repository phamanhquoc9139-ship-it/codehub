const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

// Find all elements with light bg (50 or 100) and check if they have dark:
const regex = /class="([^"]*bg-(emerald|teal|amber|blue|slate|rose|purple|red)-(50|100)[^"]*)"/g;
let m;
const missingDark = [];
while ((m = regex.exec(content)) !== null) {
  const cls = m[1];
  if (!cls.includes('dark:bg-')) {
    missingDark.push(cls);
  }
}
console.log('Light bg (50/100) without dark:bg- count:', missingDark.length);
if (missingDark.length > 0) {
  console.log('Sample missing:', missingDark.slice(0, 10));
}
