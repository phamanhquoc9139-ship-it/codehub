const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_9.html', 'utf8');

const idx1 = content.indexOf('id="bai-1"');
const idx2 = content.indexOf('id="bai-2"');
const bai1 = content.slice(idx1, idx2);

const quizMatches = bai1.match(/quiz-card|quiz-btn|Câu hỏi|Luyện tập/g);
console.log('Quiz matches in bai 1 of toan 9:', quizMatches);

// Let's see how many quiz cards in Bai 1
const quizCards = bai1.split('<div class="quiz-card');
console.log('Quiz cards count in Bai 1:', quizCards.length - 1);
