const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

// Find all occurrences of bg-white in the first 50000 characters
const matches = [];
const regex = /class=\"[^\"]*bg-white[^\"]*\"/g;
let m;
while ((m = regex.exec(cn)) !== null && matches.length < 30) {
  matches.push({ index: m.index, match: m[0] });
}
console.log('Found bg-white occurrences:', matches.length);
matches.forEach(item => {
  console.log(`@${item.index}: ${item.match}`);
});
