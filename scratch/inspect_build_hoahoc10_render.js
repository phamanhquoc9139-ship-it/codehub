const fs = require('fs');
const s = fs.readFileSync('scratch/build_hoahoc10.js', 'utf8');

const startRender = s.indexOf('function renderLessonCard');
console.log(s.slice(startRender, startRender + 3000));
