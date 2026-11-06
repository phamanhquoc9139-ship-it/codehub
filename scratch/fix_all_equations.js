// scratch/fix_all_equations.js
const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  console.log('Fixing file:', filePath);
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to find equation divs:
  // <div class="my-3 p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-900/60 text-center text-slate-900 dark:text-blue-100 font-medium text-sm sm:text-base leading-loose overflow-x-auto">\s*([\s\S]*?)\s*</div>
  const eqDivRegex = /(<div class="my-3 p-4 rounded-xl bg-blue-50\/80 dark:bg-blue-950\/50 border border-blue-200\/80 dark:border-blue-900\/60 text-center text-slate-900 dark:text-blue-100 font-medium text-sm sm:text-base leading-loose overflow-x-auto">\s*)([\s\S]*?)(\s*<\/div>)/g;

  content = content.replace(eqDivRegex, (match, openTag, body, closeTag) => {
    let trimmed = body.trim();
    // remove any existing $$ or \[ \]
    trimmed = trimmed.replace(/^\$\$|\$\$$/g, '').replace(/^\\\[|\\\]$/g, '').trim();
    // wrap properly with $$
    return openTag + '$$\n' + trimmed + '\n$$' + closeTag;
  });

  // Also check for standalone display equation divs in case class differs:
  // e.g. <div class="my-5 p-5 sm:p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60 text-center overflow-x-auto text-slate-900 dark:text-blue-200 font-medium text-sm sm:text-base shadow-xs leading-loose">\s*([\s\S]*?)\s*</div>
  const eqDivRegex2 = /(<div class="my-5 p-5 sm:p-6 rounded-2xl bg-blue-50\/70 dark:bg-blue-950\/40 border border-blue-200\/70 dark:border-blue-900\/60 text-center overflow-x-auto text-slate-900 dark:text-blue-200 font-medium text-sm sm:text-base shadow-xs leading-loose">\s*)([\s\S]*?)(\s*<\/div>)/g;

  content = content.replace(eqDivRegex2, (match, openTag, body, closeTag) => {
    let trimmed = body.trim();
    trimmed = trimmed.replace(/^\$\$|\$\$$/g, '').replace(/^\\\[|\\\]$/g, '').trim();
    return openTag + '$$\n' + trimmed + '\n$$' + closeTag;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed successfully:', filePath);
}

fixFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html');
fixFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html');
