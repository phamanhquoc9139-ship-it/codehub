const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript_full.jsonl')
});

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    if (obj.step_index >= 30480 && obj.step_index <= 30495) {
      console.log('STEP', obj.step_index, obj.type, obj.source, 'Content:', (obj.content || '').substring(0, 300));
    }
  } catch(e) {}
});
