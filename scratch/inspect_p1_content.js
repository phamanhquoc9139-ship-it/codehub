const fs = require('fs');
const p1 = require('./congnghe8_data_p1.js');
const p2 = require('./congnghe8_data_p2.js');

console.log("p1 lessons:", p1.lessons.length);
console.log("p2 lessons:", p2.lessons.length);

// In ra cấu trúc bài 1 và bài 2 của p1
console.log("Bài 1 content snippet:");
console.log(p1.lessons[0].content.substring(0, 1000));
