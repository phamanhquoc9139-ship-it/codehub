const fs = require('fs');

const veoContent = fs.readFileSync('courses/veo3.html', 'utf8');
const agyContent = fs.readFileSync('courses/antigravity.html', 'utf8');

console.log('Veo3 has $360:', veoContent.includes('$360'));
console.log('Veo3 has \\circ:', veoContent.includes('\\circ'));
console.log('Antigravity has $360:', agyContent.includes('$360'));
console.log('Antigravity has \\circ:', agyContent.includes('\\circ'));
