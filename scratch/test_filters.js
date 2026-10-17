const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

const gridLines = lines.slice(279, 3563);
const gridContent = gridLines.join('\n');

const cardRegex = /<div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;

// Let's parse each card exactly
const cards = [];
const cardBlocks = gridContent.split('<div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer').slice(1);

cardBlocks.forEach((chunk, i) => {
  const titleMatch = chunk.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  const descMatch = chunk.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  const desc = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  const linkMatch = chunk.match(/href="courses\/([^"]+)"/);
  const link = linkMatch ? linkMatch[1] : '';

  cards.push({
    index: i + 1,
    title,
    desc,
    link,
    lowerTitle: title.toLowerCase(),
    cardText: (title + ' ' + desc).toLowerCase()
  });
});

console.log('Total cards parsed:', cards.length);

function testFilter(mode) {
  let count = 0;
  const matched = [];
  cards.forEach(card => {
    const title = card.lowerTitle;
    let matches = false;
    if (mode === 'all') {
      matches = true;
    } else if (mode === 'grade-10') {
      matches = title.includes(' 10') || title.includes('(10)');
    } else if (mode === 'grade-11') {
      matches = title.includes(' 11') || title.includes('(11)');
    } else if (mode === 'grade-12') {
      matches = title.includes(' 12') || title.includes('(12)');
    } else if (mode === 'grade-thcs') {
      const hasNum = [' 1', ' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9'].some(n => title.includes(n));
      const notThpt = !title.includes('10') && !title.includes('11') && !title.includes('12');
      matches = hasNum && notThpt;
    } else if (mode === 'cat-tinhoc') {
      matches = title.includes('tin học') || title.includes('ai') || title.includes('trí tuệ nhân tạo') || title.includes('lập trình') || title.includes('python') || title.includes('flow') || title.includes('notebook') || title.includes('gemini') || title.includes('aistudio') || title.includes('ai studio') || title.includes('chatgpt') || title.includes('claude') || title.includes('antigravity') || title.includes('agy') || title.includes('veo') || title.includes('veo3') || title.includes('video') || title.includes('canva') || title.includes('hsg') || title.includes('olympic') || title.includes('omypic') || title.includes('codex');
    } else if (mode === 'cat-thechat') {
      matches = title.includes('thể chất') || title.includes('bóng') || title.includes('cầu lông');
    } else if (mode === 'cat-art-sport') {
      matches = title.includes('thể chất') || title.includes('âm nhạc') || title.includes('piano') || title.includes('mĩ thuật');
    }
    if (matches) {
      count++;
      matched.push(card.title);
    }
  });
  return { count, matched };
}

console.log('--- TEST RESULTS ---');
const allRes = testFilter('all');
const g10Res = testFilter('grade-10');
const g11Res = testFilter('grade-11');
const g12Res = testFilter('grade-12');
const thcsRes = testFilter('grade-thcs');
const tinRes = testFilter('cat-tinhoc');
const thechatRes = testFilter('cat-thechat');
const artSportRes = testFilter('cat-art-sport');

console.log('All:', allRes.count);
console.log('Grade 10:', g10Res.count);
console.log('Grade 11:', g11Res.count);
console.log('Grade 12:', g12Res.count);
console.log('Tiểu học & THCS:', thcsRes.count);
console.log('Tin & AI:', tinRes.count);
console.log('Thể chất:', thechatRes.count);
console.log('Thể chất & Mỹ thuật:', artSportRes.count);

console.log('\n--- Tin & AI matched titles ---');
console.log(tinRes.matched);

console.log('\n--- Tiểu học & THCS matched titles ---');
console.log(thcsRes.matched);
