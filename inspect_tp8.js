const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengphap_8.html', 'utf8');

const u1 = content.match(/<section id="unite-1"[\s\S]*?(?=<section id="unite-2")/i);
if (u1) {
  // Find all cards or subheaders
  const matches = u1[0].match(/<div class="[^"]*rounded-[^"]*"[\s\S]*?<\/div>/g) || [];
  console.log('Total divs in U1:', matches.length);
  // Find titles and subtitles
  const lines = u1[0].split('\n').filter(l => l.includes('<h2') || l.includes('<h3') || l.includes('<h4') || l.includes('text-blue-') || l.includes('Mục tiêu') || l.includes('Từ vựng') || l.includes('Ngữ pháp') || l.includes('Phát âm') || l.includes('Giao tiếp') || l.includes('Văn hóa'));
  lines.slice(0, 30).forEach(l => console.log(l.replace(/<[^>]+>/g, '').trim()));
}
