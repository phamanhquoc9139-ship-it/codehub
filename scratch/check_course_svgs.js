const fs = require('fs');

function checkSVGs(filePath) {
  if (!fs.existsSync(filePath)) return "Not exist";
  const content = fs.readFileSync(filePath, 'utf8');
  const svgMatches = content.match(/<svg[\s\S]*?<\/svg>/g) || [];
  const lessonMatches = content.match(/class="[^"]*lesson-card[^"]*"/g) || content.match(/id="bai-\d+"/g) || [];
  return {
    size: content.length,
    svgCount: svgMatches.length,
    lessons: lessonMatches.length
  };
}

console.log("toan_6:", checkSVGs('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_6.html'));
console.log("toan_7:", checkSVGs('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html'));
console.log("congnghe_7:", checkSVGs('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html'));
console.log("congnghe_8:", checkSVGs('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_8.html'));
