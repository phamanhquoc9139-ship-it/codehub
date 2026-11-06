const fs = require('fs');

const f1 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html');
const f2 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/german_6.html');

console.log('Are tiengduc_6.html and german_6.html identical?:', f1.equals(f2));
if (!f1.equals(f2)) {
  fs.copyFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html', 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/german_6.html');
  console.log('Synchronized tiengduc_6.html -> german_6.html');
}
