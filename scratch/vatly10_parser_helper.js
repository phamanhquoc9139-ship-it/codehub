// scratch/vatly10_parser_helper.js
function parseInlineMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 font-mono text-xs">$1</code>');
}

function parseMarkdownTable(lines) {
  if (!lines || lines.length < 2) return '';
  const headerLine = lines[0];
  const rowLines = lines.slice(2);

  const headers = headerLine.split('|').map(s => s.trim()).filter(Boolean);
  
  let html = `
    <div class="my-5 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 shadow-xs">
      <table class="w-full text-left text-xs sm:text-sm border-collapse">
        <thead>
          <tr class="bg-sky-50/80 dark:bg-sky-950/60 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
            ${headers.map((h, i) => `<th class="p-3.5 font-extrabold ${i === 0 ? 'w-1/4' : ''}">${parseInlineMarkdown(h)}</th>`).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
  `;

  for (let r of rowLines) {
    if (!r.trim()) continue;
    const cells = r.split('|').map(s => s.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
    if (cells.length === 0) continue;
    html += `
      <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition">
        ${cells.map((c, i) => `
          <td class="p-3.5 align-top ${i === 0 ? 'font-bold text-sky-700 dark:text-sky-400' : ''}">
            ${parseInlineMarkdown(c)}
          </td>
        `).join('')}
      </tr>
    `;
  }

  html += `
        </tbody>
      </table>
    </div>
  `;
  return html;
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

    // Section header: ### Title
    const h3Match = /^###\s+(.*)$/.exec(trimmed);
    if (h3Match) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = null;
      blocks.push({
        type: 'section_header',
        title: h3Match[1].trim()
      });
      continue;
    }

    // Display LaTeX equation: \[ ... \] or $$ ... $$
    if (trimmed.startsWith('\\[') || trimmed.startsWith('$$')) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = null;
      blocks.push({
        type: 'equation',
        math: trimmed
      });
      continue;
    }

    // Bullet with bold term: - **Term:** Desc or - **Term** Desc
    const bulletBold = /^[-*]\s+\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (bulletBold) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: bulletBold[1].replace(/[:\s]+$/, '').trim(),
        lead: bulletBold[2].trim(),
        children: []
      };
      continue;
    }

    // Numbered item: 1. text
    const numMatch = /^(\d+)\.\s+(.*)$/.exec(trimmed);
    if (numMatch) {
      if (currentBlock && currentBlock.type === 'numbered_list') {
        currentBlock.items.push({ num: numMatch[1], text: numMatch[2].trim() });
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = {
          type: 'numbered_list',
          items: [{ num: numMatch[1], text: numMatch[2].trim() }]
        };
      }
      continue;
    }

    // Plain bullet: - text
    const plainBullet = /^[-*]\s+(.*)$/.exec(trimmed);
    if (plainBullet) {
      const content = plainBullet[1].trim();
      if (currentBlock && currentBlock.type === 'bullet_list') {
        currentBlock.items.push(content);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = {
          type: 'bullet_list',
          items: [content]
        };
      }
      continue;
    }

    // Standalone bold line: **Title**
    const standaloneBold = /^\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (standaloneBold && standaloneBold[1].length < 40) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: standaloneBold[1].trim(),
        lead: standaloneBold[2] ? standaloneBold[2].trim() : '',
        children: []
      };
      continue;
    }

    // Regular paragraph
    if (currentBlock && currentBlock.type === 'paragraph') {
      currentBlock.lead += ' ' + trimmed;
    } else {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'paragraph',
        lead: trimmed
      };
    }
  }

  if (currentBlock) blocks.push(currentBlock);
  return blocks;
}

function renderBlocksToHTML(blocks, lessonNum) {
  let html = '<div class="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">';

  for (let b of blocks) {
    if (b.type === 'table') {
      html += parseMarkdownTable(b.lines);
    } else if (b.type === 'section_header') {
      html += `
        <div class="mt-6 mb-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
          <h4 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
            ${parseInlineMarkdown(b.title)}
          </h4>
        </div>
      `;
    } else if (b.type === 'equation') {
      html += `
        <div class="my-4 p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200/70 dark:border-sky-900/60 text-center overflow-x-auto text-slate-900 dark:text-sky-200 font-medium text-sm sm:text-base shadow-xs">
          ${b.math}
        </div>
      `;
    } else if (b.type === 'card') {
      const isSafety = b.term.toLowerCase().includes('an toàn') || b.term.toLowerCase().includes('rủi ro') || b.term.toLowerCase().includes('sự cố') || b.term.toLowerCase().includes('lưu ý');
      const cardBorder = isSafety ? 'border-amber-300 dark:border-amber-800/80 bg-amber-50/30 dark:bg-amber-950/20' : 'border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/80';
      const icon = isSafety ? 'fa-triangle-exclamation text-amber-500' : 'fa-atom text-sky-500';

      html += `
        <div class="p-5 rounded-2xl border ${cardBorder} shadow-xs mb-3">
          <div class="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-100 dark:border-slate-700/60">
            <i class="fa-solid ${icon} text-sm"></i>
            <h5 class="font-bold text-sm text-slate-900 dark:text-white">
              ${b.term}
            </h5>
          </div>
          ${b.lead ? `<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${parseInlineMarkdown(b.lead)}</p>` : ''}
        </div>
      `;
    } else if (b.type === 'numbered_list') {
      html += `
        <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-2 mb-3.5 shadow-xs">
          ${b.items.map(it => `
            <div class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-sky-500 text-white font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                ${it.num}
              </span>
              <div class="flex-1">${parseInlineMarkdown(it.text)}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (b.type === 'bullet_list') {
      html += `
        <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3.5 shadow-xs">
          <ul class="space-y-2">
            ${b.items.map(it => `
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-dot text-sky-500 text-[10px] mt-1 shrink-0"></i>
                <div class="flex-1">${parseInlineMarkdown(it)}</div>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    } else if (b.type === 'paragraph') {
      html += `
        <div class="p-3.5 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
          ${parseInlineMarkdown(b.lead)}
        </div>
      `;
    }
  }

  html += '</div>';
  return html;
}

module.exports = {
  parseInlineMarkdown,
  parseMarkdownTable,
  parseLessonBlocks,
  renderBlocksToHTML
};
