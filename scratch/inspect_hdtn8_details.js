const { topicsData, lessonsData } = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/hdtn8_data.js');
console.log('topicsData count:', topicsData.length);
topicsData.forEach(t => console.log(`Topic ${t.id}: ${t.title} (${t.lessons.length} lessons)`));
console.log('lessonsData count:', Object.keys(lessonsData).length);
console.log('Sample lesson 1:', Object.keys(lessonsData['1']));
console.log('Lesson 1 title:', lessonsData['1'].title);
console.log('Has SVG in lesson 1:', !!lessonsData['1'].svg);

const exam = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/hdtn8_exam.js');
console.log('Exam questions length:', exam.length);
console.log('Sample exam question 1:', exam[0].q);
