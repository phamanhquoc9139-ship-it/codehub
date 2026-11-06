const fs = require('fs');

const f1 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/mithuat_7.html';
const f2 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/art_7.html';

const c1 = fs.readFileSync(f1, 'utf8');
const c2 = fs.readFileSync(f2, 'utf8');

console.log('Files identical:', c1 === c2);
console.log('File size:', c1.length);

const imgTags = c1.match(/<img[^>]+>/g);
console.log('Total <img> tags in Mĩ Thuật 7:', imgTags ? imgTags.length : 0);

const lessonIllBoxes = c1.match(/Tác phẩm &amp; Di sản trọng tâm/g);
console.log('Total Lesson Artwork Exhibition Cards:', lessonIllBoxes ? lessonIllBoxes.length : 0);

const galleryThumbs = c1.match(/w-full h-44 rounded-xl overflow-hidden/g);
console.log('Total Gallery Modal Artwork Thumbnails:', galleryThumbs ? galleryThumbs.length : 0);

console.log('Sample image tag:', imgTags ? imgTags[0] : 'none');
