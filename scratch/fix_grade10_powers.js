const fs = require('fs');

const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/grade_10.html';
let content = fs.readFileSync(path, 'utf8');

// Replace raw powers in grade_10.html
content = content.replace(/2\^10/g, '2<sup>10</sup>');
content = content.replace(/2\^20/g, '2<sup>20</sup>');
content = content.replace(/2\^30/g, '2<sup>30</sup>');
content = content.replace(/1\*2\^3 \+ 0\*2\^2 \+ 1\*2\^1 \+ 1\*2\^0/g, '1×2<sup>3</sup> + 0×2<sup>2</sup> + 1×2<sup>1</sup> + 1×2<sup>0</sup>');

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated grade_10.html with 2^10 -> 2<sup>10</sup>');
