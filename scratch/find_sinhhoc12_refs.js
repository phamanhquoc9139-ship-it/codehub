const fs = require('fs');
const path = require('path');

function searchFiles(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') searchFiles(full);
    } else if (f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.json')) {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('sinhhoc_12') || c.includes('sinhhoc12')) {
        console.log('Referenced in:', full);
      }
    }
  }
}

searchFiles('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform');
