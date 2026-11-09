const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript_full.jsonl', 'utf8');
const lines = content.trim().split('\n');
for (let i = lines.length - 1; i >= 0; i--) {
  try {
    const obj = JSON.parse(lines[i]);
    if (obj.type === 'USER_INPUT') {
      fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/user_request_ly11.txt', obj.content, 'utf8');
      console.log('Saved user request ly11 to file. Length:', obj.content.length);
      break;
    }
  } catch(e) {}
}
