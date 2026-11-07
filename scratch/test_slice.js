const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/user_request_van12.md', 'utf8');

const unitTitles = [
  'Bài 1. Khả năng lớn lao của tiểu thuyết',
  'Bài 2. Những thế giới thơ',
  'Bài 3. Lập luận trong văn bản nghị luận',
  'Bài 4. Yếu tố kì ảo trong truyện kể',
  'Bài 5. Tiếng cười của hài kịch',
  'Bài 6. Hồ Chí Minh',
  'Bài 7. Sự thật trong tác phẩm kí',
  'Bài 8. Dữ liệu trong văn bản thông tin',
  'Bài 9. Văn học và cuộc đời'
];

for (let i = 0; i < unitTitles.length; i++) {
  const currentTitle = unitTitles[i];
  const startIdx = content.indexOf('## ' + currentTitle);
  const endIdx = (i + 1 < unitTitles.length) 
    ? content.indexOf('## ' + unitTitles[i+1]) 
    : content.indexOf('# Khung kĩ năng');
  const rawUnit = content.slice(startIdx, endIdx).trim();
  console.log('Unit ' + (i+1) + ': ' + currentTitle + ' -> chars: ' + rawUnit.length);
}
