const d = require('./tinhoc10_data.js');
console.log('topics length:', d.topics.length);
console.log('lessons isArray?:', Array.isArray(d.lessons), 'keys/length:', typeof d.lessons, d.lessons.length || Object.keys(d.lessons).length);
console.log('pythonCheatsheet length:', typeof d.pythonCheatsheet, d.pythonCheatsheet.length);
console.log('mistakesCheatsheet length:', typeof d.mistakesCheatsheet, d.mistakesCheatsheet.length);
if (Array.isArray(d.lessons)) {
  console.log('Sample lesson 1:', d.lessons[0].id, d.lessons[0].title);
} else {
  console.log('Sample lesson 1 from object:', Object.keys(d.lessons)[0], d.lessons[Object.keys(d.lessons)[0]].title);
}
