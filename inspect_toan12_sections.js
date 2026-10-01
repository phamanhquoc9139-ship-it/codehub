const fs = require('fs');
const content = fs.readFileSync('courses/toan_12.html', 'utf8');

const regex = /<article id="(bai-\d+)"[\s\S]*?<\/article>/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const art = match[0];
  const titleMatch = art.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  const title = titleMatch ? titleMatch[1].trim().replace(/\s+/g, ' ') : '';
  const sections = (art.match(/<h4/g) || []).length;
  const quizCount = (art.match(/checkQuiz/g) || []).length;
  console.log(`${match[1]}: length=${art.length} chars, h4_sections=${sections}, quizzes=${quizCount}, title="${title}"`);
}
