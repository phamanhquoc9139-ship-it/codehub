const fs = require('fs');

const content = fs.readFileSync('courses/grade_12.html', 'utf8');

for (let num = 1; num <= 28; num++) {
  const startMarker = `id="bai-${num}"`;
  const startIdx = content.indexOf(startMarker);
  const quizMarker = `id="quiz-bai-${num}"`;
  const quizStart = content.indexOf(quizMarker, startIdx);
  const quizTagStart = content.lastIndexOf('<div', quizStart);

  let nextLessonTagStart;
  if (num < 28) {
    const nextMarker = `id="bai-${num + 1}"`;
    nextLessonTagStart = content.lastIndexOf('<', content.indexOf(nextMarker));
  } else {
    nextLessonTagStart = content.lastIndexOf('<div', content.indexOf('id="courseQuizModal"'));
  }

  // Extract quiz section
  const quizRaw = content.slice(quizTagStart, nextLessonTagStart);
  const qMatches = [...quizRaw.matchAll(/<div class="quiz-item[\s\S]*?(?=(?:<div class="quiz-item|<\/div>\s*<\/div>\s*<\/div>|<\/article>|$))/g)];

  const cleanedItems = qMatches.map(m => {
    let html = m[0].trim();
    let opens = (html.match(/<div\b/g) || []).length;
    let closes = (html.match(/<\/div>/g) || []).length;
    while (closes < opens) {
      html += '\n</div>';
      closes++;
    }
    return html;
  });

  const allBalanced = cleanedItems.every(item => {
    const o = (item.match(/<div\b/g) || []).length;
    const c = (item.match(/<\/div>/g) || []).length;
    return o === c;
  });

  if (!allBalanced) {
    console.log(`Bài ${num} has UNBALANCED items!`);
  }
}
console.log('All 28 lessons quiz items test completed!');
