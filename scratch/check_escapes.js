const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const countSlashParen = (html.match(/\\\(/g) || []).length;
const countSlashBracket = (html.match(/\\\[/g) || []).length;
const countTabRiangle = (html.match(/\triangle/g) || []).length;
const countCRightArrow = (html.match(/\rightarrow/g) || []).length;

console.log("Count of \\(:", countSlashParen);
console.log("Count of \\[:", countSlashBracket);
console.log("Count of \\t riangle:", countTabRiangle);
console.log("Count of \\r ightarrow:", countCRightArrow);
