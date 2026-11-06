const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const idx15 = html.indexOf('id="lesson-15"');
const end15 = html.indexOf('id="lesson-16"');
const l15 = html.substring(idx15, end15);

console.log("Checking escape characters in Lesson 15:");
console.log("Has \\\\(90^\\\\circ\\\\):", l15.includes('\\(90^\\circ\\)'));
console.log("Has \\\\[c^2:", l15.includes('\\[c^2 = a^2 + b^2'));
console.log("Has \\\\triangle:", l15.includes('\\triangle ABH'));
console.log("Has tab in triangle:", l15.includes('\triangle'));
console.log("Has SVG 150 height:", l15.includes('viewBox="0 0 500 150"'));
console.log("Has SVG pill rect:", l15.includes('<rect x="35" y="118"'));
