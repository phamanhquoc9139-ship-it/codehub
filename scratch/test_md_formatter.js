const fs = require('fs');

function formatMarkdownToHtml(md) {
  const lines = md.split('\n');
  let html = '';
  let inUl = false;
  let inOl = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      if (inOl) { html += '</ol>\n'; inOl = false; }
      continue;
    }

    // Bold & italic formatting
    line = line.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
    line = line.replace(/\*([^*]+)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');

    // Headers
    if (line.startsWith('#### ')) {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      if (inOl) { html += '</ol>\n'; inOl = false; }
      const headerText = line.replace('#### ', '').trim();
      html += `
        <div class="mt-6 mb-3 pb-2 border-b border-rose-100 dark:border-rose-900/40 flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
          <h5 class="text-base sm:text-lg font-bold text-rose-900 dark:text-rose-200">${headerText}</h5>
        </div>
      `;
      continue;
    }

    // Numbered list
    const numMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (numMatch) {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      if (!inOl) { html += '<ol class="space-y-3 my-3">\n'; inOl = true; }
      html += `
        <li class="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
          <span class="w-6 h-6 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">${numMatch[1]}</span>
          <div class="leading-relaxed sm:leading-loose tracking-wide flex-1">${numMatch[2]}</div>
        </li>
      `;
      continue;
    }

    // Bullet list
    if (line.startsWith('- ')) {
      if (inOl) { html += '</ol>\n'; inOl = false; }
      if (!inUl) { html += '<ul class="space-y-3 my-3">\n'; inUl = true; }
      const itemText = line.slice(2).trim();
      html += `
        <li class="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
          <span class="w-2 h-2 rounded-full bg-rose-500 mt-2.5 shrink-0 shadow-2xs"></span>
          <div class="leading-relaxed sm:leading-loose tracking-wide flex-1">${itemText}</div>
        </li>
      `;
      continue;
    }

    // Regular paragraph
    if (inUl) { html += '</ul>\n'; inUl = false; }
    if (inOl) { html += '</ol>\n'; inOl = false; }
    html += `<p class="text-sm sm:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed sm:leading-loose tracking-wide my-2.5">${line}</p>\n`;
  }

  if (inUl) { html += '</ul>\n'; }
  if (inOl) { html += '</ol>\n'; }

  return html;
}

// Test with Unit 1
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/user_request_van12.md', 'utf8');
const u1Start = content.indexOf('## Bài 1. Khả năng lớn lao của tiểu thuyết');
const u1End = content.indexOf('## Bài 2.');
const u1 = content.slice(u1Start, u1End);

console.log('Sample parsed HTML output length:', formatMarkdownToHtml(u1).length);
