const fs = require('fs');

const vatly = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html', 'utf8');

console.log('Sidebar search in vatly:');
const navMatch = vatly.match(/<nav[\s\S]*?<\/nav>/i);
if (navMatch) {
  console.log('Nav excerpt:', navMatch[0].slice(0, 1000));
}

// Check if there is JS rendering sidebar or if it is hardcoded HTML
const scripts = vatly.match(/<script[\s\S]*?<\/script>/gi) || [];
scripts.forEach((s, idx) => {
  if (s.includes('renderSidebar') || s.includes('nav') || s.includes('lessons') || s.includes('title')) {
    console.log(`Script ${idx} has sidebar/nav code:`, s.slice(0, 300));
  }
});
