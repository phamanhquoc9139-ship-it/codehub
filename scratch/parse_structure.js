const fs = require('fs');

const p = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/user_prompt_gdtc8.txt', 'utf8');

// In ra các bài học của tất cả các chủ đề
const lines = p.split('\n');
const structure = [];
let currentPart = '';
let currentTopic = '';
let currentLesson = '';

lines.forEach(line => {
  if (line.startsWith('# PHẦN')) {
    currentPart = line.replace('# ', '').trim();
    structure.push({ type: 'part', name: currentPart });
  } else if (line.startsWith('## Chủ đề')) {
    currentTopic = line.replace('## ', '').trim();
    structure.push({ type: 'topic', name: currentTopic, part: currentPart });
  } else if (line.startsWith('### Bài ') || line.startsWith('### 1.') || line.startsWith('### 2.') || line.startsWith('### 3.') || line.startsWith('### 4.')) {
    currentLesson = line.replace('### ', '').trim();
    structure.push({ type: 'lesson', name: currentLesson, topic: currentTopic, part: currentPart });
  }
});

console.log('Detected lessons in user prompt:');
structure.forEach(s => {
  if (s.type === 'part') console.log(`\n=== ${s.name} ===`);
  if (s.type === 'topic') console.log(`  >> ${s.name}`);
  if (s.type === 'lesson') console.log(`     * ${s.name}`);
});
