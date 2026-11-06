const fs = require('fs');
const readline = require('readline');

async function extractFullLine() {
  const fileStream = fs.createReadStream('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lineIndex = 0;
  for await (const line of rl) {
    if (lineIndex === 22937) {
      const obj = JSON.parse(line);
      fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/mithuat9_user_request_full.txt', obj.content, 'utf8');
      console.log('Saved full user request text, length:', obj.content.length);
      break;
    }
    lineIndex++;
  }
}

extractFullLine();
