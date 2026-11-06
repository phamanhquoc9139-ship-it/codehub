const fs = require('fs');

const path = 'courses/sinhhoc_10.html';
if (fs.existsSync(path)) {
  const stat = fs.statSync(path);
  console.log('Size:', (stat.size / 1024).toFixed(1) + ' KB');
  const content = fs.readFileSync(path, 'utf8');
  const title = content.match(/<title>[\s\S]*?<\/title>/);
  console.log('Title:', title ? title[0] : 'None');
  const aside = content.match(/<aside[\s\S]*?<\/aside>/);
  console.log('Aside:', aside ? aside[0].slice(0, 300) : 'None');
  const articles = content.match(/id="(bai-[^"]+)"/g) || [];
  console.log('Lesson IDs:', articles.length, articles.slice(0, 10));
  const scripts = content.match(/<script[\s\S]*?<\/script>/g) || [];
  console.log('Script count:', scripts.length);
} else {
  console.log('Not found');
}
