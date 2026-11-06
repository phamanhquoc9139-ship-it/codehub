const fs = require('fs');
const lines = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.system_generated/logs/transcript.jsonl', 'utf8').trim().split('\n');
const userStep = JSON.parse(lines[22937]);
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/mithuat9_user_request.txt', userStep.content, 'utf8');
console.log('Saved user request text, length:', userStep.content.length);
