const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript.jsonl');

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let lineNum = 0;
rl.on('line', (line) => {
  lineNum++;
  if (line.includes('HỌC LIỆU TIẾNG TRUNG QUỐC 10')) {
    console.log(`Found "HỌC LIỆU TIẾNG TRUNG QUỐC 10" at line ${lineNum}`);
    const obj = JSON.parse(line);
    console.log('Content preview:', obj.content ? obj.content.substring(0, 500) : 'no content');
  }
});
