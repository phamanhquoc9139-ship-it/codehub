const fs = require('fs');

const raw = fs.readFileSync('scratch/user_ktpl10_prompt.txt', 'utf8');

// The prompt starts after `<USER_REQUEST>` and has markdown content
const content = raw.replace('<USER_REQUEST>', '').trim();

// Split into main sections:
// 1. Overview / Metadata
// 2. Body (Phần 1, Phần 2)
// 3. Bảng phân biệt và kỹ năng vận dụng

console.log('Total prompt length:', content.length);

// Let's inspect where lessons start
const lessonRegex = /### Bài (\d+)\.\s*([^\n]+)/g;
let match;
const lessons = [];
while ((match = lessonRegex.exec(content)) !== null) {
  lessons.push({
    num: parseInt(match[1]),
    title: match[2].trim(),
    index: match.index
  });
}
console.log('Found lessons count:', lessons.length);
lessons.forEach(l => console.log(`Bài ${l.num}: ${l.title}`));

// Let's inspect topics
const topicRegex = /## Chủ đề (\d+)\.\s*([^\n]+)/g;
const topics = [];
while ((match = topicRegex.exec(content)) !== null) {
  topics.push({
    num: parseInt(match[1]),
    title: match[2].trim(),
    index: match.index
  });
}
console.log('Found topics count:', topics.length);
topics.forEach(t => console.log(`Chủ đề ${t.num}: ${t.title}`));
