const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript.jsonl', 'utf8');
const lines = content.trim().split('\n');
console.log('Total lines in transcript:', lines.length);
for (let i = Math.max(0, lines.length - 10); i < lines.length; i++) {
  try {
    const obj = JSON.parse(lines[i]);
    console.log(i, 'step:', obj.step_index, 'type:', obj.type, 'source:', obj.source, 'content:', (obj.content || '').substring(0, 150));
  } catch(e) {}
}
