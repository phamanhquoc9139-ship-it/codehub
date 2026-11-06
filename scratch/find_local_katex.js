const fs = require('fs');
const path = require('path');

function findFiles(dir, name) {
  let res = [];
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      if (item === '.git') continue;
      const full = path.join(dir, item);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        res = res.concat(findFiles(full, name));
      } else if (item.toLowerCase().includes(name.toLowerCase())) {
        res.push(full);
      }
    }
  } catch(e) {}
  return res;
}

console.log('Local katex files:', findFiles('.', 'katex'));
