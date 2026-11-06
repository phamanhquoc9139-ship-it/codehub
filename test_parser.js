const fs = require('fs');
const { chapters, trangNguyenQuestions } = require('./congnghe_6_data.js');

function renderMarkdown(md) {
  if (!md) return '';

  // Split into lines
  const rawLines = md.trim().split('\n');
  const blocks = [];
  let currentTable = null;
  let currentUl = null;
  let currentOl = null;
  let currentPara = [];

  function flushPara() {
    if (currentPara.length > 0) {
      const text = currentPara.join(' ').trim();
      if (text) {
        blocks.push(`<p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed my-2">${text}</p>`);
      }
      currentPara = [];
    }
  }

  function flushList() {
    if (currentUl) {
      blocks.push(`<ul class="list-disc pl-5 space-y-1.5 my-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">${currentUl.join('')}</ul>`);
      currentUl = null;
    }
    if (currentOl) {
      blocks.push(`<ol class="list-decimal pl-5 space-y-1.5 my-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">${currentOl.join('')}</ol>`);
      currentOl = null;
    }
  }

  function flushTable() {
    if (currentTable) {
      let tableHtml = '<div class="overflow-x-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"><table class="w-full text-left border-collapse text-xs">';
      // Process rows
      let isFirstRow = true;
      currentTable.forEach(row => {
        if (row.every(c => /^:?-+:?$/.test(c.trim()))) {
          // separator row, skip
          return;
        }
        tableHtml += '<tr class="border-b border-slate-200 dark:border-slate-700/60 transition hover:bg-slate-50/50 dark:hover:bg-slate-800/40">';
        row.forEach(cell => {
          if (isFirstRow) {
            tableHtml += `<th class="py-2.5 px-3.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">${formatInline(cell)}</th>`;
          } else {
            tableHtml += `<td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300">${formatInline(cell)}</td>`;
          }
        });
        tableHtml += '</tr>';
        isFirstRow = false;
      });
      tableHtml += '</table></div>';
      blocks.push(tableHtml);
      currentTable = null;
    }
  }

  function formatInline(str) {
    if (!str) return '';
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-slate-100">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');
  }

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const trimmed = line.trim();

    // Empty line
    if (!trimmed) {
      flushPara();
      flushList();
      flushTable();
      continue;
    }

    // Table row
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushPara();
      flushList();
      if (!currentTable) currentTable = [];
      const cells = trimmed.split('|').slice(1, -1);
      currentTable.push(cells);
      continue;
    } else {
      flushTable();
    }

    // Headings
    if (trimmed.startsWith('### ')) {
      flushPara();
      flushList();
      const title = formatInline(trimmed.replace(/^###\s+/, ''));
      blocks.push(`<h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-5 mb-2.5 flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block shrink-0"></span>${title}</h4>`);
      continue;
    }
    if (trimmed.startsWith('#### ')) {
      flushPara();
      flushList();
      const title = formatInline(trimmed.replace(/^####\s+/, ''));
      blocks.push(`<h5 class="text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-400 mt-3.5 mb-1.5">${title}</h5>`);
      continue;
    }

    // Blockquote
    if (trimmed.startsWith('> ')) {
      flushPara();
      flushList();
      const quote = formatInline(trimmed.replace(/^>\s+/, ''));
      blocks.push(`<blockquote class="p-3 my-2.5 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/30 border-l-4 border-cyan-500 text-xs sm:text-sm text-cyan-900 dark:text-cyan-200 leading-relaxed">${quote}</blockquote>`);
      continue;
    }

    // Unordered list item (- or + or *)
    const ulMatch = line.match(/^(\s*)([-+*])\s+(.*)$/);
    if (ulMatch) {
      flushPara();
      if (currentOl) flushList();
      if (!currentUl) currentUl = [];
      const indent = ulMatch[1].length;
      const content = formatInline(ulMatch[3]);
      if (indent >= 2) {
        currentUl.push(`<li class="ml-4 list-[circle] leading-relaxed">${content}</li>`);
      } else {
        currentUl.push(`<li class="leading-relaxed">${content}</li>`);
      }
      continue;
    }

    // Ordered list item (1. , 2. )
    const olMatch = line.match(/^(\s*)(\d+)\.\s+(.*)$/);
    if (olMatch) {
      flushPara();
      if (currentUl) flushList();
      if (!currentOl) currentOl = [];
      const content = formatInline(olMatch[3]);
      currentOl.push(`<li class="leading-relaxed">${content}</li>`);
      continue;
    }

    // Sub-item like a) b) c)
    if (/^[a-d]\)\s+/.test(trimmed)) {
      flushPara();
      flushList();
      const content = formatInline(trimmed);
      blocks.push(`<h5 class="text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-400 mt-3.5 mb-1.5">${content}</h5>`);
      continue;
    }

    // Regular paragraph text
    currentPara.push(formatInline(trimmed));
  }

  flushPara();
  flushList();
  flushTable();

  return blocks.join('\n');
}

// Test renderMarkdown on lesson 1
const l1 = chapters[0].lessons[0];
console.log('--- TESTING LESSON 1 CONTENT ---');
const renderedL1 = renderMarkdown(l1.content);
console.log(renderedL1.slice(0, 1500));
console.log('\nDoes renderedL1 contain $0?', renderedL1.includes('$0'));
