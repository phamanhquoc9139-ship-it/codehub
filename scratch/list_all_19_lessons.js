const { topicsData, lessonsData } = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/hdtn8_data.js');
console.log('Total lessons:', lessonsData.length);
lessonsData.forEach((l, idx) => {
  console.log(`[${idx + 1}] Topic ${l.topicId} | Lesson ID: ${l.id} | Title: ${l.title}`);
  console.log(`     SVG length: ${l.svg ? l.svg.length : 0} | Quiz: ${l.quiz ? l.quiz.q : 'NONE'}`);
});
