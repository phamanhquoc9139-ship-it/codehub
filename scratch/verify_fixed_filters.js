const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

const gridLines = lines.slice(279, 3563);
const gridContent = gridLines.join('\n');

const cardBlocks = gridContent.split('<div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer').slice(1);

const cards = cardBlocks.map((chunk, i) => {
  const titleMatch = chunk.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  const descMatch = chunk.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  const desc = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  return {
    title,
    lowerTitle: title.toLowerCase(),
    cardText: (title + ' ' + desc).toLowerCase()
  };
});

function checkFilter(mode) {
  let count = 0;
  cards.forEach(c => {
    const title = c.lowerTitle;
    let match = false;
    if (mode === 'all') {
      match = true;
    } else if (mode === 'grade-10') {
      match = title.includes(' 10') || title.includes('(10)');
    } else if (mode === 'grade-11') {
      match = title.includes(' 11') || title.includes('(11)');
    } else if (mode === 'grade-12') {
      match = title.includes(' 12') || title.includes('(12)');
    } else if (mode === 'grade-thcs') {
      const isOlympicHsg = title.includes('hsg') || title.includes('olympic') || title.includes('cấp 3');
      const isVeo = title.includes('veo');
      const hasNum = [' 1', ' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9'].some(n => title.includes(n));
      const notThpt = !title.includes('10') && !title.includes('11') && !title.includes('12');
      match = hasNum && notThpt && !isOlympicHsg && !isVeo;
    } else if (mode === 'cat-olympic-hsg') {
      match = title.includes('hsg') || title.includes('olympic');
    } else if (mode === 'cat-tinhoc') {
      match = title.includes('tin học') || title.includes('ai') || title.includes('trí tuệ nhân tạo') || title.includes('lập trình') || title.includes('python') || title.includes('flow') || title.includes('notebook') || title.includes('gemini') || title.includes('aistudio') || title.includes('ai studio') || title.includes('chatgpt') || title.includes('claude') || title.includes('antigravity') || title.includes('agy') || title.includes('veo') || title.includes('canva') || title.includes('codex');
    } else if (mode === 'cat-thechat') {
      match = title.includes('thể chất') || title.includes('bóng') || title.includes('cầu lông');
    } else if (mode === 'cat-art-sport') {
      match = title.includes('thể chất') || title.includes('âm nhạc') || title.includes('piano') || title.includes('mĩ thuật');
    }
    if (match) count++;
  });
  return count;
}

console.log('Total:', checkFilter('all'));
console.log('Grade 10:', checkFilter('grade-10'));
console.log('Grade 11:', checkFilter('grade-11'));
console.log('Grade 12:', checkFilter('grade-12'));
console.log('Grade THCS:', checkFilter('grade-thcs'));
console.log('Olympic & HSG:', checkFilter('cat-olympic-hsg'));
console.log('Tin & AI:', checkFilter('cat-tinhoc'));
console.log('The Chat:', checkFilter('cat-thechat'));
console.log('Art & Sport:', checkFilter('cat-art-sport'));
