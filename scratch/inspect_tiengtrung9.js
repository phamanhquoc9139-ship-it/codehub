const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengtrung_9.html', 'utf8');

console.log('Modals in tiengtrung_9:');
const modals = content.match(/id="modal-[^"]+"/g);
console.log(modals);

console.log('\nTop buttons & Header elements:');
const navButtons = content.match(/<button[^>]*onclick="[^"]*"[^>]*>[\s\S]*?<\/button>/gi) || [];
navButtons.slice(0, 10).forEach(b => console.log(b.replace(/\s+/g, ' ').slice(0, 120)));

const lastScript = content.slice(content.lastIndexOf('<script>'));
console.log('\nJS functions:');
console.log(lastScript.match(/function\s+[a-zA-Z0-9_]+/g));
