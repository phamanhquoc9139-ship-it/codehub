const fs = require('fs');

const f1 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/mithuat_7.html';
const f2 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/art_7.html';

const c1 = fs.readFileSync(f1, 'utf8');
const c2 = fs.readFileSync(f2, 'utf8');

console.log('Synchronized identical:', c1 === c2);
console.log('File size:', c1.length);

const svgCount = (c1.match(/<svg/g) || []).length;
console.log('Total <svg> tags:', svgCount);

const imgCount = (c1.match(/<img/g) || []).length;
console.log('Total <img> tags:', imgCount);

const lessonSections = (c1.match(/class="lesson-section/g) || []).length;
console.log('Total lesson sections:', lessonSections);

const heritageCards = (c1.match(/Tác phẩm &amp; Di sản trọng tâm/g) || []).length;
console.log('Total heritage analysis cards:', heritageCards);

const mindmaps = (c1.match(/Sơ Đồ Khái Niệm Trọng Tâm/g) || []).length;
console.log('Total Mindmap HTML diagrams:', mindmaps);

const galleryCards = (c1.match(/class="gallery-card/g) || []).length;
console.log('Total Gallery heritage cards:', galleryCards);
