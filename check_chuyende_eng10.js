const fs = require('fs');
const c = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/chuyende_tienganh_10.html', 'utf8');
const asideIdx = c.indexOf('<aside');
console.log('--- chuyende_tienganh_10.html aside ---');
console.log(c.substring(asideIdx - 100, asideIdx + 700));
const drawerIdx = c.indexOf('mobileDrawer');
console.log('\n--- chuyende_tienganh_10.html mobileDrawer ---');
console.log(c.substring(drawerIdx - 50, drawerIdx + 500));
