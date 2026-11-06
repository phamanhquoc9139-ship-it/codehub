const fs = require('fs');
const readline = require('readline');

async function checkStep19844() {
  const fileStream = fs.createReadStream('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (line.includes('"step_index":19844')) {
      const obj = JSON.parse(line);
      console.log('CONTENT OF STEP 19844:');
      console.log(obj.content.substring(0, 1500));
    }
  }
}
checkStep19844();
