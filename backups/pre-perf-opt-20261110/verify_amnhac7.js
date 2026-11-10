const fs = require('fs');
['courses/amnhac_7.html', 'courses/music_7.html'].forEach(f => {
  const c = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/' + f, 'utf8');
  console.log(f, 'Size:', c.length);
  console.log('topic-section count:', (c.match(/class="topic-section/g) || []).length);
  console.log('SVG count:', (c.match(/<svg viewBox="0 0 650 130"/g) || []).length);
  console.log('Has index.html back link:', c.includes('href="../index.html"'));
  console.log('Has subjects.html:', c.includes('subjects.html'));
  console.log('Has examModal:', c.includes('id="examModal"'));
  console.log('Has theoryModal:', c.includes('id="theoryModal"'));
  console.log('Has termsModal:', c.includes('id="termsModal"'));
  console.log('Has Thuat ngu trang 67:', c.includes('id="thuat-ngu-trang-67"'));
});
