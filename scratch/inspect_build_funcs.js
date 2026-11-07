const fs = require('fs');
const s = fs.readFileSync('scratch/build_hoahoc10.js', 'utf8');

const funcs = s.match(/function\s+([a-zA-Z0-9_]+)/g) || [];
console.log('Functions:', funcs);

// Find where lesson article is generated
const articleIdx = s.indexOf('<article id="bai-');
console.log('Article template at:', articleIdx);
console.log(s.slice(articleIdx - 100, articleIdx + 1200));
