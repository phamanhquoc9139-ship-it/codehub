const { topicsData, lessonsData } = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/hdtn8_data.js');
console.log('Sample topic:', topicsData[0]);
console.log('keys in lessonsData:', Object.keys(lessonsData));
console.log('lesson 1:', Object.keys(lessonsData[1] || lessonsData['1'] || {}));
