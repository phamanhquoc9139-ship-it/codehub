const fs = require('fs');

const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_5.html';
const content = fs.readFileSync(path, 'utf8');

console.log('File size:', content.length, 'bytes');

const articleMatches = content.match(/<article id="bai-(\d+)"/g) || [];
console.log('Articles found:', articleMatches.length);

const topicMatches = content.match(/<section id="chude-(\d+)"/g) || [];
console.log('Topics found:', topicMatches.length);

const missingLessons = [];
for (let i = 1; i <= 75; i++) {
  if (!content.includes('id="bai-' + i + '"')) {
    missingLessons.push(i);
  }
}
console.log('Missing lessons (1..75):', missingLessons.length === 0 ? 'None (Full 75 lessons present!)' : missingLessons);

const rawLatexMatches = content.match(/\\(times|dfrac|frac|text\{|sqrt|approx)/g) || [];
console.log('Raw unescaped LaTeX occurrences:', rawLatexMatches.length);

console.log('KaTeX scripts included:', content.includes('katex.min.js'));

const tnQuestions = content.match(/name="tn_q_\d+"/g) || [];
console.log('TN questions count (total radio inputs):', tnQuestions.length, '(expected 100 for 25 questions * 4 options)');

const imgMatches = content.match(/<img\b/gi) || [];
console.log('Img tags count:', imgMatches.length, '(expected 0)');

const checkTopicQuizMatches = content.match(/checkTopicQuiz\(/g) || [];
console.log('Lesson quiz check buttons:', checkTopicQuizMatches.length, '(expected 75)');

// Check index.html
const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
const indexContent = fs.readFileSync(indexPath, 'utf8');
console.log('Index contains toan_5.html link:', indexContent.includes('courses/toan_5.html'));

