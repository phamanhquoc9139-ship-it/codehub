const fs = require('fs');
const readline = require('readline');

async function checkStep19844More() {
  const fileStream = fs.createReadStream('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (line.includes('"step_index":19844')) {
      const obj = JSON.parse(line);
      console.log('CONTENT OF STEP 19844 (part 2):');
      console.log(obj.content.substring(1500, 3500));
    }
  }
}
checkStep19844More();
