// scratch/build_toan10.js
const fs = require('fs');
const path = require('path');

const toanData = require('./toan10_data.js');
const diagrams = require('./toan10_diagrams.js');
const reviewQuizzes = require('./toan10_review_quizzes.js');

const { chapters, lessons, formulaTableText, termsText } = toanData;

// Helper to escape HTML characters
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

// Inline Markdown parser (handles **bold**, *italic*, `code`, and KaTeX inline math)
function parseInline(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-blue-100/70 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-mono text-xs">$1</code>');
}

// Markdown Table parser into Tailwind Table
function parseTable(lines) {
  if (!lines || lines.length < 2) return '';
  const rows = lines.map(line =>
    line.split('|')
        .map(c => c.trim())
        .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1)
  );
  if (rows.length < 2) return '';

  const headerRow = rows[0];
  const dataRows = rows.slice(2); // Skip separator row

  let html = `
    <div class="my-5 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-xs">
      <table class="w-full text-left text-xs sm:text-sm border-collapse">
        <thead>
          <tr class="bg-blue-50/80 dark:bg-blue-950/60 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-800">
            ${headerRow.map(h => `<th class="p-3.5 font-extrabold">${parseInline(h)}</th>`).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
          ${dataRows.map(r => `
            <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition">
              ${r.map((c, i) => `<td class="p-3.5 ${i === 0 ? 'font-semibold text-slate-900 dark:text-white' : ''}">${parseInline(c)}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  return html;
}

// Block parser for markdown text
function parseBlocks(rawText) {
  const lines = rawText.split('\n');
  const blocks = [];
  let currentBlock = null;
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();
    if (!trimmed) {
      i++;
      continue;
    }

    // Table line
    if (trimmed.startsWith('|')) {
      if (currentBlock && currentBlock.type === 'table') {
        currentBlock.lines.push(trimmed);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: 'table', lines: [trimmed] };
      }
      i++;
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
      i++;
      continue;
    }

    // Blockquote line: starts with > (e.g. "> Quote text" or "  > Quote text")
    if (trimmed.startsWith('>')) {
      const quoteText = trimmed.replace(/^>\s*/, '').trim();

      // If inside a card that has no lead (e.g. - **Định lí:** followed by > quote)
      if (currentBlock && currentBlock.type === 'card' && !currentBlock.lead) {
        currentBlock.lead = quoteText;
        currentBlock.isQuote = true;
      } else if (currentBlock && currentBlock.type === 'card') {
        currentBlock.quote = quoteText;
      } else if (currentBlock && currentBlock.type === 'blockquote') {
        currentBlock.text += ' ' + quoteText;
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = {
          type: 'blockquote',
          text: quoteText
        };
      }
      i++;
      continue;
    }

    // Display LaTeX equation: starts with \[ or $$
    if (trimmed.startsWith('\\[') || trimmed.startsWith('$$')) {
      const isBracket = trimmed.startsWith('\\[');
      const closeDelim = isBracket ? '\\]' : '$$';

      let eqLines = [];
      if (isBracket && trimmed.length > 2 && trimmed.endsWith('\\]')) {
        eqLines.push(trimmed);
        i++;
      } else if (!isBracket && trimmed.length > 2 && trimmed.slice(2).includes('$$')) {
        eqLines.push(trimmed);
        i++;
      } else {
        eqLines.push(trimmed);
        i++;
        while (i < lines.length) {
          const nextTrimmed = lines[i].trim();
          eqLines.push(nextTrimmed);
          if (nextTrimmed.includes(closeDelim)) {
            i++;
            break;
          }
          i++;
        }
      }

      const eqRaw = eqLines.map(l => l.replace(/^\$\$|\$\$$|^\\\[|\\\]$/g, '').trim()).filter(Boolean).join(' ');
      const fullEq = '$$' + eqRaw + '$$';

      // If current block is a card with empty lead, attach equation to the card
      if (currentBlock && currentBlock.type === 'card' && !currentBlock.equation) {
        currentBlock.equation = fullEq;
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = null;
        blocks.push({
          type: 'equation',
          math: fullEq
        });
      }
      continue;
    }

    // Bullet with bold term: - **Term:** Desc
    const bulletBold = /^[-*]\s+\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (bulletBold) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: bulletBold[1].replace(/[:\s]+$/, '').trim(),
        lead: bulletBold[2].trim(),
        items: []
      };
      i++;
      continue;
    }

    // Sub-bullet under card: e.g. "  - Item" or line starts with "- " while inside card
    if (currentBlock && currentBlock.type === 'card' && (rawLine.startsWith('  -') || rawLine.startsWith('    -') || (trimmed.startsWith('- ') && !trimmed.startsWith('- **')))) {
      const subText = trimmed.replace(/^[-*]\s+/, '').trim();
      currentBlock.items.push(subText);
      i++;
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
      i++;
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
      i++;
      continue;
    }

    // Standalone bold line: **Title**
    const standaloneBold = /^\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (standaloneBold && standaloneBold[1].length < 60) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: standaloneBold[1].trim(),
        lead: standaloneBold[2] ? standaloneBold[2].trim() : '',
        items: []
      };
      i++;
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
    i++;
  }

  if (currentBlock) blocks.push(currentBlock);
  return blocks;
}

// Render blocks into HTML with airy typography (line-height: 1.85, tracking: 0.015em)
function renderBlocks(blocks) {
  let html = '<div class="space-y-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-[1.85] tracking-[0.015em]">';

  for (let b of blocks) {
    if (b.type === 'table') {
      html += parseTable(b.lines);
    } else if (b.type === 'section_header') {
      html += `
        <div class="mt-8 mb-4 pt-4 border-t border-slate-200/70 dark:border-slate-800 flex items-center gap-2.5">
          <span class="w-3 h-3 rounded-full bg-blue-500 shrink-0"></span>
          <h4 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white uppercase tracking-wide">
            ${parseInline(b.title)}
          </h4>
        </div>
      `;
    } else if (b.type === 'equation') {
      html += `
        <div class="my-5 p-5 sm:p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60 text-center overflow-x-auto text-slate-900 dark:text-blue-200 font-medium text-sm sm:text-base shadow-xs leading-loose">
          ${b.math}
        </div>
      `;
    } else if (b.type === 'blockquote') {
      html += `
        <div class="my-4 p-5 sm:p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border-l-4 border-indigo-500 shadow-2xs mb-4">
          <div class="italic font-medium text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-[1.85] tracking-[0.015em]">
            “${parseInline(b.text)}”
          </div>
        </div>
      `;
    } else if (b.type === 'card') {
      const isLaw = b.isQuote || b.term.toLowerCase().includes('định lí') || b.term.toLowerCase().includes('định lý') || b.term.toLowerCase().includes('định nghĩa') || b.term.toLowerCase().includes('hệ quả');
      const isImportant = b.term.toLowerCase().includes('lưu ý') || b.term.toLowerCase().includes('chú ý') || b.term.toLowerCase().includes('sai lầm');

      let cardBorder = 'border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50';
      let icon = 'fa-shapes text-blue-500';

      if (isImportant) {
        cardBorder = 'border-amber-300 dark:border-amber-800/80 bg-amber-50/30 dark:bg-amber-950/20';
        icon = 'fa-triangle-exclamation text-amber-500';
      } else if (isLaw) {
        cardBorder = 'border-indigo-200/80 dark:border-indigo-800/80 bg-indigo-50/30 dark:bg-indigo-950/25';
        icon = 'fa-scroll text-indigo-500';
      }

      html += `
        <div class="p-5 sm:p-6 rounded-2xl border ${cardBorder} shadow-xs mb-4">
          <div class="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
            <i class="fa-solid ${icon} text-sm"></i>
            <span class="font-bold text-slate-900 dark:text-white uppercase tracking-wide text-xs sm:text-sm">${parseInline(b.term)}</span>
          </div>
          ${b.isQuote ? `
            <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-850 border-l-4 border-indigo-500 shadow-2xs mb-3">
              <p class="italic font-medium text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-[1.85] tracking-[0.015em]">
                “${parseInline(b.lead)}”
              </p>
            </div>
          ` : b.lead ? `
            <div class="text-slate-600 dark:text-slate-300 leading-[1.85] tracking-[0.015em] mb-2">${parseInline(b.lead)}</div>
          ` : ''}
          ${b.quote ? `
            <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-850 border-l-4 border-indigo-500 shadow-2xs my-3">
              <p class="italic font-medium text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-[1.85] tracking-[0.015em]">
                “${parseInline(b.quote)}”
              </p>
            </div>
          ` : ''}
          ${b.equation ? `
            <div class="my-3 p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-900/60 text-center text-slate-900 dark:text-blue-100 font-medium text-sm sm:text-base leading-loose overflow-x-auto">
              ${b.equation}
            </div>
          ` : ''}
          ${b.items && b.items.length > 0 ? `
            <ul class="mt-3 space-y-2.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm pl-2">
              ${b.items.map(it => `
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-circle text-[6px] text-blue-500 mt-2 shrink-0"></i>
                  <span>${parseInline(it)}</span>
                </li>
              `).join('')}
            </ul>
          ` : ''}
        </div>
      `;
    } else if (b.type === 'bullet_list') {
      html += `
        <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-800 mb-4">
          <ul class="space-y-4 sm:space-y-4.5">
            ${b.items.map(item => `
              <li class="flex items-start gap-3">
                <span class="w-2.5 h-2.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                <div class="leading-[1.85] tracking-[0.015em]">${parseInline(item)}</div>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    } else if (b.type === 'numbered_list') {
      html += `
        <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-800 mb-4">
          <ol class="space-y-4 sm:space-y-4.5">
            ${b.items.map(item => `
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/70 text-blue-600 dark:text-blue-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ${item.num}
                </span>
                <div class="leading-[1.85] tracking-[0.015em]">${parseInline(item.text)}</div>
              </li>
            `).join('')}
          </ol>
        </div>
      `;
    } else if (b.type === 'paragraph') {
      html += `
        <div class="p-5 sm:p-6 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 leading-[1.85] tracking-[0.015em] mb-4">
          ${parseInline(b.lead)}
        </div>
      `;
    }
  }

  html += '</div>';
  return html;
}

// Generate the complete HTML page
function buildHtml() {
  const allLessonsArray = [];
  for (let i = 1; i <= 30; i++) {
    if (lessons[i]) allLessonsArray.push(lessons[i]);
  }

  // Sidebar navigation items grouped by chapter
  let sidebarHtml = '';
  chapters.forEach(ch => {
    sidebarHtml += `
      <div class="mb-5">
        <div class="flex items-center gap-2 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <i class="fa-solid ${ch.icon}"></i>
          <span>${ch.num === 10 ? 'Hoạt động trải nghiệm' : 'Chương ' + ch.num + ': ' + ch.badge}</span>
        </div>
        <div class="mt-1 space-y-1">
    `;

    ch.lessons.forEach(lNum => {
      const l = lessons[lNum];
      if (!l) return;
      const isActivity = l.num >= 28;
      const badgeText = isActivity ? 'Trải nghiệm' : 'Bài ' + l.num;

      sidebarHtml += `
        <a href="#bai-${l.num}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-blue-200 dark:hover:border-blue-800/60 hover:bg-blue-50/70 dark:hover:bg-blue-950/50 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-blue-600 dark:text-blue-400">${badgeText}</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">${ch.num === 10 ? 'Chuyên đề' : 'Chương ' + ch.num}</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition leading-snug">
            ${escapeHtml(l.title)}
          </div>
        </a>
      `;
    });

    sidebarHtml += `
        </div>
      </div>
    `;
  });

  // Main lesson cards
  
  const allExamQuestions = [];
  Object.keys(reviewQuizzes).forEach(k => {
    reviewQuizzes[k].forEach(q => {
      allExamQuestions.push({
        lesson: k,
        ...q
      });
    });
  });

  let mainContentHtml = '';
  allLessonsArray.forEach(lesson => {
    const ch = chapters.find(c => c.num === lesson.chapter) || { badge: lesson.chapterTitle, icon: 'fa-book' };
    const blocks = parseBlocks(lesson.body);
    const renderedBody = renderBlocks(blocks);
    const diagramSvg = diagrams[lesson.num];
    const lessonQuizzes = reviewQuizzes[lesson.num];
    const isActivity = lesson.num >= 28;
    const badgeName = isActivity ? 'Thực hành trải nghiệm' : 'Bài ' + lesson.num;

    mainContentHtml += `
      <!-- Bài ${lesson.num} -->
      <article id="bai-${lesson.num}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition mb-10">
        
        <!-- Header badge & bookmark -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs sm:text-sm shadow-xs shadow-blue-500/20 tracking-wide">
              <i class="fa-solid fa-shapes"></i> ${badgeName}
            </span>
            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60">
              ${escapeHtml(ch.badge)}
            </span>
          </div>
          <button onclick="toggleBookmark('bai-${lesson.num}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>

        <!-- Lesson Title -->
        <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2 mb-6 leading-snug tracking-tight">
          <span class="text-blue-600 dark:text-blue-400">${isActivity ? 'Chuyên đề:' : 'Bài ' + lesson.num + ':'}</span> ${escapeHtml(lesson.title)}
        </h3>

        <!-- Diagram Illustration if available -->
        ${diagramSvg || ''}

        <!-- Lesson Body -->
        <div class="mt-4">
          ${renderedBody}
        </div>

        <!-- Lesson Mini-Quiz Review (3 câu hỏi ôn tập cuối mỗi bài) -->
        ${lessonQuizzes && lessonQuizzes.length > 0 ? `
          <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80">
            <div class="p-5 sm:p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
              <div class="flex items-center justify-between gap-2 mb-4 pb-2 border-b border-blue-200/50 dark:border-blue-800/50">
                <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <i class="fa-solid fa-circle-question"></i> Câu hỏi ôn tập củng cố cuối bài (${lessonQuizzes.length} câu)
                </h4>
                <span class="text-[11px] font-semibold text-slate-400">Chọn đáp án đúng nhất</span>
              </div>
              <div class="space-y-4">
                ${lessonQuizzes.map((qItem, qIdx) => `
                  <div class="quiz-item p-3.5 sm:p-4 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm">
                    <p class="font-bold text-slate-900 dark:text-white mb-2.5">
                      <span class="text-blue-600 dark:text-blue-400">Câu ${qIdx + 1}:</span> ${parseInline(qItem.q)}
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2.5">
                      ${qItem.options.map((opt, oIdx) => {
                        const optLetter = ['A', 'B', 'C', 'D'][oIdx];
                        const isCorrect = oIdx === qItem.ans;
                        const expEscaped = escapeHtml(qItem.exp).replace(/'/g, "\\'");
                        return `
                          <button onclick="checkLessonQuiz(this, ${isCorrect}, '${expEscaped}')" 
                                  class="quiz-btn text-left p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 transition flex items-center gap-2">
                            <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-[10px] text-slate-600 dark:text-slate-300 shrink-0">
                              ${optLetter}
                            </span>
                            <span class="font-medium text-slate-700 dark:text-slate-300">${parseInline(opt)}</span>
                          </button>
                        `;
                      }).join('')}
                    </div>
                    <div class="quiz-feedback hidden p-2.5 rounded-lg text-xs mt-2"></div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        ` : ''}
      </article>
    `;
  });

  // Modal 1: Sổ tay công thức tra cứu nhanh
  const formulaBlocks = parseBlocks(formulaTableText);
  const renderedFormulaTable = renderBlocks(formulaBlocks);

  // Modal 2: Đơn vị & Thuật ngữ cốt lõi
  const termsBlocks = parseBlocks(termsText);
  const renderedTerms = renderBlocks(termsBlocks);

  // Assemble full HTML document matching toan_9 styling
  const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Toán Học 10 (Trọn Bộ 9 Chương & 27 Bài Học SGK Kết Nối Tri Thức • Mô Hình SVG Trực Quan & Trạng Nguyên 45:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            math: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a'
            },
            slate: {
              850: '#151f32',
              950: '#090d16'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }
        }
      }
    };
  </script>

  <!-- Google Fonts & Font Awesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <!-- KaTeX CSS & JS Auto-render -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

  <style>
    .custom-scrollbar::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 9999px;
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #334155;
    }
    .lesson-card {
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .nav-link.active {
      border-color: #3b82f6 !important;
      background-color: rgba(59, 130, 246, 0.12) !important;
      color: #2563eb !important;
    }
    .dark .nav-link.active {
      background-color: rgba(59, 130, 246, 0.2) !important;
      color: #60a5fa !important;
    }
    /* KaTeX equation styling */
    .katex-display {
      margin: 0.75em 0 !important;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 0.25em 0;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen selection:bg-blue-500 selection:text-white">

  <!-- Top Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back Button -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Trang chủ">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <div class="h-5 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-sm shadow-blue-500/30">
            <i class="fa-solid fa-shapes"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight leading-none">Toán Học 10</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold text-[10px] tracking-wide uppercase">Kết Nối Tri Thức</span>
            </div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">Trọn bộ 9 Chương • 27 Bài học & Hoạt động thực hành</p>
          </div>
        </div>
      </div>

      <!-- Action Tools: Search, Formulas, Mistakes, Exam, DarkMode -->
      <div class="flex items-center gap-2 sm:gap-2.5">
        
        <!-- Search Trigger -->
        <button onclick="openModal('modal-search')" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold transition" title="Tìm kiếm bài học & công thức (Ctrl+K)">
          <i class="fa-solid fa-magnifying-glass text-xs"></i>
          <span class="hidden md:inline">Tìm kiếm</span>
          <kbd class="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 rounded border border-slate-300 dark:border-slate-700 shadow-2xs">Ctrl K</kbd>
        </button>

        <!-- Quick Formula Handbook Modal Trigger -->
        <button onclick="openModal('modal-formulas')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 hover:bg-blue-100 dark:hover:bg-blue-900/80 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/80 text-xs font-bold transition">
          <i class="fa-solid fa-book-bookmark text-xs"></i>
          <span class="hidden sm:inline">Sổ tay</span> Công thức
        </button>

        <!-- Key Terms & Mistakes Trigger -->
        <button onclick="openModal('modal-mistakes')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/70 hover:bg-amber-100 dark:hover:bg-amber-900/80 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/80 text-xs font-bold transition">
          <i class="fa-solid fa-triangle-exclamation text-xs"></i>
          <span class="hidden sm:inline">Sai lầm</span> & Thuật ngữ
        </button>

        <!-- Trạng Nguyên Exam Mode 45:00 -->
        <button onclick="openModal('modal-exam')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-sm shadow-blue-500/25 transition">
          <i class="fa-solid fa-stopwatch text-xs"></i>
          <span class="hidden lg:inline">Thi Đấu</span> 45:00
        </button>

        <!-- Dark Mode Toggle -->
        <button id="theme-toggle" class="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Đổi giao diện Sáng/Tối">
          <i id="theme-icon" class="fa-solid fa-moon text-sm"></i>
        </button>

        <!-- Mobile Drawer Toggle -->
        <button onclick="toggleMobileSidebar()" class="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <i class="fa-solid fa-bars text-base"></i>
        </button>

      </div>
    </div>
  </header>

  <!-- Hero Header Section -->
  <section class="relative bg-gradient-to-b from-blue-50/80 via-white to-slate-50 dark:from-slate-850 dark:via-slate-900 dark:to-slate-900 py-10 sm:py-14 border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold mb-4">
          <i class="fa-solid fa-certificate"></i> Chương Trình GDPT 2018 Mới • Bộ SGK Kết Nối Tri Thức Với Cuộc Sống
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Học Liệu Số <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Toán Học 10</span> Chuẩn SGK
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-[1.85] tracking-[0.015em] mb-6">
          Hệ thống hóa toàn bộ kiến thức theo 9 chương, 27 bài học và các hoạt động thực hành trải nghiệm trong hai tập SGK Toán 10. Tích hợp sơ đồ hình học SVG vector trực quan, công thức toán học KaTeX chuẩn mực, quy tắc giải chi tiết và phòng thi Trạng Nguyên 45:00.
        </p>

        <!-- Quick stat badges -->
        <div class="flex flex-wrap items-center gap-3 text-xs font-semibold">
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-2xs">
            <i class="fa-solid fa-layer-group text-blue-500"></i>
            <span>9 Chương Đại số & Hình học</span>
          </div>
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-2xs">
            <i class="fa-solid fa-book-open-reader text-indigo-500"></i>
            <span>27 Bài học + 3 Thực hành</span>
          </div>
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-2xs">
            <i class="fa-solid fa-diagram-project text-sky-500"></i>
            <span>Sơ đồ Vector SVG trực quan</span>
          </div>
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-2xs">
            <i class="fa-solid fa-square-root-variable text-emerald-500"></i>
            <span>100% KaTeX Math</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Layout: 12-Column Grid (4-Col Sidebar Sticky + 8-Col Main Content) -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Sticky Sidebar Navigation (4 cols) -->
      <aside id="sidebar-container" class="lg:col-span-4 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar pr-2 hidden lg:block bg-white dark:bg-slate-850 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
        
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <i class="fa-solid fa-list-ol"></i> Mục lục bài học
          </div>
          <span class="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300">
            27 Bài + 3 Chuyên đề
          </span>
        </div>

        <nav class="space-y-4">
          ${sidebarHtml}
        </nav>
      </aside>

      <!-- Main Content (8 cols) -->
      <section class="lg:col-span-8 min-w-0">
        ${mainContentHtml}
      </section>

    </div>
  </main>

  <!-- Mobile Sidebar Drawer Backdrop -->
  <div id="mobile-backdrop" onclick="toggleMobileSidebar()" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs hidden transition-opacity lg:hidden"></div>

  <!-- Mobile Sidebar Drawer -->
  <aside id="mobile-sidebar" class="fixed top-0 bottom-0 left-0 z-50 w-80 max-w-[85vw] bg-white dark:bg-slate-850 p-6 overflow-y-auto custom-scrollbar transform -translate-x-full transition-transform duration-300 ease-in-out lg:hidden shadow-2xl border-r border-slate-200 dark:border-slate-800">
    <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
      <div class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
          <i class="fa-solid fa-shapes"></i>
        </div>
        <span class="font-extrabold text-sm text-slate-900 dark:text-white">Mục Lục Toán 10</span>
      </div>
      <button onclick="toggleMobileSidebar()" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
        <i class="fa-solid fa-xmark text-base"></i>
      </button>
    </div>
    <nav class="space-y-4">
      ${sidebarHtml}
    </nav>
  </aside>

  <!-- Modal 1: Sổ Tay Tra Cứu Công Thức Nhanh -->
  <div id="modal-formulas" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-850 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col">
      <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold">
            <i class="fa-solid fa-book-bookmark text-sm"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base text-slate-900 dark:text-white">Sổ Tay Công Thức Toán Học 10</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Tra cứu nhanh công thức lượng giác, hình học tọa độ, tổ hợp & xác suất</p>
          </div>
        </div>
        <button onclick="closeModal('modal-formulas')" class="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 text-xs sm:text-sm">
        ${renderedFormulaTable}
      </div>
    </div>
  </div>

  <!-- Modal 2: Thuật Ngữ & Sai Lầm Phổ Biến -->
  <div id="modal-mistakes" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-850 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col">
      <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-300 flex items-center justify-center font-bold">
            <i class="fa-solid fa-triangle-exclamation text-sm"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base text-slate-900 dark:text-white">Sai Lầm Phổ Biến & Thuật Ngữ Cốt Lõi</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Tổng hợp các bẫy đề thi hay gặp và cách tránh mất điểm</p>
          </div>
        </div>
        <button onclick="closeModal('modal-mistakes')" class="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 text-xs sm:text-sm">
        ${renderedTerms}
      </div>
    </div>
  </div>

  <!-- Modal 3: Tìm Kiếm Nhanh (Ctrl+K) -->
  <div id="modal-search" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-20 p-4">
    <div class="bg-white dark:bg-slate-850 rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
        <input id="search-input" type="text" placeholder="Tìm kiếm bài học, công thức lượng giác, elip, tổ hợp..." 
               class="w-full bg-transparent border-0 focus:outline-hidden text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400"
               oninput="handleSearch(this.value)">
        <button onclick="closeModal('modal-search')" class="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs">
          ESC
        </button>
      </div>
      <div id="search-results" class="max-h-80 overflow-y-auto custom-scrollbar p-3 space-y-1 text-xs sm:text-sm">
        <div class="p-4 text-center text-slate-400 text-xs">Nhập từ khóa để tìm kiếm trong các bài học Toán 10...</div>
      </div>
    </div>
  </div>

  <!-- Modal 4: Thi Đấu Trạng Nguyên 45:00 -->
  <div id="modal-exam" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-850 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col">
      <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div class="flex items-center gap-2.5">
          <i class="fa-solid fa-award text-xl text-amber-300"></i>
          <div>
            <h3 class="font-extrabold text-base">Phòng Thi Trạng Nguyên Toán Học 10</h3>
            <p class="text-xs text-blue-100">Thời gian làm bài: 45:00 • 10 Câu hỏi trắc nghiệm chuẩn đề kiểm tra</p>
          </div>
        </div>
        <button onclick="closeModal('modal-exam')" class="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto custom-scrollbar flex-1">
        <!-- Exam Timer & Score Bar -->
        <div class="flex items-center justify-between p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 mb-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
              <i class="fa-solid fa-clock text-lg"></i>
            </div>
            <div>
              <div class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Thời gian còn lại</div>
              <div id="exam-timer" class="font-mono font-black text-xl text-blue-600 dark:text-blue-400">45:00</div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Điểm số hiện tại</div>
            <div id="exam-score" class="font-black text-xl text-emerald-600 dark:text-emerald-400">0 / 10</div>
          </div>
        </div>

        <div id="exam-questions-list" class="space-y-6">
          <!-- Dynamically populated 10 questions -->
        </div>

        <div class="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button onclick="resetExam()" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition">
            <i class="fa-solid fa-rotate-right mr-1.5"></i> Làm lại đề
          </button>
          <button onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 hover:opacity-90 transition">
            <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp bài thi
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-slate-850 border-t border-slate-200/80 dark:border-slate-800 py-10 mt-20 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-2">
      <div class="flex items-center justify-center gap-2 font-bold text-sm text-slate-800 dark:text-slate-200">
        <i class="fa-solid fa-shapes text-blue-600"></i> CodeHub • Học Liệu Số Toán Học 10
      </div>
      <p>Dựa trên nội dung chuẩn Sách giáo khoa Toán 10 (Tập 1 & Tập 2) — Kết nối tri thức với cuộc sống (Chương trình GDPT 2018).</p>
      <p class="text-[11px] text-slate-400 dark:text-slate-500">Toàn bộ công thức được render chuẩn KaTeX • Sơ đồ hình học vector SVG trực quan</p>
    </div>
  </footer>

  <!-- Interactive Scripts (Dark mode, active scroll spy, bookmarks, quiz & exam) -->
  <script>
    // Theme Dark / Light toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon.className = 'fa-solid fa-sun text-sm text-amber-400';
      } else {
        document.documentElement.classList.remove('dark');
        themeIcon.className = 'fa-solid fa-moon text-sm text-slate-500';
      }
    }

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));

    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      applyTheme(isDark);
    });

    // Mobile Sidebar Drawer
    function toggleMobileSidebar() {
      const sidebar = document.getElementById('mobile-sidebar');
      const backdrop = document.getElementById('mobile-backdrop');
      const isHidden = sidebar.classList.contains('-translate-x-full');
      if (isHidden) {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      } else {
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }

    // Modal Control
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('hidden');
        if (id === 'modal-search') {
          setTimeout(() => document.getElementById('search-input')?.focus(), 100);
        } else if (id === 'modal-exam') {
          startExam();
        }
        renderMath();
      }
    }

    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.add('hidden');
    }

    // Close on backdrop or ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('[id^="modal-"]').forEach(m => m.classList.add('hidden'));
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('modal-search');
      }
    });

    // Active Scroll Spy for Sidebar Links
    window.addEventListener('scroll', () => {
      const lessons = document.querySelectorAll('article.lesson-card');
      const scrollPos = window.scrollY + 160;

      lessons.forEach(lesson => {
        const top = lesson.offsetTop;
        const height = lesson.offsetHeight;
        const id = lesson.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    });

    // Bookmark Feature
    function toggleBookmark(lessonId) {
      let bookmarks = JSON.parse(localStorage.getItem('toan10_bookmarks') || '[]');
      const idx = bookmarks.indexOf(lessonId);
      const btn = document.querySelector(\`#\${lessonId} .bookmark-btn i\`);

      if (idx > -1) {
        bookmarks.splice(idx, 1);
        if (btn) btn.className = 'fa-regular fa-bookmark';
      } else {
        bookmarks.push(lessonId);
        if (btn) btn.className = 'fa-solid fa-bookmark text-amber-500';
      }
      localStorage.setItem('toan10_bookmarks', JSON.stringify(bookmarks));
    }

    function loadBookmarks() {
      const bookmarks = JSON.parse(localStorage.getItem('toan10_bookmarks') || '[]');
      bookmarks.forEach(id => {
        const btn = document.querySelector(\`#\${id} .bookmark-btn i\`);
        if (btn) btn.className = 'fa-solid fa-bookmark text-amber-500';
      });
    }

    
    // Lesson Review Quiz Handler (matching toan_9.html)
    function checkLessonQuiz(btn, isCorrect, exp) {
      const parent = btn.closest('.quiz-item') || btn.closest('.p-3\\.5');
      const feedback = parent.querySelector('.quiz-feedback');
      const allBtns = parent.querySelectorAll('.quiz-btn');
      
      allBtns.forEach(b => {
        b.classList.remove('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40');
      });

      if (isCorrect) {
        btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40');
        feedback.className = 'quiz-feedback p-2.5 rounded-lg text-xs mt-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 block';
        feedback.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5"></i><strong>Chính xác!</strong> ' + exp;
      } else {
        btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40');
        feedback.className = 'quiz-feedback p-2.5 rounded-lg text-xs mt-2 bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 block';
        feedback.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-600 mr-1.5"></i><strong>Chưa chính xác:</strong> ' + exp;
      }

      if (typeof renderMathInElement === 'function') {
        renderMathInElement(feedback, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    }

    function checkQuiz(btn, lessonNum, selectedIdx, correctIdx, expText) {
      const parent = btn.parentElement;
      const buttons = parent.querySelectorAll('.quiz-opt');
      const expBox = document.getElementById('quiz-exp-' + lessonNum);

      buttons.forEach((b, idx) => {
        b.disabled = true;
        if (idx === correctIdx) {
          b.className = 'quiz-opt w-full text-left p-3.5 rounded-xl border border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100 font-semibold flex items-start gap-3';
        } else if (idx === selectedIdx) {
          b.className = 'quiz-opt w-full text-left p-3.5 rounded-xl border border-rose-500 bg-rose-50/80 dark:bg-rose-950/60 text-rose-900 dark:text-rose-100 flex items-start gap-3';
        } else {
          b.className = 'quiz-opt w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 text-slate-400 dark:text-slate-500 opacity-60 flex items-start gap-3';
        }
      });

      if (expBox) {
        expBox.classList.remove('hidden');
        if (selectedIdx === correctIdx) {
          expBox.className = 'mt-4 p-4 rounded-xl text-xs sm:text-sm leading-relaxed bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          expBox.innerHTML = '<strong class="font-bold">Chính xác!</strong> ' + expText;
        } else {
          expBox.className = 'mt-4 p-4 rounded-xl text-xs sm:text-sm leading-relaxed bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expBox.innerHTML = '<strong class="font-bold">Chưa đúng.</strong> ' + expText;
        }
        renderMath();
      }
    }

    // Search Database
    const searchData = ${JSON.stringify(allLessonsArray.map(l => ({ num: l.num, title: l.title, ch: l.chapter })))};

    function handleSearch(query) {
      const q = query.trim().toLowerCase();
      const resultsContainer = document.getElementById('search-results');
      if (!q) {
        resultsContainer.innerHTML = '<div class="p-4 text-center text-slate-400 text-xs">Nhập từ khóa để tìm kiếm trong 27 bài học và chuyên đề Toán 10...</div>';
        return;
      }
      const matches = searchData.filter(item => 
        item.title.toLowerCase().includes(q) || 
        ('bài ' + item.num).includes(q) || 
        ('chương ' + item.ch).includes(q)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = '<div class="p-4 text-center text-slate-400 text-xs">Không tìm thấy bài học nào phù hợp với từ khóa "' + escapeHtml(query) + '".</div>';
        return;
      }

      resultsContainer.innerHTML = matches.map(m => \`
        <a href="#bai-\${m.num}" onclick="closeModal('modal-search')" class="block p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 transition border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-bold text-blue-600 dark:text-blue-400">\${m.num >= 28 ? 'Chuyên đề' : 'Bài ' + m.num}</span>
            <span class="text-slate-400 text-[10px]">\${m.ch === 10 ? 'Thực hành' : 'Chương ' + m.ch}</span>
          </div>
          <div class="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">\${escapeHtml(m.title)}</div>
        </a>
      \`).join('');
    }

    // Exam System 45:00
    let examTimeLeft = 45 * 60;
    let examTimerInterval = null;
    let examAnswers = {};

    const examPool = ${JSON.stringify(allExamQuestions)};

    let currentExamQuestions = [];

    function startExam() {
      if (currentExamQuestions.length === 0) {
        // Pick 10 random questions across the 30 lessons/activities
        const shuffled = [...examPool].sort(() => 0.5 - Math.random());
        currentExamQuestions = shuffled.slice(0, 10);
      }
      renderExamQuestions();

      if (!examTimerInterval) {
        examTimerInterval = setInterval(() => {
          if (examTimeLeft <= 0) {
            clearInterval(examTimerInterval);
            submitExam();
          } else {
            examTimeLeft--;
            const m = Math.floor(examTimeLeft / 60);
            const s = examTimeLeft % 60;
            document.getElementById('exam-timer').innerText = 
              (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
          }
        }, 1000);
      }
    }

    function renderExamQuestions() {
      const container = document.getElementById('exam-questions-list');
      container.innerHTML = currentExamQuestions.map((q, idx) => \`
        <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850">
          <div class="flex items-center justify-between mb-2">
            <span class="font-extrabold text-xs text-blue-600 dark:text-blue-400">Câu \${idx + 1} / 10 (\${q.lesson >= 28 ? 'Chuyên đề thực hành' : 'Bài ' + q.lesson})</span>
          </div>
          <p class="font-semibold text-sm text-slate-900 dark:text-white mb-3">\${q.q}</p>
          <div class="space-y-2">
            \${q.options.map((opt, oIdx) => \`
              <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:bg-blue-50/40 dark:hover:bg-blue-950/40 cursor-pointer text-xs sm:text-sm text-slate-800 dark:text-slate-200 transition">
                <input type="radio" name="exam-q-\${idx}" value="\${oIdx}" onchange="examAnswers[\${idx}] = \${oIdx}" class="text-blue-600 focus:ring-blue-500">
                <span>\${opt}</span>
              </label>
            \`).join('')}
          </div>
        </div>
      \`).join('');
      renderMath();
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let score = 0;
      currentExamQuestions.forEach((q, idx) => {
        if (examAnswers[idx] === q.ans) score++;
      });
      document.getElementById('exam-score').innerText = score + ' / 10';
      alert('Bạn đã hoàn thành bài thi Trạng Nguyên Toán Học 10!\\nĐiểm số: ' + score + ' / 10');
    }

    function resetExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimeLeft = 45 * 60;
      examAnswers = {};
      currentExamQuestions = [];
      document.getElementById('exam-timer').innerText = '45:00';
      document.getElementById('exam-score').innerText = '0 / 10';
      startExam();
    }

    // KaTeX Math Rendering Trigger with Retry Polling (ensures all display and inline equations render)
    function renderMath() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\\\[', right: '\\\\]', display: true},
            {left: '\\\\(', right: '\\\\)', display: false}
          ],
          throwOnError: false
        });
      }
    }

    function ensureMathRendered() {
      renderMath();
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (typeof renderMathInElement === 'function') {
          renderMath();
          if (attempts > 5) clearInterval(interval);
        }
        if (attempts > 30) clearInterval(interval);
      }, 200);
    }

    document.addEventListener("DOMContentLoaded", () => {
      loadBookmarks();
      ensureMathRendered();
    });
    window.addEventListener("load", ensureMathRendered);
    setTimeout(ensureMathRendered, 300);
    setTimeout(ensureMathRendered, 800);
    setTimeout(ensureMathRendered, 2000);
  </script>

</body>
</html>
`;

  fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html', fullHtml, 'utf8');
  console.log('Successfully built courses/toan_10.html! Length:', fullHtml.length);
}

buildHtml();
