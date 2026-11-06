const fs = require('fs');
const readline = require('readline');

async function findLastUser() {
  const fileStream = fs.createReadStream('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lastUser = null;
  for await (const line of rl) {
    try {
      const obj = JSON.parse(line);
      if (obj.source === 'USER_EXPLICIT' || obj.type === 'USER_INPUT') {
        lastUser = obj;
      }
    } catch(e) {}
  }

  console.log("=== LAST USER MESSAGE ===");
  console.log(JSON.stringify(lastUser, null, 2));
}

findLastUser();
