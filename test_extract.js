const fs = require('fs');

const content = fs.readFileSync('courses/grade_12.html', 'utf8');

function extractLesson(num) {
  const startMarker = `id="bai-${num}"`;
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) return null;

  const tagStart = content.lastIndexOf('<', startIdx);
  
  // Find where quiz starts
  const quizMarker = `id="quiz-bai-${num}"`;
  const quizStart = content.indexOf(quizMarker, startIdx);
  if (quizStart === -1) {
    console.error(`Quiz marker not found for Bài ${num}`);
    return null;
  }
  const quizTagStart = content.lastIndexOf('<div', quizStart);

  // Find where this lesson ends (next lesson or modal)
  let nextLessonTagStart;
  if (num < 28) {
    const nextMarker = `id="bai-${num + 1}"`;
    const nextIdx = content.indexOf(nextMarker);
    nextLessonTagStart = content.lastIndexOf('<', nextIdx);
  } else {
    const modalMarker = 'id="courseQuizModal"';
    nextLessonTagStart = content.lastIndexOf('<div', content.indexOf(modalMarker));
  }

  // Quiz content is between quizTagStart and the closing of the lesson div
  const quizRaw = content.slice(quizTagStart, nextLessonTagStart);
  // Find the quiz inner part
  // Extract questions inside quiz
  const quizItems = [];
  const qRegex = /<div class="quiz-item[\s\S]*?(?=(?:<div class="quiz-item|<\/div>\s*<\/div>\s*(?:<\/div>|$)))/g;
  let qm;
  while ((qm = qRegex.exec(quizRaw)) !== null) {
    quizItems.push(qm[0]);
  }

  // Extract raw body before quiz
  // Find where header h3 ends
  const h3End = content.indexOf('</h3>', startIdx) + 5;
  // If there is an <a> tag after h3, skip it
  let bodyStart = h3End;
  const aMatch = content.slice(h3End, h3End + 300).match(/<a[\s\S]*?<\/a>\s*<\/div>/);
  if (aMatch) {
    bodyStart = h3End + aMatch.index + aMatch[0].length;
  }

  const rawTheoryAndSections = content.slice(bodyStart, quizTagStart).trim();

  return {
    num,
    theoryAndSectionsLength: rawTheoryAndSections.length,
    quizQuestionsCount: quizItems.length
  };
}

for (let i = 1; i <= 28; i++) {
  const info = extractLesson(i);
  console.log(`Bài ${i}: theoryLen = ${info.theoryAndSectionsLength}, quizCount = ${info.quizQuestionsCount}`);
}
