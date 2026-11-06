const fs = require('fs');

function getCards() {
  const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

  const gridStartTag = '<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" id="courses-grid">';
  const gridStartIndex = html.indexOf(gridStartTag);
  if (gridStartIndex === -1) {
    throw new Error("Cannot find courses-grid");
  }

  const contentAfterGrid = html.substring(gridStartIndex + gridStartTag.length);
  const noCoursesIndex = contentAfterGrid.indexOf('<div id="no-courses-found"');
  const gridBody = contentAfterGrid.substring(0, noCoursesIndex);

  let pos = 0;
  const cards = [];

  while (pos < gridBody.length) {
    const nextTag = gridBody.indexOf('<', pos);
    if (nextTag === -1) break;

    if (gridBody.startsWith('<!--', nextTag)) {
      const commentEnd = gridBody.indexOf('-->', nextTag);
      if (commentEnd === -1) break;
      const comment = gridBody.substring(nextTag, commentEnd + 3);
      pos = commentEnd + 3;

      const divStart = gridBody.indexOf('<div', pos);
      if (divStart === -1) break;

      const divEnd = findMatchingDiv(gridBody, divStart);
      if (divEnd === -1) break;

      const divContent = gridBody.substring(divStart, divEnd);
      cards.push({
        comment: comment.trim(),
        html: (comment + '\n                    ' + divContent).trim(),
        divContent: divContent.trim()
      });
      pos = divEnd;
    } else if (gridBody.startsWith('<div', nextTag)) {
      const divEnd = findMatchingDiv(gridBody, nextTag);
      if (divEnd === -1) break;

      const divContent = gridBody.substring(nextTag, divEnd);
      cards.push({
        comment: '',
        html: divContent.trim(),
        divContent: divContent.trim()
      });
      pos = divEnd;
    } else {
      pos = nextTag + 1;
    }
  }

  function findMatchingDiv(str, startPos) {
    let depth = 0;
    let i = startPos;
    while (i < str.length) {
      if (str.startsWith('<div', i) && (str[i+4] === ' ' || str[i+4] === '>' || str[i+4] === '\n')) {
        depth++;
        i += 4;
      } else if (str.startsWith('</div>', i)) {
        depth--;
        i += 6;
        if (depth === 0) {
          return i;
        }
      } else {
        i++;
      }
    }
    return -1;
  }

  // Parse details
  cards.forEach((c) => {
    const titleMatch = c.divContent.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    if (!title && c.comment) {
      const m = c.comment.match(/Course Card:\s*(.*?)-->/i);
      if (m) title = m[1].trim();
    }

    const linkMatch = c.divContent.match(/href="([^"]+)"/i) || c.divContent.match(/window\.location\.href='([^']+)'/i);
    const link = linkMatch ? linkMatch[1] : '';

    c.title = title;
    c.link = link;

    // Detect category & grade
    const tLower = title.toLowerCase();

    // Check Olympic & HSG
    if (tLower.includes('hsg') || tLower.includes('olympic')) {
      c.groupType = 'hsg';
      c.groupOrder = 90; // Placed after K-12
      c.grade = 90;
      c.cleanSubject = title;
      return;
    }

    // Check AI tools
    const aiKeywords = ['google flow', 'notebooklm', 'gemini', 'ai studio', 'chatgpt', 'claude', 'antigravity', 'veo 3', 'codex', 'gen ai', 'canva'];
    if (aiKeywords.some(k => tLower.includes(k))) {
      c.groupType = 'ai';
      c.groupOrder = 80;
      c.grade = 80;
      c.cleanSubject = title;
      return;
    }

    // Check Intro CS
    const csKeywords = ['nhập môn lập trình', 'lập trình web', 'python cơ bản'];
    if (csKeywords.some(k => tLower.includes(k))) {
      c.groupType = 'intro_cs';
      c.groupOrder = 70;
      c.grade = 70;
      c.cleanSubject = title;
      return;
    }

    // Now for K-12 subjects: Match grade 1 to 12
    // Need to distinguish "10", "11", "12" from "1", "2"
    let grade = null;
    const gradeMatch = title.match(/\b(10|11|12|[1-9])\b/);
    if (gradeMatch) {
      grade = parseInt(gradeMatch[1], 10);
    } else {
      // Check link if not found in title, e.g. grade_10.html, toan_5.html
      const linkGradeMatch = link.match(/_([1-9]|10|11|12)\.html/);
      if (linkGradeMatch) {
        grade = parseInt(linkGradeMatch[1], 10);
      }
    }

    if (grade !== null) {
      c.groupType = 'k12';
      c.groupOrder = grade;
      c.grade = grade;

      // Extract subject name by removing grade number
      let clean = title.replace(new RegExp('\\b' + grade + '\\b', 'g'), '').trim();
      clean = clean.replace(/\s+/g, ' ').replace(/[-–—]\s*$/, '').trim();
      c.cleanSubject = clean;
    } else {
      c.groupType = 'other';
      c.groupOrder = 99;
      c.grade = 99;
      c.cleanSubject = title;
    }
  });

  return cards;
}

module.exports = { getCards };
