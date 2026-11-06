const fs = require('fs');
const readline = require('readline');

async function getPrompt() {
  const fileStream = fs.createReadStream('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let foundContent = null;
  for await (const line of rl) {
    if (line.includes('Giáo dục quốc phòng và an ninh 10 — Kiến thức đầy đủ theo sách') && line.includes('"type":"USER_INPUT"')) {
      const obj = JSON.parse(line);
      foundContent = obj.content;
    }
  }
  if (foundContent) {
    fs.writeFileSync('scratch/user_gdqp10_prompt.txt', foundContent, 'utf8');
    console.log('Saved prompt to scratch/user_gdqp10_prompt.txt, length:', foundContent.length);
  } else {
    console.error('Prompt not found in transcript!');
  }
}
getPrompt();
