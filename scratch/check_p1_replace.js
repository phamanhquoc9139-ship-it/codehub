const fs = require('fs');
const p1Code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p1.js', 'utf8');

console.log("Includes Hình 1.1?", p1Code.includes('Hình 1.1'));
console.log("Includes Hình 2.1?", p1Code.includes('Hình 2.1'));
console.log("Includes Hình 3.1?", p1Code.includes('Hình 3.1'));
console.log("Includes Hình 6.1?", p1Code.includes('Hình 6.1'));
