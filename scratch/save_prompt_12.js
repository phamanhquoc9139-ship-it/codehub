const fs = require('fs');
const transcriptPath = 'C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').trim().split('\n');
for (let i = lines.length - 1; i >= 0; i--) {
  const obj = JSON.parse(lines[i]);
  if (obj.source === 'USER_EXPLICIT' && obj.content && obj.content.includes('sửa môn chuyên đề tin học ứng dụng lớp 12')) {
    fs.writeFileSync('scratch/user_prompt_ict12.txt', obj.content, 'utf8');
    console.log('Saved user prompt 12, length:', obj.content.length);
    break;
  }
}
