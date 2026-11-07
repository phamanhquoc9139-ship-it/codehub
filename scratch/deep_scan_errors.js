const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses';

const filesToCheck = [
  'hoahoc12.html',
  'diali_12.html',
  'ktpl_12.html',
  'gdqp_12.html'
];

for (const f of filesToCheck) {
  const p = path.join(baseDir, f);
  if (!fs.existsSync(p)) {
    console.log(`File not found: ${f}`);
    continue;
  }
  const html = fs.readFileSync(p, 'utf8');
  console.log(`\n=== SCANNING ${f} (${html.length} bytes) ===`);
  
  // 1. Check for empty cards / boxes
  // E.g. container followed by closing div with only whitespace
  const emptyCardMatches = html.match(/<div class="space-y-[^"]*">\s*<\/div>/g);
  if (emptyCardMatches) {
    console.log(`[!] Found ${emptyCardMatches.length} empty card containers!`);
  } else {
    console.log(`[OK] No empty card containers found.`);
  }

  // 2. Check for "Kiến thức trọng tâm phần"
  const genericHeadings = html.match(/Kiến thức trọng tâm phần \d+/g);
  if (genericHeadings) {
    console.log(`[!] Found generic headings:`, genericHeadings);
  } else {
    console.log(`[OK] No generic headings.`);
  }

  // 3. Check for raw markdown headers like "# Chương" or "# Bài"
  const rawMdHeaders = html.match(/#+\s+(Chương|Bài)[^\n<]*/g);
  if (rawMdHeaders) {
    console.log(`[!] Found raw markdown headings:`, rawMdHeaders);
  } else {
    console.log(`[OK] No raw markdown headings.`);
  }

  // 4. Check for standalone dashes "---" in content
  const dashes = html.match(/>\s*---\s*</g);
  if (dashes) {
    console.log(`[!] Found ${dashes.length} standalone dashes "---"!`);
  } else {
    console.log(`[OK] No standalone dashes.`);
  }

  // 5. Check for undefined, NaN, null
  const undefinedCount = (html.match(/undefined/g) || []).length;
  const nanCount = (html.match(/>NaN</g) || []).length;
  console.log(`Undefined occurrences: ${undefinedCount}, NaN occurrences: ${nanCount}`);
}
