const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript.jsonl', 'utf8');
const lines = transcript.trim().split('\n');
const userLines = lines.map(l => JSON.parse(l)).filter(o => o.type === 'USER_INPUT');
for (const u of userLines.slice(-5)) {
  console.log('--- USER INPUT step', u.step_index, '---');
  console.log(u.content ? u.content.substring(0, 200) : '[no content]');
  console.log('media:', u.media);
}
