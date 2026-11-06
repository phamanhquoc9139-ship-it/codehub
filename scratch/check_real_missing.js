const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const regex = /\bbg-(emerald|teal|amber|blue|slate|rose|purple|red)-(50|100)\b/g;
let m;
let count = 0;
while ((m = regex.exec(content)) !== null) {
  // check surrounding class
  const idx = m.index;
  const start = content.lastIndexOf('class="', idx);
  const end = content.indexOf('"', idx);
  const fullCls = content.slice(start + 7, end);
  if (!fullCls.includes('dark:bg-')) {
    count++;
    console.log('Missing dark:bg- on:', fullCls);
  }
}
console.log('Total actual missing:', count);
