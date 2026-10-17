const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const gridStart = html.indexOf('id="courses-grid"');
// Find closing </div> for courses-grid or where the script starts
const scriptStart = html.indexOf('<script>', gridStart);
const gridSection = html.substring(gridStart, scriptStart);

// Cards inside courses-grid are divs with class including "bg-white dark:bg-gray-700" or links to courses/
// Let's count how many `<a href="courses/` exist in gridSection
const cardLinks = [];
const regex = /<a\s+href="courses\/([^"]+)"[^>]*>Xem chi tiết/g;
let m;
while ((m = regex.exec(gridSection)) !== null) {
  cardLinks.push(m[1]);
}
console.log('Total cards found by Xem chi tiet link:', cardLinks.length);

// Also let's extract each card element
// Each card starts with `<div class="bg-white dark:bg-gray-700`
const cardStarts = [];
const cardRegex = /<div class="bg-white dark:bg-gray-700 overflow-hidden shadow/g;
while ((m = cardRegex.exec(gridSection)) !== null) {
  cardStarts.push(m.index);
}
console.log('Total cards found by container class:', cardStarts.length);

// Let's extract titles and inspect them
const cards = [];
for (let i = 0; i < cardStarts.length; i++) {
  const start = cardStarts[i];
  const end = (i + 1 < cardStarts.length) ? cardStarts[i + 1] : gridSection.length;
  const chunk = gridSection.substring(start, end);

  const titleMatch = chunk.match(/<h3[^>]*>([^<]+)<\/h3>/);
  const title = titleMatch ? titleMatch[1].trim() : '';

  const linkMatch = chunk.match(/href="courses\/([^"]+)"/);
  const link = linkMatch ? linkMatch[1] : '';

  const lowerTitle = title.toLowerCase();

  const is10 = lowerTitle.includes(' 10') || lowerTitle.includes('(10)');
  const is11 = lowerTitle.includes(' 11') || lowerTitle.includes('(11)');
  const is12 = lowerTitle.includes(' 12') || lowerTitle.includes('(12)');

  const hasNum = [' 1', ' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9'].some(n => lowerTitle.includes(n));
  const notThpt = !lowerTitle.includes('10') && !lowerTitle.includes('11') && !lowerTitle.includes('12');
  const isThcs = hasNum && notThpt;

  const isTinhoc = lowerTitle.includes('tin học') || lowerTitle.includes('ai') || lowerTitle.includes('trí tuệ nhân tạo') || lowerTitle.includes('lập trình') || lowerTitle.includes('python') || lowerTitle.includes('flow') || lowerTitle.includes('notebook') || lowerTitle.includes('gemini') || lowerTitle.includes('aistudio') || lowerTitle.includes('ai studio') || lowerTitle.includes('chatgpt') || lowerTitle.includes('claude') || lowerTitle.includes('antigravity') || lowerTitle.includes('agy') || lowerTitle.includes('veo') || lowerTitle.includes('veo3') || lowerTitle.includes('video') || lowerTitle.includes('canva') || lowerTitle.includes('hsg') || lowerTitle.includes('olympic') || lowerTitle.includes('omypic') || lowerTitle.includes('codex');

  const isThechat = lowerTitle.includes('thể chất') || lowerTitle.includes('bóng') || lowerTitle.includes('cầu lông');
  const isArtSport = lowerTitle.includes('thể chất') || lowerTitle.includes('âm nhạc') || lowerTitle.includes('piano') || lowerTitle.includes('mĩ thuật');

  cards.push({ title, link, is10, is11, is12, isThcs, isTinhoc, isThechat, isArtSport });
}

console.log('Cards parsed:', cards.length);

const c10 = cards.filter(c => c.is10).length;
const c11 = cards.filter(c => c.is11).length;
const c12 = cards.filter(c => c.is12).length;
const cThcs = cards.filter(c => c.isThcs).length;
const cTin = cards.filter(c => c.isTinhoc).length;
const cThechat = cards.filter(c => c.isThechat).length;
const cArtSport = cards.filter(c => c.isArtSport).length;

console.log('--- STATS ---');
console.log('Total Cards in grid:', cards.length);
console.log('Khối 10:', c10);
console.log('Khối 11:', c11);
console.log('Khối 12:', c12);
console.log('Tiểu học & THCS:', cThcs);
console.log('Tin Học & AI:', cTin);
console.log('Thể chất:', cThechat);
console.log('Thể chất & Mỹ thuật:', cArtSport);

// Are there any cards that do not match any category?
const unclassified = cards.filter(c => !c.is10 && !c.is11 && !c.is12 && !c.isThcs && !c.isTinhoc && !c.isThechat && !c.isArtSport);
console.log('Unclassified cards:', unclassified.map(c => c.title));
