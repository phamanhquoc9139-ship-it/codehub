const fs = require('fs');
const path = require('path');

function searchFiles(dir, terms) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        searchFiles(fullPath, terms);
      }
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.json'))) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        for (const term of terms) {
          if (content.includes(term)) {
            console.log(`Found "${term}" in ${fullPath}`);
          }
        }
      } catch (e) {}
    }
  }
}

searchFiles('.', [
  'Động lượng',
  'CÁC PHÉP TOÁN TRÊN TẬP HỢP',
  'chia hết cho 3',
  'trên nhiệt kế',
  '\\cup',
  '2^10'
]);
