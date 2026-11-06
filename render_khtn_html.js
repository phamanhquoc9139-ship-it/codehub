const fs = require('fs');
const path = require('path');
const { generateDiagram } = require('./build_all_graphics.js');

const data = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/khtn_6_full_data.json', 'utf8'));

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

// Generate Sidebar TOC items
let sidebarHtml = '';
let curChap = '';
data.lessons.forEach(l => {
  if (l.chapter !== curChap) {
    curChap = l.chapter;
    sidebarHtml += `
      <div class="pt-4 pb-1">
        <div class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3 flex items-center justify-between">
          <span>Chương ${l.chapterNum}</span>
          <span class="text-[10px] bg-emerald-100 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded text-emerald-700 dark:text-emerald-300">${l.chapter.replace(/^Chương\s+[IVXLCDM]+\s+/i, '')}</span>
        </div>
      </div>
    `;
  }
  sidebarHtml += `
    <a href="#lesson-${l.id}" 
       id="toc-lesson-${l.id}" 
       onclick="highlightToc('toc-lesson-${l.id}')"
       class="toc-item flex items-center px-3 py-2 text-sm rounded-xl text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition group">
      <span class="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs flex items-center justify-center font-bold mr-2 group-hover:bg-emerald-500 group-hover:text-white transition">
        ${l.id}
      </span>
      <span class="truncate">${escapeHtml(l.title)}</span>
    </a>
  `;
});

// Generate Lessons HTML
let lessonsHtml = '';
data.lessons.forEach(l => {
  // 1. Figures in this lesson (Original textbook scans)
  let figuresHtml = '';
  if (l.figures && l.figures.length > 0) {
    figuresHtml += '<div class="my-6 grid grid-cols-1 md:grid-cols-' + (l.figures.length > 1 ? '2' : '1') + ' gap-4">';
    l.figures.forEach(fig => {
      figuresHtml += `
        <div class="bg-gray-50 dark:bg-gray-800/80 rounded-2xl p-4 border border-emerald-100 dark:border-emerald-900/50 flex flex-col items-center">
          <div class="relative group cursor-pointer overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-700">
            <img src="../assets/img/khtn6/${fig.file}" alt="${escapeHtml(fig.title)}" class="max-h-72 object-contain mx-auto p-2 group-hover:scale-105 transition duration-300">
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-medium text-xs gap-1.5 backdrop-blur-[1px]">
              <i class="fa-solid fa-magnifying-glass-plus text-base"></i> Bấm để phóng to
            </div>
          </div>
          <div class="mt-3 text-center">
            <span class="font-bold text-sm text-gray-900 dark:text-white block">${escapeHtml(fig.title)}</span>
            <span class="text-xs text-gray-500 dark:text-gray-400 mt-1 block">${escapeHtml(fig.note)}</span>
          </div>
        </div>
      `;
    });
    figuresHtml += '</div>';
  }

  // 2. Custom Graphic Mindmap / Educational SVG diagram
  const customDiagram = generateDiagram(l.id, l.title);

  // 3. Core Text Sections
  let sectionsHtml = '';
  l.sections.forEach(sec => {
    sectionsHtml += `
      <div class="mb-4 bg-white/60 dark:bg-gray-850/60 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
        <h4 class="font-bold text-gray-900 dark:text-emerald-300 text-sm flex items-center gap-2 mb-1.5">
          <i class="fa-solid fa-angle-right text-emerald-500"></i>
          ${escapeHtml(sec.heading)}
        </h4>
        <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          ${escapeHtml(sec.text)}
        </p>
      </div>
    `;
  });

  // 4. Quick Quizzes
  let quizzesHtml = '';
  if (l.quizzes && l.quizzes.length > 0) {
    quizzesHtml += `
      <div class="mt-6 pt-5 border-t border-dashed border-gray-200 dark:border-gray-700">
        <div class="flex items-center gap-2 mb-4">
          <span class="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs">
            <i class="fa-solid fa-circle-question"></i>
          </span>
          <h4 class="font-bold text-gray-900 dark:text-white text-sm">Câu hỏi củng cố nhanh:</h4>
        </div>
        <div class="space-y-4">
    `;
    l.quizzes.forEach((q, qIdx) => {
      quizzesHtml += `
        <div class="bg-gray-50 dark:bg-gray-800/60 p-4 rounded-xl border border-gray-100 dark:border-gray-700" id="quiz-block-${l.id}-${qIdx}">
          <p class="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">
            <span class="font-bold text-emerald-600 dark:text-emerald-400">Câu ${qIdx + 1}:</span> ${escapeHtml(q.q)}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      `;
      q.options.forEach((opt, optIdx) => {
        const letters = ['A', 'B', 'C', 'D'];
        quizzesHtml += `
          <button type="button" 
                  onclick="checkLessonQuiz(${l.id}, ${qIdx}, ${optIdx}, ${q.ans})" 
                  id="opt-${l.id}-${qIdx}-${optIdx}"
                  class="text-left px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 transition flex items-start gap-2 bg-white dark:bg-gray-800">
            <span class="font-bold text-gray-500 dark:text-gray-400 min-w-[16px]">${letters[optIdx]}.</span>
            <span class="text-gray-700 dark:text-gray-300">${escapeHtml(opt)}</span>
          </button>
        `;
      });
      quizzesHtml += `
          </div>
          <div id="exp-${l.id}-${qIdx}" class="hidden mt-3 p-3 rounded-lg text-xs leading-relaxed"></div>
        </div>
      `;
    });
    quizzesHtml += `
        </div>
      </div>
    `;
  }

  lessonsHtml += `
    <article id="lesson-${l.id}" class="lesson-card bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700/80 mb-8 transition hover:shadow-md scroll-mt-24">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            Bài ${l.id}
          </span>
          <span class="text-xs text-gray-500 dark:text-gray-400">
            ${escapeHtml(l.chapter)}
          </span>
        </div>
        <span class="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-lg">
          ${escapeHtml(l.pages)}
        </span>
      </div>

      <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Bài ${l.id}. ${escapeHtml(l.title)}
      </h3>

      ${customDiagram}

      ${figuresHtml}

      <div class="space-y-3">
        ${sectionsHtml}
      </div>

      ${quizzesHtml}
    </article>
  `;
});

