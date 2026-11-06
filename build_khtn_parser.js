const fs = require('fs');

const docXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/khtn6_docx/word/document.xml', 'utf8');

// Function to extract text from a node
function getNodeText(xmlSnippet) {
  return [...xmlSnippet.matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map(m => m[1]).join('').trim();
}

// Extract clean table rows
function extractCleanTables(xml) {
  const tblMatches = [...xml.matchAll(/<w:tbl\b[\s\S]*?<\/w:tbl>/g)];
  return tblMatches.map(tbl => {
    const rowMatches = [...tbl[0].matchAll(/<w:tr\b[\s\S]*?<\/w:tr>/g)];
    return rowMatches.map(row => {
      const cellMatches = [...row[0].matchAll(/<w:tc\b[\s\S]*?<\/w:tc>/g)];
      return cellMatches.map(c => getNodeText(c[0]));
    });
  });
}

const tables = extractCleanTables(docXml);
console.log('Clean table 2 (Formulas):', tables[1].length, 'rows');
console.log('Clean table 3 (Differences):', tables[2].length, 'rows');
console.log('Clean table 4 (Planets):', tables[3].length, 'rows');

// Extract all paragraphs in document order
// Note: we want paragraphs outside tables or all paragraphs in order
const pMatches = [...docXml.matchAll(/<w:p\b[\s\S]*?<\/w:p>/g)];
const paragraphs = pMatches.map(p => getNodeText(p[0])).filter(t => t.length > 0);

console.log('Total text paragraphs:', paragraphs.length);

// Let's identify chapters and lessons
const chapters = [];
let currentChapter = null;
let currentLesson = null;
const lessons = [];

for (let i = 0; i < paragraphs.length; i++) {
  const p = paragraphs[i];

  // Match Chapter: "Chương I Mở đầu về Khoa học tự nhiên"
  const chapMatch = p.match(/^Chương\s+([IVXLCDM]+)\s+(.*)$/i);
  if (chapMatch) {
    currentChapter = {
      num: chapMatch[1],
      title: chapMatch[2],
      fullTitle: p
    };
    chapters.push(currentChapter);
    continue;
  }

  // Match Lesson: "Bài 1 Giới thiệu về Khoa học tự nhiên"
  const lessonMatch = p.match(/^Bài\s+(\d+)\s+(.*)$/i);
  if (lessonMatch) {
    const lessonNum = parseInt(lessonMatch[1], 10);
    currentLesson = {
      id: lessonNum,
      title: lessonMatch[2],
      chapter: currentChapter ? currentChapter.fullTitle : '',
      chapterNum: currentChapter ? currentChapter.num : '',
      pages: '',
      sections: []
    };
    lessons.push(currentLesson);
    continue;
  }

  // If we are in a lesson
  if (currentLesson) {
    // Check if it's the SGK page range
    if (p.startsWith('SGK trang') || p.startsWith('Trang SGK')) {
      currentLesson.pages = p;
      continue;
    }

    // Stop lessons when reaching "Hình và sơ đồ quan trọng"
    if (p.includes('Hình và sơ đồ quan trọng')) {
      currentLesson = null;
      continue;
    }

    // Otherwise it's lesson content paragraph!
    // Often it starts with "Khái niệm và đối tượng. Hiện tượng tự nhiên..."
    const dotIdx = p.indexOf('.');
    let heading = '';
    let content = p;
    if (dotIdx > 0 && dotIdx < 40) {
      heading = p.substring(0, dotIdx).trim();
      content = p.substring(dotIdx + 1).trim();
    }
    currentLesson.sections.push({
      heading: heading || 'Nội dung cốt lõi',
      text: content,
      fullText: p
    });
  }
}

console.log(`Parsed ${chapters.length} chapters and ${lessons.length} lessons.`);
lessons.slice(0, 5).forEach(l => {
  console.log(`- Lesson ${l.id}: ${l.title} (${l.pages}) [${l.sections.length} sections] - Chap ${l.chapterNum}`);
});
console.log('...');
lessons.slice(-5).forEach(l => {
  console.log(`- Lesson ${l.id}: ${l.title} (${l.pages}) [${l.sections.length} sections] - Chap ${l.chapterNum}`);
});
