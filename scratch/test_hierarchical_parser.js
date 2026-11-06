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

function parseLessonBlocks(rawText) {
  const lines = rawText.split('\n');
  const blocks = [];
  let currentBlock = null;

  for (let rawLine of lines) {
    const trimmed = rawLine.trim();
    if (!trimmed) continue;

    // Check table
    if (trimmed.startsWith('|')) {
      if (currentBlock && currentBlock.type === 'table') {
        currentBlock.lines.push(trimmed);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: 'table', lines: [trimmed] };
      }
      continue;
    }

    // Check if indented sub-item (2 or more leading spaces with - or *)
    const isSub = /^(\s{2,}|\t)[-*]\s+(.*)$/.exec(rawLine);
    if (isSub && currentBlock && (currentBlock.type === 'bullet' || currentBlock.type === 'card')) {
      const subContent = isSub[2].trim();
      // Check if sub has bold prefix: **Term:** desc or Term: desc
      const subBoldMatch = /^\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(subContent);
      const subColonMatch = /^([^:]+):[:\s]*(.*)$/.exec(subContent);

      if (subBoldMatch) {
        currentBlock.children.push({
          term: subBoldMatch[1].trim(),
          desc: subBoldMatch[2].trim()
        });
      } else if (subColonMatch && subColonMatch[1].length < 35 && !subColonMatch[1].includes(';')) {
        currentBlock.children.push({
          term: subColonMatch[1].trim(),
          desc: subColonMatch[2].trim()
        });
      } else {
        // Plain sub-item
        currentBlock.children.push({
          term: '',
          desc: subContent
        });
      }
      continue;
    }

    // Check top-level bullet: - **Term:** desc
    const bulletMatch = /^[-*]\s+\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (bulletMatch) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: bulletMatch[1].trim(),
        lead: bulletMatch[2].trim(),
        children: []
      };
      continue;
    }

    // Numbered item: 1. **Term:** desc or 1. desc
    const numMatch = /^(\d+)\.\s+(\*\*([^*]+)\*\*[:\s]*)?(.*)$/.exec(trimmed);
    if (numMatch) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'numbered',
        num: numMatch[1],
        term: numMatch[3] ? numMatch[3].trim() : '',
        lead: numMatch[4] ? numMatch[4].trim() : '',
        children: []
      };
      continue;
    }

    // Top-level bullet without bold: - text
    const plainBullet = /^[-*]\s+(.*)$/.exec(trimmed);
    if (plainBullet) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'intro',
        lead: plainBullet[1].trim(),
        children: []
      };
      continue;
    }

    // Regular paragraph
    if (currentBlock) blocks.push(currentBlock);
    currentBlock = {
      type: 'paragraph',
      lead: trimmed,
      children: []
    };
  }
  if (currentBlock) blocks.push(currentBlock);
  return blocks;
}

// Convert blocks into gorgeous HTML
function renderBlocksToHTML(blocks, lessonNum) {
  let html = '<div class="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">';

  for (let b of blocks) {
    if (b.type === 'table') {
      html += parseMarkdownTable(b.lines);
    } else if (b.type === 'intro') {
      html += `
        <div class="p-4 bg-gradient-to-r from-indigo-50/90 to-blue-50/70 dark:from-indigo-950/40 dark:to-slate-800/60 rounded-2xl border border-indigo-100 dark:border-indigo-900/60 text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed mb-4">
          <div class="flex items-start gap-3">
            <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs shadow-xs mt-0.5">
              <i class="fa-solid fa-circle-info"></i>
            </span>
            <div class="flex-1">${parseInlineMarkdown(b.lead)}</div>
          </div>
        </div>
      `;
    } else if (b.type === 'card') {
      const isWarning = b.term.toLowerCase().includes('an toàn') || b.term.toLowerCase().includes('lưu ý') || b.term.toLowerCase().includes('rủi ro');
      const cardBorder = isWarning ? 'border-amber-300 dark:border-amber-800/80 bg-amber-50/50 dark:bg-amber-950/30' : 'border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/80';
      const icon = isWarning ? 'fa-shield-halved text-amber-500' : 'fa-layer-group text-indigo-500';

      html += `
        <div class="p-5 rounded-2xl border ${cardBorder} shadow-xs mb-4">
          <div class="flex items-center gap-2.5 mb-2 pb-2 border-b border-slate-100 dark:border-slate-700/60">
            <i class="fa-solid ${icon} text-base"></i>
            <h5 class="font-black text-sm sm:text-base text-slate-900 dark:text-white">
              ${b.term}
            </h5>
          </div>
          ${b.lead ? `<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3">${parseInlineMarkdown(b.lead)}</p>` : ''}
          ${b.children.length > 0 ? `
            <div class="grid grid-cols-1 ${b.children.length >= 3 ? 'md:grid-cols-3' : b.children.length === 2 ? 'md:grid-cols-2' : ''} gap-3 mt-3 pt-2">
              ${b.children.map(child => `
                <div class="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60 flex flex-col justify-between">
                  ${child.term ? `<strong class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1 text-xs sm:text-sm"><i class="fa-solid fa-angle-right mr-1 text-[10px]"></i> ${child.term}</strong>` : ''}
                  <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${parseInlineMarkdown(child.desc)}</p>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    } else if (b.type === 'numbered') {
      html += `
        <div class="p-4 bg-indigo-50/40 dark:bg-indigo-950/30 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 mb-3">
          <div class="flex items-start gap-3">
            <span class="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
              ${b.num}
            </span>
            <div class="flex-1">
              ${b.term ? `<strong class="text-indigo-700 dark:text-indigo-300 font-bold block mb-1 text-xs sm:text-sm">${b.term}</strong>` : ''}
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">${parseInlineMarkdown(b.lead)}</p>
            </div>
          </div>
        </div>
      `;
    } else {
      const isNote = b.lead.startsWith('Phân biệt:') || b.lead.startsWith('Lưu ý:') || b.lead.startsWith('Công dân/');
      const boxStyle = isNote 
        ? 'p-4 bg-amber-50/80 dark:bg-amber-950/40 rounded-2xl border border-amber-200/80 dark:border-amber-900/50 text-amber-900 dark:text-amber-200 font-medium'
        : 'p-3.5 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300';

      html += `
        <div class="${boxStyle} text-xs sm:text-sm leading-relaxed mb-3">
          ${parseInlineMarkdown(b.lead)}
        </div>
      `;
    }
  }

  html += '</div>';
  return html;
}

const rawData = JSON.parse(fs.readFileSync('scratch/ktpl10_parsed_raw.json', 'utf8'));
const b9Blocks = parseLessonBlocks(rawData.lessonContents[9].body);
console.log('Parsed Bài 9 blocks count:', b9Blocks.length);
b9Blocks.forEach((b, idx) => console.log(idx + 1, b.type, b.term || b.lead.slice(0, 30), 'children:', b.children ? b.children.length : 0));
const b9Html = renderBlocksToHTML(b9Blocks, 9);
console.log('Preview Bài 9 HTML:');
console.log(b9Html.slice(0, 1500));
