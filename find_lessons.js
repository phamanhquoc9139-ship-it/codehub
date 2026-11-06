const fs = require('fs');
const text = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_all_text.txt', 'utf8');
const lines = text.split('\n\n');

lines.forEach((l, i) => {
  if (l.startsWith('Phần') || l.startsWith('Chương') || l.startsWith('Bài') || l.startsWith('Bảng') || l.startsWith('Khung')) {
    console.log(`Line ${i}: ${l.substring(0, 80)}`);
  }
});
