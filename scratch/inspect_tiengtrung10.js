const fs = require('fs');

const content = fs.readFileSync('courses/tiengtrung_10.html', 'utf8');

console.log('Size:', content.length);
console.log('Has svg diagrams:', (content.match(/<svg/g) || []).length);
console.log('Has quizzes:', (content.match(/checkQuiz|checkLessonQuiz/g) || []).length);
console.log('Has audio speak:', (content.match(/speakWord|speakChinese|playAudio/g) || []).length);
console.log('Has pinyin ruby or toggle:', content.includes('togglePinyin') || content.includes('<ruby>'));
console.log('Has undefined:', (content.match(/\bundefined\b/g) || []).length);
console.log('Has broken chars:', (content.match(/[≡\u20D7]/g) || []).length);
