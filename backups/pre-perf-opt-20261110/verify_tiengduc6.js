const fs = require('fs');
['courses/tiengduc_6.html', 'courses/german_6.html'].forEach(f => {
  const c = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/' + f, 'utf8');
  console.log(f, 'has subjects.html:', c.includes('subjects.html'));
  console.log(f, 'has index.html link:', c.includes('href="../index.html"'));
});
