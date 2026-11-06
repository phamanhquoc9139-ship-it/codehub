const fs = require('fs');
const path = require('path');

const uploadDir = 'C:/Users/ADMIN/.gemini/antigravity/brain/9168c62b-8394-4661-a83f-694947522547/.user_uploaded';
if (fs.existsSync(uploadDir)) {
  const files = fs.readdirSync(uploadDir).map(f => {
    const stat = fs.statSync(path.join(uploadDir, f));
    return { name: f, time: stat.mtime, size: stat.size };
  });
  files.sort((a,b) => b.time - a.time);
  console.log('User uploads:', files);
}
