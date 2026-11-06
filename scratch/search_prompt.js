const fs = require('fs');
const raw = fs.readFileSync('scratch/user_gdqp10_prompt.txt', 'utf8');

for (let i = 1; i <= 12; i++) {
  const bStart = raw.indexOf(`## Bài ${i}.`);
  const bNext = i < 12 ? raw.indexOf(`## Bài ${i+1}.`) : raw.indexOf('## Bảng ôn tập nhanh');
  const bText = raw.slice(bStart, bNext);
  
  const hasMucTieu = bText.includes('### Mục tiêu') || bText.includes('Mục tiêu');
  const hasGhiNho = bText.includes('Ghi nhớ') || bText.includes('cần nhớ');
  const hasHinh = bText.includes('Hình') || bText.includes('sơ đồ');
  const hasLuyenTap = bText.includes('luyện tập') || bText.includes('Luyện tập');
  
  console.log(`Bài ${i}: length=${bText.length}, Mục tiêu=${hasMucTieu}, Ghi nhớ=${hasGhiNho}, Hình/sơ đồ=${hasHinh}, Luyện tập=${hasLuyenTap}`);
}
