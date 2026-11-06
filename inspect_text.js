const fs = require('fs');
const text = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_all_text.txt', 'utf8');

const lines = text.split('\n\n');
console.log('Total paragraphs:', lines.length);

const headers = lines.filter(line => {
  return /^(Phần|Chương|Bài|Mục|Bảng|Khung|1\.|2\.|3\.|4\.|5\.|I\.|II\.|III\.)/i.test(line) || line.length < 60;
});

console.log('Sample structural lines:');
headers.slice(0, 50).forEach(h => console.log(' - ', h));
