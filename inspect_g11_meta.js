const fs = require('fs');
const html = fs.readFileSync('courses/grade_11.html', 'utf8');

console.log('--- HEADER ---');
const hStart = html.indexOf('<header');
const hEnd = html.indexOf('</header>') + 9;
console.log(html.slice(hStart, hEnd));

console.log('\n--- HERO ---');
const heroStart = html.indexOf('<section class="bg-gradient');
const heroEnd = html.indexOf('</section>', heroStart) + 10;
console.log(html.slice(heroStart, heroEnd));

console.log('\n--- STATS ---');
console.log('Articles count:', (html.match(/<article\b[^>]*>/g) || []).length);
console.log('Quiz items count:', (html.match(/class="quiz-item/g) || []).length);
console.log('Quiz buttons count:', (html.match(/class="quiz-btn/g) || []).length);
console.log('Sections with blue indicator:', (html.match(/<span class="w-1\.5 h-5 bg-blue-500 rounded-full inline-block"><\/span>/g) || []).length);
console.log('Topic banners:', (html.match(/<!-- ================= TOPIC BANNER/g) || []).length);
