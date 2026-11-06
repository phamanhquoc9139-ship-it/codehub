const fs = require('fs');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Parse cards in courses-grid
const gridStartTag = '<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" id="courses-grid">';
const gridStartIndex = html.indexOf(gridStartTag);
const gridEndIndex = html.indexOf('<div id="no-courses-found"');

if (gridStartIndex === -1 || gridEndIndex === -1) {
  console.error('Could not find grid boundaries');
  process.exit(1);
}

const gridContent = html.substring(gridStartIndex + gridStartTag.length, gridEndIndex);

// Split cards
// Cards typically start with `<!-- Course Card: ... -->` or `<div class="bg-white dark:bg-gray-700`
const cardRegex = /(?:(<!--\s*Course Card:\s*([^\n\r]*?)\s*-->)\s*)?(<div class="bg-white dark:bg-gray-700[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/gi;

const cards = [];
let match;
while ((match = cardRegex.exec(gridContent)) !== null) {
  const fullHtml = match[0].trim();
  const comment = match[1] || '';
  const commentTitle = match[2] || '';
  const cardDiv = match[3];

  const titleMatch = cardDiv.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : commentTitle;

  const linkMatch = cardDiv.match(/href="([^"]+)"/i);
  const link = linkMatch ? linkMatch[1] : '';

  cards.push({
    title,
    commentTitle,
    link,
    fullHtml
  });
}

console.log('Total extracted cards:', cards.length);

// Analyze grades
cards.forEach((c, idx) => {
  // Determine grade
  let grade = 999; // Default for non-grade specific (like Python, AI tools, HSG)
  const title = c.title;

  // Match grade numbers (1 to 12)
  const m = title.match(/\b(10|11|12|[1-9])\b/);
  if (m) {
    // Check if it's not part of something else like "Veo 3" or "GPT 4"
    if (!title.toLowerCase().includes('veo') && !title.toLowerCase().includes('gpt')) {
      grade = parseInt(m[1], 10);
    }
  }

  // Check Olympic/HSG
  const isOlympic = title.toLowerCase().includes('hsg') || title.toLowerCase().includes('olympic');
  const isAI = title.toLowerCase().includes('google') || title.toLowerCase().includes('chatgpt') || title.toLowerCase().includes('claude') || title.toLowerCase().includes('canva') || title.toLowerCase().includes('codex') || title.toLowerCase().includes('gen ai') || title.toLowerCase().includes('antigravity');
  const isIntroCS = title.toLowerCase().includes('nhập môn') || title.toLowerCase().includes('lập trình web') || title.toLowerCase().includes('python cơ bản');

  c.grade = grade;
  c.isOlympic = isOlympic;
  c.isAI = isAI;
  c.isIntroCS = isIntroCS;
});

// Group by grade
const gradeGroups = {};
for (let g = 1; g <= 12; g++) gradeGroups[g] = [];
const otherGroups = {
  introCS: [],
  aiTools: [],
  olympicHSG: [],
  others: []
};

cards.forEach(c => {
  if (c.grade >= 1 && c.grade <= 12 && !c.isOlympic && !c.isAI && !c.isIntroCS) {
    gradeGroups[c.grade].push(c);
  } else if (c.isIntroCS) {
    otherGroups.introCS.push(c);
  } else if (c.isAI) {
    otherGroups.aiTools.push(c);
  } else if (c.isOlympic) {
    otherGroups.olympicHSG.push(c);
  } else {
    otherGroups.others.push(c);
  }
});

for (let g = 1; g <= 12; g++) {
  console.log(`Lớp ${g}: ${gradeGroups[g].length} môn.`);
}
console.log('Intro CS:', otherGroups.introCS.length);
console.log('AI Tools:', otherGroups.aiTools.length);
console.log('Olympic & HSG:', otherGroups.olympicHSG.length);
console.log('Others:', otherGroups.others.length);
