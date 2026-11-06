const fs = require('fs');
['courses/amnhac_9.html', 'courses/music_9.html'].forEach(f => {
  const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/' + f, 'utf8');
  console.log(f, 'size:', content.length, 'has bai3 svg:', content.includes('viewBox="0 0 650 250"'), 'has be1 audio:', content.includes('staff-bai3-be1'));
});
