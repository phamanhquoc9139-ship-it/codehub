const fs = require('fs');

function searchAll(dir, text) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = dir + '/' + item;
    try {
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        searchAll(full, text);
      } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.html') || item.endsWith('.json'))) {
        const c = fs.readFileSync(full, 'utf8');
        if (c.includes(text)) {
          console.log('MATCH:', full);
        }
      }
    } catch(e){}
  }
}

searchAll('C:/Users/ADMIN/.gemini/antigravity/scratch', '1. Tóm tắt lý thuyết bài học');
searchAll('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform', '1. Tóm tắt lý thuyết bài học');
