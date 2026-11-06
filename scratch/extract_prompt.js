const fs = require('fs');
const readline = require('readline');

async function getPrompt() {
  const fileStream = fs.createReadStream('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let lineNum = 0;
  for await (const line of rl) {
    lineNum++;
    if (lineNum === 24402 || (line.includes('GIÁO DỤC KINH TẾ VÀ PHÁP LUẬT 10') && line.includes('"type":"USER_INPUT"'))) {
      const obj = JSON.parse(line);
      console.log('Line:', lineNum, 'Type:', obj.type);
      fs.writeFileSync('scratch/user_ktpl10_prompt.txt', obj.content, 'utf8');
      console.log('Saved prompt to scratch/user_ktpl10_prompt.txt, length:', obj.content.length);
      break;
    }
  }
}
getPrompt();
