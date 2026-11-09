const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript.jsonl', 'utf8');
const lines = content.trim().split('\n');
for (let i = lines.length - 1; i >= 0; i--) {
  try {
    const obj = JSON.parse(lines[i]);
    if (obj.type === 'USER_INPUT') {
      console.log('Last USER_INPUT step:', obj.step_index, 'created_at:', obj.created_at);
      console.log('Content:', obj.content);
      if (obj.media) console.log('Media:', JSON.stringify(obj.media));
      break;
    }
  } catch(e) {}
}
