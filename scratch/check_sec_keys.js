const path = require('path');
const lessons = require(path.join(__dirname, 'toan11_data.js'));

lessons.forEach(l => {
  l.sections.forEach((s, idx) => {
    const keys = Object.keys(s);
    if (!s.details) {
      console.log('Lesson ' + l.num + ' sec ' + idx + ' missing details! Keys:', keys);
    }
  });
});