// Render All Figures Gallery
let galleryHtml = '';
data.allFigures.forEach(fig => {
  galleryHtml += `
    <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between">
      <div>
        <div class="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 mb-3">
          <img src="../assets/img/khtn6/${fig.file}" alt="${escapeHtml(fig.title)}" class="max-h-56 object-contain mx-auto p-2 group-hover:scale-105 transition duration-300">
        </div>
        <div class="flex items-center justify-between text-xs mb-1.5">
          <span class="font-bold text-emerald-600 dark:text-emerald-400">${escapeHtml(fig.sgk)}</span>
          <a href="#lesson-${fig.lessonId}" class="text-blue-600 dark:text-blue-400 hover:underline">Bài ${fig.lessonId} &rarr;</a>
        </div>
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-2">${escapeHtml(fig.title)}</h4>
        <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">${escapeHtml(fig.desc)}</p>
      </div>
    </div>
  `;
});

// Render Formulas Table (Table 2)
let formulasRows = '';
data.tables.formulas.forEach((row, idx) => {
  formulasRows += `
    <tr class="border-b border-gray-100 dark:border-gray-800 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 transition">
      <td class="py-3 px-4 font-semibold text-gray-900 dark:text-white text-sm">${escapeHtml(row.topic)}</td>
      <td class="py-3 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm bg-emerald-50/30 dark:bg-emerald-950/30 rounded-lg">${escapeHtml(row.formula)}</td>
      <td class="py-3 px-4 text-xs text-gray-600 dark:text-gray-300">${escapeHtml(row.note)}</td>
    </tr>
  `;
});

// Render Concepts Table (Table 3)
let conceptsRows = '';
data.tables.concepts.forEach((row, idx) => {
  conceptsRows += `
    <tr class="border-b border-gray-100 dark:border-gray-800 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition">
      <td class="py-3 px-4 font-bold text-indigo-700 dark:text-indigo-400 text-sm min-w-[160px]">${escapeHtml(row.pair)}</td>
      <td class="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(row.diff)}</td>
    </tr>
  `;
});

// Render Planets Table (Table 4)
let planetsRows = '';
data.tables.planets.forEach((row, idx) => {
  planetsRows += `
    <tr class="border-b border-gray-100 dark:border-gray-800 hover:bg-purple-50/40 dark:hover:bg-purple-950/20 transition">
      <td class="py-3 px-4 font-bold text-purple-700 dark:text-purple-400 text-sm flex items-center gap-2">
        <span class="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 flex items-center justify-center text-xs font-bold">${idx + 1}</span>
        ${escapeHtml(row.name)}
      </td>
      <td class="py-3 px-4 text-sm font-semibold text-gray-800 dark:text-gray-200 font-mono">${escapeHtml(row.au)} AU</td>
      <td class="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">${escapeHtml(row.rotationDay)} ngày</td>
      <td class="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 font-medium">${escapeHtml(row.orbitDay)} ngày</td>
    </tr>
  `;
});

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/partial_components.json', JSON.stringify({
  sidebarHtml,
  lessonsHtml,
  galleryHtml,
  formulasRows,
  conceptsRows,
  planetsRows
}), 'utf8');

console.log('Successfully re-rendered partial_components.json with diagrams for all 55 lessons!');
