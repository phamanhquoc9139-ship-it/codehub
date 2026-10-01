const fs = require('fs');

const content = fs.readFileSync('courses/grade_12.html', 'utf8');

// Check the boundary of each lesson
const lessonPositions = [];
for (let i = 1; i <= 28; i++) {
  const marker = `id="bai-${i}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) {
    console.error(`Marker not found for Bài ${i}`);
    continue;
  }
  // Find start of the tag <div or <article
  const tagStart = content.lastIndexOf('<', idx);
  lessonPositions.push({ num: i, start: tagStart });
}

// Find modal start
const modalIdx = content.indexOf('id="courseQuizModal"');
const endPos = content.lastIndexOf('<div', modalIdx);

for (let i = 0; i < lessonPositions.length; i++) {
  const current = lessonPositions[i];
  const nextStart = i < lessonPositions.length - 1 ? lessonPositions[i+1].start : endPos;
  // Let's find </article> or </div> before nextStart
  const rawSnippet = content.slice(current.start, nextStart);
  
  // Extract Title
  const titleMatch = rawSnippet.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  const rawTitle = titleMatch ? titleMatch[1].replace(/<span[^>]*>[\s\S]*?<\/span>/, '').replace(/<[^>]+>/g, '').trim() : '';

  // Extract Quiz section
  const quizMarker = `id="quiz-bai-${current.num}"`;
  const quizIdx = rawSnippet.indexOf(quizMarker);

  console.log(`Bài ${current.num}: Title = "${rawTitle}", QuizIdx = ${quizIdx !== -1 ? 'OK' : 'MISSING'}`);
}
