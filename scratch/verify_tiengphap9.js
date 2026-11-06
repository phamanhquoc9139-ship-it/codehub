const fs = require('fs');

const tp9Path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengphap_9.html';
const fr9Path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/french_9.html';

const html1 = fs.readFileSync(tp9Path, 'utf8');
const html2 = fs.readFileSync(fr9Path, 'utf8');

console.log('tiengphap_9.html size:', html1.length);
console.log('french_9.html size:', html2.length);
console.log('Files are 100% synchronized:', html1 === html2);

// Check literal bad tokens
console.log('Literal undefined:', html1.includes('undefined'));
console.log('Literal NaN:', html1.includes('NaN'));
console.log('Literal [object Object]:', html1.includes('[object Object]'));

// Check sections
const expectedSections = ['unite-0', 'unite-1', 'unite-2', 'unite-3', 'unite-4', 'unite-5', 'unite-6'];
let allSecs = true;
expectedSections.forEach(sec => {
  const has = html1.includes(`id="${sec}"`);
  if (!has) {
    console.log(`MISSING: #${sec}`);
    allSecs = false;
  }
});
if (allSecs) console.log('All 7 Unité sections present (unite-0..unite-6): YES');

// Check SVGs
const svgCount = (html1.match(/<svg/g) || []).length;
console.log('Total SVGs in page:', svgCount);

// Check Modals
const modals = ['searchModal', 'grammarModal', 'verbsModal', 'projectsModal', 'examModal'];
modals.forEach(m => {
  console.log(`Modal #${m}:`, html1.includes(`id="${m}"`));
});

// Check SpeechSynthesis
console.log('Audio pronunciation speakFrench (fr-FR):', html1.includes('speakFrench') && html1.includes('fr-FR'));

// Check Précis Grammatical entries
const grammarTopics = [
  'pour / afin de', 'depuis', 'pendant', 'il y a',
  'Conditionnel présent', 'Đại từ Y', 'Đại từ EN',
  '-able / -ible', 'in- / im-', 'Câu cảm thán',
  'Vô nhân xưng khuyến nghị', 'Đại từ sở hữu', 'Từ nối logic'
];
let allGrammar = true;
grammarTopics.forEach(gt => {
  if (!html1.includes(gt)) {
    console.log('Missing grammar topic:', gt);
    allGrammar = false;
  }
});
if (allGrammar) console.log('All 13 Précis Grammatical points present: YES');
