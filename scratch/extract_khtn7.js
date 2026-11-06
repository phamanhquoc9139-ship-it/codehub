const fs = require('fs');
const readline = require('readline');

async function extractPrompt() {
  const fileStream = fs.createReadStream('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lastPrompt = '';
  for await (const line of rl) {
    if (line.includes('tao mon khoa hoc tu nhien 7')) {
      const obj = JSON.parse(line);
      lastPrompt = obj.content || '';
    }
  }

  if (lastPrompt) {
    fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/user_prompt_khtn7.txt', lastPrompt, 'utf8');
    console.log('Saved prompt khtn7! Length:', lastPrompt.length);
  } else {
    console.log('Not found in transcript_full');
  }
}
extractPrompt();
