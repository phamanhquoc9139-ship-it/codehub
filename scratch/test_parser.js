const fs = require('fs');

function parseMarkdownToHtml(md) {
  // Split into sections by '### '
  const sections = md.split(/(?=^###\s+)/m).filter(s => s.trim().length > 0);
  
  let html = '';
  for (const sec of sections) {
    const lines = sec.trim().split('\n');
    let title = '';
    let bodyLines = [];
    
    if (lines[0].startsWith('### ')) {
      title = lines[0].replace(/^###\s+/, '').trim();
      bodyLines = lines.slice(1);
    } else {
      bodyLines = lines;
    }
    
    let contentHtml = '';
    let inCode = false;
    let codeLang = '';
    let codeBuffer = [];
    let inList = false;
    let listBuffer = [];

    function flushList() {
      if (inList && listBuffer.length > 0) {
        contentHtml += `<ul class="space-y-2.5 my-3">\n${listBuffer.join('\n')}\n</ul>\n`;
        listBuffer = [];
        inList = false;
      }
    }

    function flushCode() {
      if (inCode) {
        const rawCode = codeBuffer.join('\n');
        const escaped = rawCode
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
        contentHtml += `
<div class="my-3.5 rounded-xl overflow-hidden border border-slate-700/90 bg-slate-900 text-slate-100 shadow-sm">
  <div class="flex items-center justify-between px-3.5 py-1.5 bg-slate-800/90 border-b border-slate-700 text-xs font-mono">
    <div class="flex items-center gap-2 text-cyan-400">
      <i class="fa-brands fa-python text-sm"></i>
      <span class="font-bold text-[11px] tracking-wide uppercase">${codeLang || 'PYTHON'}</span>
    </div>
    <button onclick="copyCode(this)" class="px-2 py-0.5 rounded bg-slate-700/80 hover:bg-slate-600 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-[11px]">
      <i class="fa-regular fa-copy"></i>
      <span>Copy</span>
    </button>
  </div>
  <pre class="p-3.5 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed text-emerald-300 font-semibold"><code>${escaped}</code></pre>
</div>\n`;
        codeBuffer = [];
        inCode = false;
      }
    }

    for (let i = 0; i < bodyLines.length; i++) {
      const line = bodyLines[i];
      const trimmed = line.trim();

      if (trimmed.startsWith('```')) {
        if (!inCode) {
          flushList();
          inCode = true;
          codeLang = trimmed.replace(/^```/, '').trim();
          codeBuffer = [];
        } else {
          flushCode();
        }
        continue;
      }

      if (inCode) {
        codeBuffer.push(line);
        continue;
      }

      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        inList = true;
        const text = trimmed.slice(2).trim();
        // Replace **bold** with <strong>
        const formatted = formatInline(text);
        listBuffer.push(`  <li class="flex items-start gap-2.5 leading-relaxed text-xs sm:text-sm text-slate-700 dark:text-slate-300">
    <i class="fa-solid fa-circle-check text-cyan-500 text-xs mt-1 shrink-0"></i>
    <span>${formatted}</span>
  </li>`);
        continue;
      } else {
        flushList();
      }

      if (trimmed.startsWith('> ')) {
        const quoteText = formatInline(trimmed.slice(2).trim());
        contentHtml += `
<div class="my-3 p-3.5 rounded-xl bg-amber-500/10 dark:bg-amber-950/30 border-l-4 border-amber-500 text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
  <i class="fa-solid fa-lightbulb text-amber-500 text-base shrink-0 mt-0.5"></i>
  <div class="font-medium">${quoteText}</div>
</div>\n`;
        continue;
      }

      if (trimmed.length > 0) {
        contentHtml += `<p class="my-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">${formatInline(trimmed)}</p>\n`;
      }
    }

    flushList();
    flushCode();

    if (title) {
      html += `
<div class="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 shadow-xs mb-4">
  <div class="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
    <i class="fa-solid fa-terminal text-cyan-500 text-sm"></i>
    <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">${title}</h4>
  </div>
  ${contentHtml}
</div>\n`;
    } else if (contentHtml.trim().length > 0) {
      html += contentHtml;
    }
  }

  return html;
}

function formatInline(str) {
  return str
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold">$1</code>');
}

const d = require('./tinhoc10_data.js');
console.log('Testing markdown parser on Lesson 1:');
const parsed1 = parseMarkdownToHtml(d.lessons[1].body);
console.log('Length of parsed HTML:', parsed1.length);
console.log('Sample parsed HTML:\n', parsed1.slice(0, 600));

console.log('\nTesting on Lesson 18 (with python code):');
const parsed18 = parseMarkdownToHtml(d.lessons[18].body);
console.log('Has copyCode button?:', parsed18.includes('copyCode(this)'));
