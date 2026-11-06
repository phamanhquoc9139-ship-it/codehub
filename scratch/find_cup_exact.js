const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      if (item === 'node_modules' || item === '.git' || item === '.system_generated') continue;
      const full = path.join(dir, item);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        files = files.concat(walk(full));
      } else {
        files.push(full);
      }
    }
  } catch(e) {}
  return files;
}

const allFiles = walk('.');
const needle = 'A \\cup B =';

for (const file of allFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes(needle) || content.includes('A \\cup B')) {
      console.log(`Found needle in: ${file}`);
    }
  } catch(e) {}
}
