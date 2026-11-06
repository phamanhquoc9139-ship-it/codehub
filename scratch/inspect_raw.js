const fs = require('fs');
const p1Code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/congnghe8_data_p1.js', 'utf8');

const idx = p1Code.indexOf('1. Khái niệm và các khổ giấy chính');
console.log(JSON.stringify(p1Code.substring(idx - 50, idx + 60)));
