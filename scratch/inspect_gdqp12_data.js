const fs = require('fs');
const data = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/gdqp12_data.js');
console.log('Total lessons in gdqp12_data.js:', data.length);
data.forEach(d => {
  console.log(`Bài ${d.id}: ${d.title} (${d.sections ? d.sections.length : 0} sections, ${d.quiz ? d.quiz.length : 0} quiz items)`);
});
