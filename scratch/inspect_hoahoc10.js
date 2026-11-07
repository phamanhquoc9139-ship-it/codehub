const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_10.html', 'utf8');

console.log('hoahoc_10.html size:', s.length, 'bytes');

// Check sections in hoahoc_10.html
const sectionIds = s.match(/id="[^"]+"/g) || [];
console.log('Section IDs sample:', sectionIds.slice(0, 30));

// Check headers (h1, h2, h3, h4)
const h2s = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/g) || [];
console.log('H2 tags count:', h2s.length);
h2s.forEach(h => console.log('H2:', h.replace(/<[^>]+>/g, '').trim()));
