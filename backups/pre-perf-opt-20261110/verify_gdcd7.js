const fs = require('fs');
['courses/gdcd_7.html', 'courses/civics_7.html'].forEach(f => {
  const c = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/' + f, 'utf8');
  console.log(f, 'Size:', c.length);
  console.log('lesson-section count:', (c.match(/class="lesson-section/g) || []).length);
  console.log('SVG count:', (c.match(/<svg viewBox="0 0 650 130"/g) || []).length);
  console.log('Has index.html back link:', c.includes('href="../index.html"'));
  console.log('Has subjects.html:', c.includes('subjects.html'));
  console.log('Has examModal:', c.includes('id="examModal"'));
  console.log('Has hotlineModal:', c.includes('id="hotlineModal"'));
  console.log('Has lawModal:', c.includes('id="lawModal"'));
  console.log('Has skillModal:', c.includes('id="skillModal"'));
});
