const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/user_request_hoa12.md', 'utf8');

const regex = /## (Bài \d+[^\n]+)/g;
let match;
const lessons = [];
while ((match = regex.exec(content)) !== null) {
  lessons.push({ title: match[1], index: match.index });
}

console.log('Total lessons matched:', lessons.length);
lessons.forEach((l, idx) => {
  const nextIdx = (idx + 1 < lessons.length) ? lessons[idx+1].index : content.indexOf('# Bảng phương trình');
  const slice = content.slice(l.index, nextIdx).trim();
  const subheadings = slice.match(/### [^\n]+/g) || [];
  console.log(`Lesson ${idx + 1}: ${l.title} (${subheadings.length} subheadings: ${subheadings.map(s => s.replace('### ', '')).join(' | ')})`);
});
