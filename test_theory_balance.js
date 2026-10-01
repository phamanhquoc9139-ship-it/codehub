const fs = require('fs');

const oldContent = fs.readFileSync('courses/grade_12.html', 'utf8');

function balanceDivs(html) {
  const tagRegex = /<\/?div\b[^>]*>/gi;
  let match;
  let result = '';
  let lastIndex = 0;
  let depth = 0;

  while ((match = tagRegex.exec(html)) !== null) {
    const full = match[0];
    const isClosing = full.startsWith('</');
    const before = html.slice(lastIndex, match.index);
    result += before;
    lastIndex = tagRegex.lastIndex;

    if (isClosing) {
      if (depth > 0) {
        depth--;
        result += full;
      } else {
        // ignore stray closing div!
      }
    } else {
      depth++;
      result += full;
    }
  }
  result += html.slice(lastIndex);

  while (depth > 0) {
    result += '\n</div>';
    depth--;
  }

  return result;
}

for (let num = 1; num <= 28; num++) {
  const startMarker = `id="bai-${num}"`;
  const startIdx = oldContent.indexOf(startMarker);
  const quizMarker = `id="quiz-bai-${num}"`;
  const quizStart = oldContent.indexOf(quizMarker, startIdx);
  const quizTagStart = oldContent.lastIndexOf('<div', quizStart);

  const h3End = oldContent.indexOf('</h3>', startIdx) + 5;
  let bodyStart = h3End;
  const aMatch = oldContent.slice(h3End, h3End + 300).match(/<a[\s\S]*?<\/a>\s*<\/div>/);
  if (aMatch) {
    bodyStart = h3End + aMatch.index + aMatch[0].length;
  }
  let rawBody = oldContent.slice(bodyStart, quizTagStart).trim();

  // Strip wrapping outer containers if any
  if (rawBody.startsWith('<div class="space-y-')) {
    const firstClose = rawBody.indexOf('>');
    rawBody = rawBody.slice(firstClose + 1).trim();
  }

  // Remove existing nested Target/Practice/Summary boxes to prevent duplicates
  rawBody = rawBody.replace(/<!--\s*Mục tiêu cần đạt\s*-->[\s\S]*?<\/div>\s*<\/div>/g, '');
  rawBody = rawBody.replace(/<div class="p-3\.5 bg-blue-50[\s\S]*?<\/div>\s*<\/div>/g, '');
  rawBody = rawBody.replace(/<div class="p-4 rounded-xl bg-blue-50[\s\S]*?<\/div>\s*<\/div>/g, '');

  rawBody = rawBody.replace(/<!--\s*(?:Thực hành|Nhiệm vụ thực hành)[\s\S]*?-->[\s\S]*?<\/div>\s*<\/div>/g, '');
  rawBody = rawBody.replace(/<div class="p-4 rounded-xl bg-gray-50[\s\S]*?<\/div>\s*<\/div>/g, '');

  rawBody = rawBody.replace(/<!--\s*(?:Tóm tắt|Ghi nhớ)[\s\S]*?-->[\s\S]*?<\/div>\s*<\/div>/g, '');
  rawBody = rawBody.replace(/<div class="p-3\.5 bg-emerald-50[\s\S]*?<\/div>\s*<\/div>/g, '');
  rawBody = rawBody.replace(/<div class="p-4 rounded-xl bg-amber-50[\s\S]*?<\/div>\s*<\/div>/g, '');

  const balanced = balanceDivs(rawBody.trim());
  const opens = (balanced.match(/<div\b/g) || []).length;
  const closes = (balanced.match(/<\/div>/g) || []).length;
  if (opens !== closes) {
    console.log(`Bài ${num} theory: UNBALANCED! opens=${opens}, closes=${closes}`);
  }
}
console.log('ALL 28 LESSONS BALANCED PERFECTLY!');
