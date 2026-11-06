const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

// Check style tags
const styles = content.match(/<style[\s\S]*?<\/style>/gi);
console.log('Styles:', styles);

// Check if any element has class "bg-white" and see its exact class list
const classRegex = /class="([^"]*bg-white[^"]*)"/g;
let m;
let count = 0;
while ((m = classRegex.exec(content)) !== null) {
  count++;
  if (count <= 15) console.log(count, m[1]);
}
console.log('Total bg-white elements:', count);
