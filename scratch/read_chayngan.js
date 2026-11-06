const fs = require('fs');

const p = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/user_prompt_gdtc8.txt', 'utf8');

// In ra nội dung của Chủ đề 1 Chạy cự li ngắn
const idxChayNgan = p.indexOf('## Chủ đề 1. Chạy cự li ngắn (100 m)');
const idxNhayCao = p.indexOf('## Chủ đề 2. Nhảy cao kiểu bước qua');
console.log(p.substring(idxChayNgan, idxNhayCao));
