const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/mithuat_6.html', 'utf8');

console.log('HTML size:', html.length);
console.log('Contains "$0":', html.includes('$0'));
console.log('Contains "\\rightarrow":', html.includes('\\rightarrow'));

// Check scripts syntax
const scripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
console.log('Found inline scripts:', scripts.length);
scripts.forEach((s, idx) => {
  try {
    new vm.Script(s[1]);
    console.log(`Script #${idx + 1} valid!`);
  } catch (err) {
    console.error(`Script #${idx + 1} syntax error:`, err.message);
  }
});
