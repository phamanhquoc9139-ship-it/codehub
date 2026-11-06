const fs = require('fs');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const gridStartTag = '<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" id="courses-grid">';
const gridStartIndex = html.indexOf(gridStartTag);
if (gridStartIndex === -1) {
  console.error("Cannot find courses-grid");
  process.exit(1);
}

const contentAfterGrid = html.substring(gridStartIndex + gridStartTag.length);

// We need to parse direct children of courses-grid until we hit `<div id="no-courses-found"`
const noCoursesIndex = contentAfterGrid.indexOf('<div id="no-courses-found"');
const gridBody = contentAfterGrid.substring(0, noCoursesIndex);

// Let's parse all top-level elements and their preceding comments
let pos = 0;
const cards = [];

while (pos < gridBody.length) {
  // Find next '<'
  const nextTag = gridBody.indexOf('<', pos);
  if (nextTag === -1) break;

  // Check if it's a comment
  if (gridBody.startsWith('<!--', nextTag)) {
    const commentEnd = gridBody.indexOf('-->', nextTag);
    if (commentEnd === -1) break;
    const comment = gridBody.substring(nextTag, commentEnd + 3);
    pos = commentEnd + 3;

    // Now find the opening <div
    const divStart = gridBody.indexOf('<div', pos);
    if (divStart === -1) break;

    // Extract balanced div
    const divEnd = findMatchingDiv(gridBody, divStart);
    if (divEnd === -1) break;

    const divContent = gridBody.substring(divStart, divEnd);
    cards.push({
      comment: comment.trim(),
      html: (comment + '\n' + divContent).trim(),
      divContent: divContent.trim()
    });
    pos = divEnd;
  } else if (gridBody.startsWith('<div', nextTag)) {
    // A card without leading comment
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

console.log('Total extracted top-level cards:', cards.length);

// Extract info from each card
cards.forEach((c, idx) => {
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
});

cards.forEach((c, i) => {
  if (i < 10 || i > cards.length - 15 || c.title.includes('Toán 5') || c.title.includes('Công Nghệ 6')) {
    console.log(`${i+1}: [${c.title}] -> ${c.link}`);
  }
});
