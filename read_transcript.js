const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript.jsonl', 'utf8');
const lines = transcript.trim().split('\n');
const lastLines = lines.slice(-10);
for (const line of lastLines) {
  try {
    const obj = JSON.parse(line);
    console.log(obj.step_index, obj.source, obj.type, typeof obj.content === 'string' ? obj.content.substring(0, 100) : obj.content);
  } catch (e) {
    console.error(e);
  }
}
