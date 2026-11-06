const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_6.html', 'utf8');

// Extract all <script> tags
const scripts = content.match(/<script[\s\S]*?<\/script>/g);
console.log('Total scripts:', scripts.length);
scripts.forEach((s, idx) => {
    console.log(`Script ${idx}: length = ${s.length}, starts with: ${s.slice(0, 100).replace(/\n/g, ' ')}`);
});
