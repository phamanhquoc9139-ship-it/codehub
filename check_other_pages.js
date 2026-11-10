const fs = require('fs');
const path = require('path');

const base = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';
for (const file of ['login.html', 'courses.html', 'subjects.html', 'student-dashboard.html', 'teacher.html']) {
  const c = fs.readFileSync(path.join(base, file), 'utf8');
  console.log(file, 'emails:', c.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g));
}
