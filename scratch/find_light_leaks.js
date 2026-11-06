const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

// Regex for class attributes
const classAttrRegex = /class="([^"]+)"/g;
let m;
const issues = [];
while ((m = classAttrRegex.exec(content)) !== null) {
  const classStr = m[1];
  const classes = classStr.split(/\s+/);
  
  // Check if has a light bg
  const hasLightBg = classes.some(c => /^bg-(white|slate|gray|emerald|teal|amber|blue|green|indigo|purple|rose|red)-(50|100|200)$/.test(c) || c === 'bg-white');
  const hasDarkBg = classes.some(c => /^dark:bg-/.test(c) || /^bg-white\/[0-9]+/.test(c) || /^bg-gradient-/.test(c));
  
  if (hasLightBg && !hasDarkBg) {
    issues.push(classStr);
  }
}

console.log('Total elements with light bg but no dark:bg-:', issues.length);
issues.forEach((iss, i) => {
  if (i < 20) console.log((i+1) + ': ' + iss);
});
