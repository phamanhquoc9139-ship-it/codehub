const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_10.html', 'utf8');

// Find the main content article for Lesson 1
const startArticle = s.indexOf('<article id="bai-1"');
if (startArticle !== -1) {
  const nextArticle = s.indexOf('<article id="bai-2"');
  console.log('Article Lesson 1:');
  console.log(s.slice(startArticle, nextArticle !== -1 ? nextArticle : startArticle + 4000));
} else {
  console.log('Did not find <article id="bai-1"');
}
