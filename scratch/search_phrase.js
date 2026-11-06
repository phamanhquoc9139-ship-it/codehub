const fs = require('fs');
const path = require('path');

function searchPhrase(phrase) {
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
  for (const f of allFiles) {
    try {
      const content = fs.readFileSync(f, 'utf8');
      if (content.includes(phrase)) {
        console.log(`Found "${phrase}" in: ${f}`);
      }
    } catch(e) {}
  }
}

searchPhrase('Con số "45"');
searchPhrase('Đơn vị đo lượng thông tin');
