const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tinhoc_10.html', 'utf8');

// Check navigation / sidebar
const sidebarIdx = content.indexOf('<aside');
console.log('Sidebar snippet:');
console.log(content.slice(sidebarIdx, sidebarIdx + 1200));

// Check Bai 1 snippet
const b1Idx = content.indexOf('id="bai-1"');
console.log('\nBai 1 snippet:');
console.log(content.slice(b1Idx, b1Idx + 1200));
