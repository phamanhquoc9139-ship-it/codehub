const fs = require('fs');
const lessons = require('./make_music8_data.js');

lessons.forEach(l => {
  console.log(`Bài ${l.lessonNum}: ${l.title}`);
});
