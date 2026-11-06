const fs = require('fs');

const raw = fs.readFileSync('scratch/user_vatly10_prompt.txt', 'utf8');

const chapters = [
  { num: 1, title: 'Chương I – Mở đầu', startPattern: '# Chương I – Mở đầu', lessons: [1, 2, 3] },
  { num: 2, title: 'Chương II – Động học', startPattern: '# Chương II – Động học', lessons: [4, 5, 6, 7, 8, 9, 10, 11, 12] },
  { num: 3, title: 'Chương III – Động lực học', startPattern: '# Chương III – Động lực học', lessons: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  { num: 4, title: 'Chương IV – Năng lượng, công, công suất', startPattern: '# Chương IV – Năng lượng, công, công suất', lessons: [23, 24, 25, 26, 27] },
  { num: 5, title: 'Chương V – Động lượng', startPattern: '# Chương V – Động lượng', lessons: [28, 29, 30] },
  { num: 6, title: 'Chương VI – Chuyển động tròn đều', startPattern: '# Chương VI – Chuyển động tròn đều', lessons: [31, 32] },
  { num: 7, title: 'Chương VII – Biến dạng của vật rắn, áp suất chất lỏng', startPattern: '# Chương VII – Biến dạng của vật rắn, áp suất chất lỏng', lessons: [33, 34] }
];

const lessonsData = {};

for (let i = 1; i <= 34; i++) {
  const startPattern = `## Bài ${i}.`;
  const nextPattern = i < 34 ? `## Bài ${i + 1}.` : '# Bảng công thức tra cứu';

  const startIdx = raw.indexOf(startPattern);
  let endIdx = -1;
  if (i < 34) {
    endIdx = raw.indexOf(nextPattern, startIdx);
  } else {
    endIdx = raw.indexOf(nextPattern, startIdx);
  }

  if (startIdx === -1) {
    console.error(`Could not find start for Bài ${i}`);
    continue;
  }
  if (endIdx === -1) {
    console.error(`Could not find end for Bài ${i}`);
    continue;
  }

  const lessonRaw = raw.slice(startIdx, endIdx).trim();
  const firstLineEnd = lessonRaw.indexOf('\n');
  const titleLine = lessonRaw.slice(0, firstLineEnd).trim();
  const title = titleLine.replace(`## Bài ${i}.`, '').trim();
  const body = lessonRaw.slice(firstLineEnd).trim();

  // Find which chapter it belongs to
  const chap = chapters.find(c => c.lessons.includes(i));

  lessonsData[i] = {
    num: i,
    chapter: chap.num,
    chapterTitle: chap.title,
    title,
    body
  };
  console.log(`Bài ${i} [Chương ${chap.num}]: ${title} (${body.length} chars)`);
}

const tableStart = raw.indexOf('# Bảng công thức tra cứu');
const termsStart = raw.indexOf('# Đơn vị và thuật ngữ cốt lõi');
const notesStart = raw.indexOf('**Nguồn nội dung:**');

const formulaTableText = raw.slice(tableStart, termsStart).trim();
const termsText = raw.slice(termsStart, notesStart).trim();

console.log('\nFormula table length:', formulaTableText.length);
console.log('Terms text length:', termsText.length);

fs.writeFileSync('scratch/vatly10_parsed_raw.json', JSON.stringify({
  chapters,
  lessonsData,
  formulaTableText,
  termsText
}, null, 2), 'utf8');

console.log('Saved parsed data to scratch/vatly10_parsed_raw.json');
