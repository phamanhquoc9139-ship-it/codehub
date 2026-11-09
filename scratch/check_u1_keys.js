const { unites } = require('./tiengphap10_data.js');
console.log('Unit 1 keys:', Object.keys(unites[0]));
if (unites[0].lessons) console.log('Lesson 1 keys:', Object.keys(unites[0].lessons[0]));
