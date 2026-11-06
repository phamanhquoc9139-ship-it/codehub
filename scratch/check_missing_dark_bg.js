const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

// Find all elements with bg-white but no dark:bg-
const regex = /class="([^"]*bg-white[^"]*)"/g;
let m;
const withoutDark = [];
while ((m = regex.exec(content)) !== null) {
  const cls = m[1];
  if (!cls.includes('dark:bg-')) {
    withoutDark.push(cls);
  }
}
console.log('bg-white without dark:bg- count:', withoutDark.length);
if (withoutDark.length > 0) {
  console.log('Samples:', withoutDark.slice(0, 10));
}
