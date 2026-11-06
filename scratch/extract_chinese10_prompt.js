const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript_full.jsonl');

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let lineNum = 0;
rl.on('line', (line) => {
  lineNum++;
  if (lineNum === 26137) {
    const obj = JSON.parse(line);
    fs.writeFileSync('scratch/user_chinese10_prompt.txt', obj.content, 'utf8');
    console.log('Saved user_chinese10_prompt.txt! Length:', obj.content.length);
  }
});
