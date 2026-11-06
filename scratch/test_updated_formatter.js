const fs = require('fs');

function parseInlineMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-900 dark:text-white font-bold">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
}

function parseMarkdownTable(tableLines) {
  if (tableLines.length < 2) return '';
  const headerCells = tableLines[0].split('|').map(s => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length - 1);
  const dataRows = tableLines.slice(2).map(line => {
    return line.split('|').map(s => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length - 1);
  });

  return `
    <div class="my-5 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 shadow-xs">
      <table class="w-full text-left text-xs sm:text-sm border-collapse">
        <thead>
          <tr class="bg-indigo-50/80 dark:bg-indigo-950/60 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
            ${headerCells.map((h, i) => `<th class="p-3.5 font-extrabold ${i === 0 ? 'w-1/4' : ''}">${parseInlineMarkdown(h)}</th>`).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
          ${dataRows.map(row => `
            <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition">
              ${row.map((cell, cIdx) => `
                <td class="p-3.5 align-top ${cIdx === 0 ? 'font-bold text-indigo-700 dark:text-indigo-400' : ''}">
                  ${parseInlineMarkdown(cell)}
                </td>
              `).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function formatMarkdownToCards(rawText, lessonNum) {
  const lines = rawText.split('\n');
  let html = '<div class="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">';
  
  let currentList = [];
  function flushList() {
    if (currentList.length > 0) {
      html += `<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        ${currentList.map(item => `
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
            <strong class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">${item.term}</strong>
            <p class="text-xs text-slate-600 dark:text-slate-400">${item.desc}</p>
          </div>
        `).join('')}
      </div>`;
      currentList = [];
    }
  }

  let i = 0;
  while (i < lines.length) {
    let line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }

    // Check if line is a table start
    if (line.startsWith('|')) {
      flushList();
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      html += parseMarkdownTable(tableLines);
      continue;
    }

    // Check for bullet: - **Term:** text
    const bulletMatch = line.match(/^[-*]\s+\*\*([^*]+)\*\*[:\s]*(.*)$/);
    // Check for numbered item: 1. **Term:** text
    const numMatch = line.match(/^\d+\.\s+\*\*([^*]+)\*\*[:\s]*(.*)$/);
    // Sub-item: - text
    const subMatch = line.match(/^[-*]\s+(.*)$/);

    if (bulletMatch) {
      const term = bulletMatch[1].trim();
      const desc = parseInlineMarkdown(bulletMatch[2].trim());
      
      if (desc.length < 160 && !desc.includes(':') && !desc.includes(';')) {
        currentList.push({ term, desc });
      } else {
        flushList();
        html += `
          <div class="p-4 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs mb-3">
            <h5 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2 mb-1.5">
              <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
              ${term}
            </h5>
            <div class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">${desc}</div>
          </div>
        `;
      }
    } else if (numMatch) {
      flushList();
      const term = numMatch[1].trim();
      const desc = parseInlineMarkdown(numMatch[2].trim());
      html += `
        <div class="p-3.5 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-xl border border-indigo-100 dark:border-indigo-900/50 mb-2.5">
          <strong class="text-indigo-700 dark:text-indigo-300 font-bold text-xs sm:text-sm block mb-1">
            <i class="fa-solid fa-circle-check text-indigo-500 mr-1.5"></i> ${term}
          </strong>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">${desc}</p>
        </div>
      `;
    } else if (subMatch) {
      flushList();
      html += `
        <div class="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/60 dark:border-slate-700/60 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-2">
          ${parseInlineMarkdown(subMatch[1])}
        </div>
      `;
    } else {
      flushList();
      // Check if it's a comparison or note
      const isNote = line.startsWith('Phân biệt:') || line.startsWith('Lưu ý:') || line.startsWith('Công dân/');
      const boxStyle = isNote 
        ? 'p-4 bg-amber-50/70 dark:bg-amber-950/30 rounded-2xl border border-amber-200/80 dark:border-amber-900/50 text-amber-900 dark:text-amber-200'
        : 'p-3.5 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300';

      html += `
        <div class="${boxStyle} text-xs sm:text-sm leading-relaxed mb-3">
          ${parseInlineMarkdown(line)}
        </div>
      `;
    }
    i++;
  }
  flushList();

  html += '</div>';
  return html;
}

const rawData = JSON.parse(fs.readFileSync('scratch/ktpl10_parsed_raw.json', 'utf8'));
const b19Html = formatMarkdownToCards(rawData.lessonContents[19].body, 19);
console.log('Result for Bài 19 snippet:');
console.log(b19Html.slice(0, 1500));
