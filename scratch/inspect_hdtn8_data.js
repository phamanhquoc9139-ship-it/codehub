const d = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/hdtn8_data.js');
console.log('Topics count:', d.topics ? d.topics.length : 'no topics');
if (d.topics) {
  let totalLessons = 0;
  d.topics.forEach((t, i) => {
    console.log(`Topic ${i+1}: ${t.title} (${t.lessons.length} lessons)`);
    totalLessons += t.lessons.length;
  });
  console.log('Total lessons:', totalLessons);
}
const e = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/hdtn8_exam.js');
console.log('Exam questions count:', e.examQuestions ? e.examQuestions.length : 'no questions');
