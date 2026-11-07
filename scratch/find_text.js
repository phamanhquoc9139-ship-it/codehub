const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory() && ent.name !== 'node_modules' && ent.name !== '.git') {
      searchDir(full);
    } else if (ent.isFile() && (ent.name.endsWith('.html') || ent.name.endsWith('.js') || ent.name.endsWith('.md'))) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('Kiến thức trọng tâm phần 1')) {
        console.log('Found in:', full);
      }
    }
  }
}

searchDir('.');
