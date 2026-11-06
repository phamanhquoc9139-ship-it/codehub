const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_6.html', 'utf8');

console.log('File size:', content.length);
console.log('Contains $0?', content.includes('$0'));

// Check lesson titles
for (let i = 1; i <= 12; i++) {
    const hasLesson = content.includes(`id="lesson-${i}"`);
    console.log(`Lesson ${i} exists:`, hasLesson);
}

// Check hotline modal
console.log('Has hotlineModal:', content.includes('id="hotlineModal"'));
console.log('Has trangNguyenModal:', content.includes('id="trangNguyenModal"'));
console.log('Has handbookModal:', content.includes('id="handbookModal"'));
