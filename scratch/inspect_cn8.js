const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

// Check all <style> tags
const styles = cn.match(/<style[\s\S]*?<\/style>/gi);
console.log('Styles count:', styles ? styles.length : 0);
if (styles) {
  styles.forEach((s, idx) => console.log(`Style ${idx}:\n`, s));
}
