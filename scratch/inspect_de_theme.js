const fs = require('fs');
const de = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html', 'utf8');

const m = de.match(/theme|dark/gi);
const scriptMatches = de.match(/<script[\s\S]*?<\/script>/g);
console.log('Script count in tiengduc_6.html:', scriptMatches.length);
for (const s of scriptMatches) {
  if (s.includes('toggleDarkMode') || s.includes('theme')) {
    console.log('=== FOUND THEME SCRIPT ===');
    console.log(s.slice(0, 500));
  }
}
