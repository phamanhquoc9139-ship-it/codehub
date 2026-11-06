const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tienganh_9.html', 'utf8');

console.log('Title & Head:', content.slice(0, 800));

const modals = content.match(/id="modal-[^"]+"/g);
console.log('Modals in tienganh_9:', modals);

const lastScript = content.slice(content.lastIndexOf('<script>'));
console.log('JS functions:');
console.log(lastScript.match(/function\s+[a-zA-Z0-9_]+/g));
