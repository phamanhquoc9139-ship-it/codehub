const fs = require('fs');
const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

// Find all href in sidebar
const hrefs = content.match(/href="#[^"]+"/g) || [];
console.log('Sidebar hrefs:', hrefs);

// Check if these IDs exist in content
hrefs.forEach(h => {
  const id = h.replace('href="#', '').replace('"', '');
  const idTarget = `id="${id}"`;
  const exists = content.includes(idTarget);
  console.log(`Link #${id} exists in content: ${exists}`);
});
