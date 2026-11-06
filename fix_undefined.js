const fs = require('fs');
['gdtc_8.html', 'pe_8.html'].forEach(f => {
  const p = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/' + f;
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/<span class="text-\[9px\] text-emerald-600 dark:text-emerald-400 font-mono">undefined<\/span>/g, '');
    fs.writeFileSync(p, content, 'utf8');
    console.log('Fixed undefined in', f);
  }
});
