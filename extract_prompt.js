const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript_full.jsonl');
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  if (line.includes('"step_index":22762') || line.includes('"step_index": 22762')) {
    try {
      const parsed = JSON.parse(line);
      fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/user_prompt_lsdl9.txt', parsed.content, 'utf8');
      console.log('Successfully saved user prompt! Length:', parsed.content.length);
      process.exit(0);
    } catch (e) {
      console.error(e);
    }
  }
});
