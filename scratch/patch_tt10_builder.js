const fs = require('fs');
let code = fs.readFileSync('scratch/build_tiengtrung10.js', 'utf8');

// 1. Define orderedLessonKeys
const target1 = `const lessonKeys = Object.keys(data.lessons);
for (const key of lessonKeys) {
  const l = data.lessons[key];
  if (topicLessons[l.topicId]) {
    topicLessons[l.topicId].push(l);
  }
}`;

const replacement1 = `const orderedLessonKeys = ['1', '2', '3', 'r1', '4', '5', 'r2', '6', '7', '8', 'r3', '9', '10', 'r4'];
for (const key of orderedLessonKeys) {
  const l = data.lessons[key];
  if (topicLessons[l.topicId]) {
    topicLessons[l.topicId].push(l);
  }
}`;

// 2. Loop over orderedLessonKeys for main content
const target2 = `for (const key of lessonKeys) {
  const l = data.lessons[key];`;

const replacement2 = `for (const key of orderedLessonKeys) {
  const l = data.lessons[key];`;

// 3. Scroll spy replacement
const target3 = `addEventListener('scroll', () => {
      const lessons = document.querySelectorAll('article.lesson-card');
      const scrollPos = window.scrollY + 160;

      lessons.forEach(lesson => {
        const top = lesson.offsetTop;
        const height = lesson.offsetHeight;
        const id = lesson.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    });`;

const replacement3 = `addEventListener('scroll', () => {
      const lessons = document.querySelectorAll('article.lesson-card');
      const navLinks = document.querySelectorAll('.nav-link');
      let currentId = '';

      lessons.forEach(lesson => {
        const top = lesson.getBoundingClientRect().top;
        if (top <= 140) {
          currentId = lesson.id;
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
          link.classList.add('active');
        }
      });
    });`;

// 4. Update .nav-link.active style
const target4 = `.nav-link.active {
      background-color: rgb(220 38 38 / 0.12);
      border-color: rgb(220 38 38);
      color: rgb(220 38 38);
    }
    .dark .nav-link.active {
      background-color: rgb(220 38 38 / 0.2);
      border-color: rgb(248 113 113);
      color: rgb(248 113 113);
    }`;

const replacement4 = `.nav-link.active {
      background-color: rgba(220, 38, 38, 0.12) !important;
      border-color: #dc2626 !important;
      color: #dc2626 !important;
    }
    .dark .nav-link.active {
      background-color: rgba(220, 38, 38, 0.22) !important;
      border-color: #f87171 !important;
      color: #f87171 !important;
    }`;

console.log('Matches:');
console.log('target1:', code.includes(target1));
console.log('target2:', code.includes(target2));
console.log('target3:', code.includes(target3));
console.log('target4:', code.includes(target4));

if (code.includes(target1)) code = code.replace(target1, replacement1);
if (code.includes(target2)) code = code.replace(target2, replacement2);
if (code.includes(target3)) code = code.replace(target3, replacement3);
if (code.includes(target4)) code = code.replace(target4, replacement4);

fs.writeFileSync('scratch/build_tiengtrung10.js', code, 'utf8');
console.log('Updated scratch/build_tiengtrung10.js successfully!');
