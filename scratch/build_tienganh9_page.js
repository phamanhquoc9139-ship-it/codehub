// build_tienganh9_page.js
// Master HTML Builder for Tiếng Anh 9 (Global Success) - Sách học sinh
// Generates: courses/tienganh_9.html and courses/english_9.html (synchronized)

const fs = require('fs');
const path = require('path');

const { theme1And2Data } = require('./tienganh9_data_p1.js');
const {
  theme3And4Data,
  fastSummaryMatrix,
  phonicsMatrix,
  communicativeFunctions,
  skillsFramework
} = require('./tienganh9_data_p2.js');
const { getMindmapSVG } = require('./tienganh9_mindmaps.js');
const { examQuestions } = require('./tienganh9_exam.js');

const allLessons = [...theme1And2Data, ...theme3And4Data];

// Collect all vocabulary words across all units for Glossary Modal
const allVocabWords = [];
allLessons.forEach(l => {
  if (l.vocab) {
    l.vocab.forEach(v => {
      allVocabWords.push({
        ...v,
        unit: l.unit,
        unitTitle: l.title,
        theme: l.theme
      });
    });
  }
});

function renderVocabBadge(v) {
  const safeWord = (v.word || '').replace(/'/g, "\\'");
  return `
    <div class="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between gap-2 shadow-sm hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2">
        <div>
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="font-black text-slate-900 dark:text-white text-xs sm:text-sm tracking-tight">${v.word}</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 font-mono font-bold">${v.ipa}</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 italic">${v.type}</span>
          </div>
          <div class="text-xs text-sky-800 dark:text-sky-200 font-bold mt-1.5">${v.meaning}</div>
        </div>
        <button onclick="speakWord('${safeWord}')" title="Nghe phát âm chuẩn (US)" class="w-8 h-8 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-300 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 shadow-sm active:scale-95">
          <i class="fa-solid fa-volume-high text-xs"></i>
        </button>
      </div>
      <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-1.5 border-t border-slate-100 dark:border-slate-800/80 leading-relaxed">
        &ldquo;${v.ex}&rdquo;
      </div>
    </div>
  `;
}

function renderLessonHTML(lesson, index) {
  const isReview = lesson.id.startsWith('review-');
  const unitId = lesson.id;
  
  // Theme identification
  let themeNum = 1;
  if (['unit-4', 'unit-5', 'unit-6', 'review-2'].includes(unitId)) themeNum = 2;
  else if (['unit-7', 'unit-8', 'unit-9', 'review-3'].includes(unitId)) themeNum = 3;
  else if (['unit-10', 'unit-11', 'unit-12', 'review-4'].includes(unitId)) themeNum = 4;

  let themeBadgeBg = "bg-sky-600";
  let themeBorder = "border-sky-200 dark:border-sky-900/60";
  let themeText = "text-sky-600 dark:text-sky-400";
  let themeBgSoft = "bg-sky-50/50 dark:bg-sky-950/20";
  let themeIcon = "fa-people-roof";

  if (themeNum === 2) {
    themeBadgeBg = "bg-rose-600";
    themeBorder = "border-rose-200 dark:border-rose-900/60";
    themeText = "text-rose-600 dark:text-rose-400";
    themeBgSoft = "bg-rose-50/50 dark:bg-rose-950/20";
    themeIcon = "fa-landmark";
  } else if (themeNum === 3) {
    themeBadgeBg = "bg-emerald-600";
    themeBorder = "border-emerald-200 dark:border-emerald-900/60";
    themeText = "text-emerald-600 dark:text-emerald-400";
    themeBgSoft = "bg-emerald-50/50 dark:bg-emerald-950/20";
    themeIcon = "fa-earth-americas";
  } else if (themeNum === 4) {
    themeBadgeBg = "bg-indigo-600";
    themeBorder = "border-indigo-200 dark:border-indigo-900/60";
    themeText = "text-indigo-600 dark:text-indigo-400";
    themeBgSoft = "bg-indigo-50/50 dark:bg-indigo-950/20";
    themeIcon = "fa-rocket";
  }

  const mindmapSVG = getMindmapSVG(unitId);

  return `
    <article id="${unitId}" class="lesson-section mb-14 p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border ${themeBorder} shadow-sm hover:shadow-md transition">
      <!-- Unit Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="px-2.5 py-0.5 rounded-full ${themeBadgeBg} text-white text-[11px] font-black tracking-wider uppercase flex items-center gap-1.5">
              <i class="fa-solid ${themeIcon}"></i>
              ${lesson.unit}
            </span>
            <span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">${lesson.theme}</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">${lesson.title}</h2>
        </div>
        <div class="text-xs font-semibold px-3 py-1.5 rounded-xl ${themeBgSoft} ${themeText} self-start sm:self-auto border border-current/20">
          <i class="fa-solid fa-bullseye mr-1"></i>
          Trọng tâm SGK
        </div>
      </div>

      <!-- Quick Focus Description -->
      <div class="mt-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2.5">
        <i class="fa-solid fa-compass ${themeText} mt-1 text-sm"></i>
        <div>
          <strong class="font-bold text-slate-800 dark:text-slate-200">Nội dung cốt lõi:</strong> ${lesson.focus}
        </div>
      </div>

      <!-- CONCEPT MINDMAP VECTOR -->
      <div class="mt-6 mb-7">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <i class="fa-solid fa-sitemap ${themeText}"></i>
            Sơ đồ Tư duy Khái niệm (Concept Mindmap)
          </span>
          <span class="text-[11px] font-semibold text-slate-400">Bản vẽ Vector SVG độc quyền</span>
        </div>
        <div class="overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800 p-2 sm:p-3 shadow-inner">
          ${mindmapSVG}
        </div>
      </div>

      <!-- 1. VOCABULARY SECTION -->
      <div class="mt-7">
        <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white mb-3.5 flex items-center justify-between">
          <span class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg ${themeBadgeBg} text-white flex items-center justify-center text-xs">
              <i class="fa-solid fa-book-bookmark"></i>
            </span>
            1. Từ vựng trọng tâm & Ngữ âm chuẩn (Vocabulary & Pronunciation Audio)
          </span>
          <span class="text-xs font-semibold text-slate-400 font-normal">Nhấn <i class="fa-solid fa-volume-high text-sky-500 mx-0.5"></i> để nghe</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${(lesson.vocab || []).map(v => renderVocabBadge(v)).join('')}
        </div>
      </div>

      <!-- 2. PRONUNCIATION SECTION -->
      ${lesson.pronunciation ? `
        <div class="mt-7 p-4 sm:p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/60">
          <h3 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200 mb-2 flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs">
              <i class="fa-solid fa-microphone-lines"></i>
            </span>
            2. Ngữ âm & Phát âm (Pronunciation): ${lesson.pronunciation.focus}
          </h3>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed mb-3">
            ${lesson.pronunciation.guide}
          </p>
          <div class="flex flex-wrap gap-2 pt-2 border-t border-amber-200/60 dark:border-amber-900/40">
            ${(lesson.pronunciation.examples || []).map(ex => `
              <span class="text-xs px-2.5 py-1 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 font-bold flex items-center gap-1.5">
                <span class="font-mono">${ex.word}</span>
                <span class="text-[10px] text-slate-400 font-normal">${ex.ipa}</span>
                <span class="text-[10px] text-amber-600 dark:text-amber-400 font-medium">(${ex.note})</span>
              </span>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 3. GRAMMAR SECTION -->
      <div class="mt-7">
        <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <span class="w-6 h-6 rounded-lg ${themeBadgeBg} text-white flex items-center justify-center text-xs">
            <i class="fa-solid fa-code-branch"></i>
          </span>
          3. Ngữ pháp & Cấu trúc (Grammar): ${lesson.grammar.topic}
        </h3>
        <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            ${(lesson.grammar.rules || []).map(r => `
              <li class="flex items-start gap-2 leading-relaxed">
                <i class="fa-solid fa-circle-check ${themeText} mt-1 text-xs shrink-0"></i>
                <span>${r}</span>
              </li>
            `).join('')}
          </ul>
          ${lesson.grammar.examples && lesson.grammar.examples.length > 0 ? `
            <div class="pt-3 border-t border-slate-200/60 dark:border-slate-800">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">Ví dụ mẫu chuẩn SGK:</span>
              <div class="space-y-1.5">
                ${lesson.grammar.examples.map(ex => `
                  <div class="text-xs sm:text-sm font-mono text-sky-800 dark:text-sky-300 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
                    &bull; ${ex}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- 4. EVERYDAY COMMUNICATION -->
      ${lesson.communication ? `
        <div class="mt-7">
          <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs">
              <i class="fa-solid fa-comments"></i>
            </span>
            4. Giao tiếp hàng ngày (Communication): ${lesson.communication.function}
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${(lesson.communication.phrases || []).map(p => `
              <div class="p-3 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/60">
                <div class="font-bold text-xs sm:text-sm text-emerald-900 dark:text-emerald-200">${p.en}</div>
                <div class="text-xs text-slate-600 dark:text-slate-400 mt-1 italic">${p.vi}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 5. INTEGRATED SKILLS & PROJECT -->
      <div class="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Skills -->
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
          <h4 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-layer-group ${themeText}"></i>
            5. Kĩ năng tích hợp (Skills 1 & 2)
          </h4>
          <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <li class="flex items-start gap-2">
              <span class="px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold shrink-0 text-[10px]">Đọc</span>
              <span>${lesson.skills.reading}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold shrink-0 text-[10px]">Nghe</span>
              <span>${lesson.skills.listening}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold shrink-0 text-[10px]">Nói</span>
              <span>${lesson.skills.speaking}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold shrink-0 text-[10px]">Viết</span>
              <span>${lesson.skills.writing}</span>
            </li>
          </ul>
        </div>

        <!-- Project -->
        <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/60 flex flex-col justify-between">
          <div>
            <h4 class="text-xs sm:text-sm font-black text-indigo-950 dark:text-indigo-200 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-diagram-project text-indigo-600 dark:text-indigo-400"></i>
              6. Dự án thực hành (Project): ${lesson.project ? lesson.project.title : 'Review Task'}
            </h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              ${lesson.project ? lesson.project.task : 'Hoàn thành các bài tập ôn tập tổng hợp 4 kĩ năng trong sách giáo khoa.'}
            </p>
          </div>
          <div class="mt-3 pt-2 border-t border-indigo-200/60 dark:border-indigo-900/40 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
            <i class="fa-solid fa-award"></i>
            Phát triển năng lực giao tiếp & làm việc nhóm
          </div>
        </div>
      </div>

      <!-- 6. MINI-QUIZ SECTION -->
      <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
        <h4 class="text-sm font-black text-slate-900 dark:text-white mb-3.5 flex items-center gap-2">
          <span class="w-6 h-6 rounded-lg bg-rose-500 text-white flex items-center justify-center text-xs">
            <i class="fa-solid fa-circle-question"></i>
          </span>
          Mini-Quiz Củng Cố Kiến Thức (${lesson.unit})
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          ${(lesson.quiz || []).map((qItem, qIdx) => `
            <div class="quiz-item p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between" id="quiz-${unitId}-${qIdx}">
              <div>
                <p class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mb-2.5 flex items-start gap-2">
                  <span class="w-5 h-5 rounded-md ${themeBadgeBg} text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">${qIdx + 1}</span>
                  <span>${qItem.q}</span>
                </p>
                <div class="space-y-1.5 pl-7">
                  ${qItem.options.map((opt, optIdx) => `
                    <label class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 p-2 rounded-xl hover:bg-white dark:hover:bg-slate-900 cursor-pointer transition border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                      <input type="radio" name="q-${unitId}-${qIdx}" value="${optIdx}" class="text-sky-600 focus:ring-sky-500">
                      <span>${opt}</span>
                    </label>
                  `).join('')}
                </div>
              </div>
              <div class="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <button onclick="checkUnitQuiz('${unitId}', ${qIdx}, ${qItem.answer}, '${qItem.explain.replace(/'/g, "\\'")}')" class="px-3 py-1 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition active:scale-95 shadow-sm">
                  Kiểm tra
                </button>
                <span id="quiz-result-${unitId}-${qIdx}" class="text-xs font-bold hidden"></span>
              </div>
              <div id="quiz-explain-${unitId}-${qIdx}" class="mt-2 text-[11px] p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hidden"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </article>
  `;
}

console.log('Compiling Tiếng Anh 9 (Global Success)...');

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Anh 9 (Global Success - GDPT 2018: 4 Themes • 12 Units • 4 Reviews • Tra Từ Audio • Đấu Trường Trạng Nguyên 60:00) | CodeHub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          }
        }
      }
    }
  </script>

  <style>
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen antialiased selection:bg-sky-500 selection:text-white">

  <!-- TOP HEADER & NAVIGATION -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Logo & Breadcrumbs -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-graduation-cap text-base"></i>
          </div>
          <span class="font-black text-lg text-slate-900 dark:text-white tracking-tight hidden sm:inline">CodeHub</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <a href="../index.html#grade-9" class="text-xs font-bold text-slate-500 hover:text-sky-600 transition">Lớp 9</a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <span class="text-xs font-black text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/80 px-2.5 py-1 rounded-lg border border-sky-200/60 dark:border-sky-900/60">
          Tiếng Anh 9
        </span>
      </div>

      <!-- Right Action Tools -->
      <div class="flex items-center gap-2 sm:gap-2.5">
        <!-- Glossary Modal Button -->
        <button onclick="openGlossaryModal()" class="px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 hover:bg-sky-100 text-xs font-bold transition flex items-center gap-1.5 active:scale-95 shadow-sm">
          <i class="fa-solid fa-spell-check text-sky-500"></i>
          <span class="hidden md:inline">Tra Từ Vựng (${allVocabWords.length})</span>
          <span class="md:hidden">Tra Từ</span>
        </button>

        <!-- Handbook Modal Button -->
        <button onclick="openHandbookModal()" class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 text-xs font-bold transition flex items-center gap-1.5 active:scale-95 shadow-sm">
          <i class="fa-solid fa-book-open text-emerald-500"></i>
          <span class="hidden md:inline">Sổ Tay Cốt Lõi</span>
          <span class="md:hidden">Sổ Tay</span>
        </button>

        <!-- Exam Button -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white text-xs font-black shadow-sm transition active:scale-95 flex items-center gap-1.5">
          <i class="fa-solid fa-crown text-yellow-200"></i>
          <span class="hidden md:inline">Trạng Nguyên (60:00)</span>
          <span class="md:hidden">Thi 60p</span>
        </button>

        <!-- Dark/Light Mode Toggle -->
        <button id="theme-toggle" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition text-sm" title="Chuyển chế độ Sáng/Tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- HERO BANNER -->
  <section class="relative pt-12 pb-16 overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-slate-50 dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 text-xs font-black tracking-wider uppercase mb-4 border border-sky-300/60 dark:border-sky-800">
          <i class="fa-solid fa-flag-checkered text-sky-600"></i>
          Chương Trình GDPT 2018 &bull; Global Success (Tập 1 & Tập 2)
        </div>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Tiếng Anh 9 &mdash; <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-rose-600">Global Success</span>
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          Hệ thống hóa toàn bộ kiến thức cốt lõi 12 Units và 4 bài Review theo chuẩn SGK Tiếng Anh 9. Tích hợp tra từ vựng kèm phát âm Audio chuẩn quốc tế, 16 bản vẽ Vector SVG độc quyền và Đấu trường Trạng Nguyên 60:00.
        </p>

        <!-- 4 Quick Stats -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-sky-600 dark:text-sky-400">12</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase">Units Chuẩn SGK</div>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">4</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase">Themes & Reviews</div>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">16</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase">Sơ đồ Vector SVG</div>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">${allVocabWords.length}+</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase">Từ Vựng Có Audio</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAM MAP / THEMES OVERVIEW -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
      <h2 class="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <i class="fa-solid fa-map-location-dot text-sky-600"></i>
        Bản Đồ Chương Trình Tiếng Anh 9 (4 Chủ Điểm Lớn)
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Theme 1 -->
        <div class="p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900/60">
          <div class="flex items-center gap-2 mb-2 text-sky-700 dark:text-sky-300 font-black text-xs uppercase tracking-wider">
            <i class="fa-solid fa-people-roof"></i>
            Theme 1: Our Communities
          </div>
          <ul class="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
            <li><a href="#unit-1" class="hover:text-sky-600 transition">Unit 1: Local Community</a></li>
            <li><a href="#unit-2" class="hover:text-sky-600 transition">Unit 2: City Life</a></li>
            <li><a href="#unit-3" class="hover:text-sky-600 transition">Unit 3: Healthy Living</a></li>
            <li><a href="#review-1" class="hover:text-sky-600 font-bold transition">Review 1 (Units 1–3)</a></li>
          </ul>
        </div>

        <!-- Theme 2 -->
        <div class="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60">
          <div class="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-300 font-black text-xs uppercase tracking-wider">
            <i class="fa-solid fa-landmark"></i>
            Theme 2: Our Heritage
          </div>
          <ul class="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
            <li><a href="#unit-4" class="hover:text-rose-600 transition">Unit 4: Remembering Past</a></li>
            <li><a href="#unit-5" class="hover:text-rose-600 transition">Unit 5: Our Experiences</a></li>
            <li><a href="#unit-6" class="hover:text-rose-600 transition">Unit 6: Vietnamese Lifestyle</a></li>
            <li><a href="#review-2" class="hover:text-rose-600 font-bold transition">Review 2 (Units 4–6)</a></li>
          </ul>
        </div>

        <!-- Theme 3 -->
        <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60">
          <div class="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-300 font-black text-xs uppercase tracking-wider">
            <i class="fa-solid fa-earth-americas"></i>
            Theme 3: Our World
          </div>
          <ul class="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
            <li><a href="#unit-7" class="hover:text-emerald-600 transition">Unit 7: Natural Wonders</a></li>
            <li><a href="#unit-8" class="hover:text-emerald-600 transition">Unit 8: Tourism</a></li>
            <li><a href="#unit-9" class="hover:text-emerald-600 transition">Unit 9: World Englishes</a></li>
            <li><a href="#review-3" class="hover:text-emerald-600 font-bold transition">Review 3 (Units 7–9)</a></li>
          </ul>
        </div>

        <!-- Theme 4 -->
        <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60">
          <div class="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-black text-xs uppercase tracking-wider">
            <i class="fa-solid fa-rocket"></i>
            Theme 4: Visions of Future
          </div>
          <ul class="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
            <li><a href="#unit-10" class="hover:text-indigo-600 transition">Unit 10: Planet Earth</a></li>
            <li><a href="#unit-11" class="hover:text-indigo-600 transition">Unit 11: Electronic Devices</a></li>
            <li><a href="#unit-12" class="hover:text-indigo-600 transition">Unit 12: Career Choices</a></li>
            <li><a href="#review-4" class="hover:text-indigo-600 font-bold transition">Review 4 (Units 10–12)</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- MAIN TWO-COLUMN CONTENT AREA -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- STICKY LEFT SIDEBAR -->
      <aside class="lg:col-span-1 hidden lg:block">
        <div class="sticky top-24 space-y-4">
          <div class="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm max-h-[calc(100vh-130px)] overflow-y-auto">
            <div class="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 px-2">
              Mục lục 16 Bài học
            </div>
            <nav class="space-y-1 text-xs font-bold">
              ${allLessons.map(l => {
                let bulletColor = "bg-sky-500";
                if (['unit-4', 'unit-5', 'unit-6', 'review-2'].includes(l.id)) bulletColor = "bg-rose-500";
                else if (['unit-7', 'unit-8', 'unit-9', 'review-3'].includes(l.id)) bulletColor = "bg-emerald-500";
                else if (['unit-10', 'unit-11', 'unit-12', 'review-4'].includes(l.id)) bulletColor = "bg-indigo-500";
                
                return `
                  <a href="#${l.id}" class="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition group">
                    <span class="w-2 h-2 rounded-full ${bulletColor} group-hover:scale-125 transition shrink-0"></span>
                    <span class="truncate">${l.unit}: ${l.title}</span>
                  </a>
                `;
              }).join('')}
            </nav>

            <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
              <button onclick="openExamModal()" class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 text-white font-black text-xs text-center shadow transition active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-solid fa-crown text-yellow-200"></i>
                Thi Trạng Nguyên (60p)
              </button>
            </div>
          </div>
        </div>
      </aside>

      <!-- RIGHT LESSON ARTICLES -->
      <section class="lg:col-span-3">
        ${allLessons.map((lesson, idx) => renderLessonHTML(lesson, idx)).join('')}
      </section>
    </div>
  </main>

  <!-- ======================================================== -->
  <!-- MODAL 1: GLOSSARY MODAL (TRA CỨU TỪ VỰNG TOÀN KHÓA HỌC) -->
  <!-- ======================================================== -->
  <div id="glossaryModal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
      
      <!-- Modal Header -->
      <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
        <div>
          <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <i class="fa-solid fa-spell-check text-sky-600"></i>
            Tra Cứu Từ Vựng Tiếng Anh 9 (Global Success)
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Tổng hợp ${allVocabWords.length} mục từ chuẩn SGK kèm phiên âm IPA & Audio phát âm US.</p>
        </div>
        <button onclick="closeGlossaryModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark text-base"></i>
        </button>
      </div>

      <!-- Search Input -->
      <div class="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-100 dark:border-slate-800">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
          <input type="text" id="glossarySearch" placeholder="Nhập từ vựng, phiên âm hoặc nghĩa tiếng Việt để tìm..." oninput="filterGlossary()" class="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500">
        </div>
      </div>

      <!-- Word List Viewport -->
      <div class="p-5 overflow-y-auto flex-1 max-h-[55vh]" id="glossaryList">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="glossaryGrid">
          ${allVocabWords.map(v => renderVocabBadge(v)).join('')}
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
        <span>Hiển thị: <strong id="glossaryCount" class="text-sky-600 font-bold">${allVocabWords.length}</strong> từ vựng</span>
        <button onclick="closeGlossaryModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold transition">
          Đóng
        </button>
      </div>
    </div>
  </div>

  <!-- ======================================================== -->
  <!-- MODAL 2: HANDBOOK MODAL (SỔ TAY CỐT LÕI - FAST MATRIX)    -->
  <!-- ======================================================== -->
  <div id="handbookModal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      
      <!-- Modal Header -->
      <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
        <div>
          <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <i class="fa-solid fa-book-open text-emerald-600"></i>
            Sổ Tay Cốt Lõi: Ngữ Pháp, Ngữ Âm & 12 Mẫu Giao Tiếp
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Hệ thống tra cứu nhanh toàn diện SGK Tiếng Anh 9 (Global Success)</p>
        </div>
        <button onclick="closeHandbookModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark text-base"></i>
        </button>
      </div>

      <!-- Handbook Tabs -->
      <div class="flex items-center gap-2 px-6 pt-3 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 text-xs font-bold">
        <button onclick="switchHandbookTab('tab-grammar')" id="btn-tab-grammar" class="px-4 py-2.5 border-b-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 transition">
          Hệ Thống Ngữ Pháp (14 Cấu Trúc)
        </button>
        <button onclick="switchHandbookTab('tab-phonics')" id="btn-tab-phonics" class="px-4 py-2.5 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white transition">
          Bản Đồ Ngữ Âm (12 Units)
        </button>
        <button onclick="switchHandbookTab('tab-comm')" id="btn-tab-comm" class="px-4 py-2.5 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white transition">
          12 Mẫu Giao Tiếp
        </button>
        <button onclick="switchHandbookTab('tab-skills')" id="btn-tab-skills" class="px-4 py-2.5 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white transition">
          Khung 4 Kĩ Năng
        </button>
      </div>

      <!-- Handbook Content Body -->
      <div class="p-6 overflow-y-auto flex-1 max-h-[60vh]">
        <!-- TAB 1: GRAMMAR MATRIX -->
        <div id="tab-grammar" class="space-y-3">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                  <th class="p-3 rounded-l-xl">Cấu Trúc</th>
                  <th class="p-3">Ý nghĩa & Chức năng</th>
                  <th class="p-3">Công thức mẫu</th>
                  <th class="p-3 rounded-r-xl">Ví dụ SGK</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                ${fastSummaryMatrix.map(row => `
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                    <td class="p-3 font-bold text-sky-700 dark:text-sky-300 whitespace-nowrap">${row.structure}</td>
                    <td class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed">${row.functionVi}</td>
                    <td class="p-3 font-mono text-[11px] text-slate-800 dark:text-slate-200 bg-slate-50/50 dark:bg-slate-950/40">${row.formula}</td>
                    <td class="p-3 italic text-slate-500 dark:text-slate-400 font-mono text-[11px]">${row.example}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- TAB 2: PHONICS MATRIX -->
        <div id="tab-phonics" class="hidden space-y-3">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${phonicsMatrix.map(p => `
              <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="font-black text-sky-600 dark:text-sky-400 text-xs">${p.unit}</span>
                  <span class="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-[10px] font-bold font-mono">${p.focus}</span>
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${p.rule}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- TAB 3: COMMUNICATIVE FUNCTIONS -->
        <div id="tab-comm" class="hidden space-y-3">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${communicativeFunctions.map(c => `
              <div class="p-3.5 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/60">
                <div class="font-black text-emerald-800 dark:text-emerald-300 text-xs mb-2">Unit ${c.unit}: ${c.title}</div>
                <div class="space-y-1.5 text-xs">
                  <div class="flex items-start gap-1.5">
                    <span class="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 font-bold text-[10px] shrink-0">Hỏi</span>
                    <span class="font-mono text-slate-700 dark:text-slate-300">${c.asking}</span>
                  </div>
                  <div class="flex items-start gap-1.5">
                    <span class="px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 font-bold text-[10px] shrink-0">Đáp</span>
                    <span class="font-mono text-slate-700 dark:text-slate-300">${c.responding}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- TAB 4: SKILLS FRAMEWORK -->
        <div id="tab-skills" class="hidden space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900">
              <h4 class="font-black text-sky-800 dark:text-sky-300 text-xs uppercase mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-headphones"></i> Kĩ năng Nghe (Listening)
              </h4>
              <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                ${skillsFramework.listening.map(item => `<li>&bull; ${item}</li>`).join('')}
              </ul>
            </div>

            <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900">
              <h4 class="font-black text-amber-800 dark:text-amber-300 text-xs uppercase mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-microphone"></i> Kĩ năng Nói (Speaking)
              </h4>
              <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                ${skillsFramework.speaking.map(item => `<li>&bull; ${item}</li>`).join('')}
              </ul>
            </div>

            <div class="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900">
              <h4 class="font-black text-emerald-800 dark:text-emerald-300 text-xs uppercase mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-book-open-reader"></i> Kĩ năng Đọc (Reading)
              </h4>
              <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                ${skillsFramework.reading.map(item => `<li>&bull; ${item}</li>`).join('')}
              </ul>
            </div>

            <div class="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900">
              <h4 class="font-black text-rose-800 dark:text-rose-300 text-xs uppercase mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-pen-fancy"></i> Kĩ năng Viết (Writing)
              </h4>
              <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                ${skillsFramework.writing.map(item => `<li>&bull; ${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ======================================================== -->
  <!-- MODAL 3: EXAM MODAL (ĐẤU TRƯỜNG TRẠNG NGUYÊN 60:00)      -->
  <!-- ======================================================== -->
  <div id="examModal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      
      <!-- Exam Header with Timer -->
      <div class="p-5 sm:p-6 bg-gradient-to-r from-amber-500 via-rose-600 to-indigo-700 text-white flex items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-black uppercase tracking-wider mb-1">
            <i class="fa-solid fa-crown text-yellow-300"></i>
            Đấu Trường Trạng Nguyên Tiếng Anh 9
          </div>
          <h3 class="text-lg sm:text-xl font-black tracking-tight">Đề Thi Tổng Hợp Luyện Thi Vào Lớp 10 (25 Câu)</h3>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3.5 py-1.5 rounded-2xl bg-black/30 border border-white/20 text-center">
            <div class="text-[10px] font-bold uppercase text-white/80">Thời gian</div>
            <div id="exam-timer" class="font-mono text-lg font-black text-yellow-300">60:00</div>
          </div>
          <button onclick="closeExamModal()" class="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition">
            <i class="fa-solid fa-xmark text-base"></i>
          </button>
        </div>
      </div>

      <!-- Exam Question List -->
      <div class="p-6 overflow-y-auto flex-1 max-h-[60vh] space-y-6" id="examQuestionsContainer">
        ${examQuestions.map((eq, qIdx) => `
          <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
            <p class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-3 leading-relaxed flex items-start gap-2">
              <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">${qIdx + 1}</span>
              <span>${eq.q}</span>
            </p>
            <div class="space-y-2 pl-8">
              ${eq.options.map((opt, optIdx) => `
                <label class="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 p-2.5 rounded-xl hover:bg-white dark:hover:bg-slate-900 cursor-pointer transition border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                  <input type="radio" name="exam-q-${qIdx}" value="${optIdx}" class="text-indigo-600 focus:ring-indigo-500">
                  <span>${opt}</span>
                </label>
              `).join('')}
            </div>
            <div id="exam-explain-${qIdx}" class="mt-3 p-3 rounded-xl text-xs hidden"></div>
          </div>
        `).join('')}
      </div>

      <!-- Exam Result Banner & Footer -->
      <div class="p-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div id="examScoreBanner" class="hidden text-xs font-bold text-slate-800 dark:text-slate-200">
          Kết quả: <span id="examScoreText" class="text-rose-600 dark:text-rose-400 text-sm font-black">0 / 25</span>
          &mdash; <span id="examFeedbackText" class="italic text-slate-500"></span>
        </div>
        <div class="flex items-center gap-2 self-end sm:self-auto">
          <button onclick="submitExam()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black shadow-md transition active:scale-95">
            Nộp Bài & Chấm Điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-2">
      <div class="flex items-center justify-center gap-2">
        <i class="fa-solid fa-graduation-cap text-sky-600"></i>
        <span class="font-bold text-slate-700 dark:text-slate-300">CodeHub Educational Platform</span>
        <span>&bull;</span>
        <span>Học liệu Tiếng Anh 9 chuẩn GDPT 2018 (Global Success)</span>
      </div>
      <p>Bản tổng hợp kiến thức phục vụ tra cứu học tập trực tuyến, kết hợp kĩ năng ngôn ngữ và công nghệ số.</p>
    </div>
  </footer>

  <!-- SCRIPT LOGIC (Audio, Search, Modals, Quiz, Timer) -->
  <script>
    // 1. Audio Pronunciation via Web Speech API (US English)
    function speakWord(word) {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ tính năng phát âm Web Speech API.');
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }

    // 2. Dark / Light Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // 3. Glossary Modal Logic
    const glossaryModal = document.getElementById('glossaryModal');
    function openGlossaryModal() {
      glossaryModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      document.getElementById('glossarySearch').focus();
    }
    function closeGlossaryModal() {
      glossaryModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    const allVocabData = ${JSON.stringify(allVocabWords)};
    function filterGlossary() {
      const q = document.getElementById('glossarySearch').value.toLowerCase().trim();
      const grid = document.getElementById('glossaryGrid');
      grid.innerHTML = '';
      
      const filtered = allVocabData.filter(v => 
        (v.word || '').toLowerCase().includes(q) ||
        (v.meaning || '').toLowerCase().includes(q) ||
        (v.unit || '').toLowerCase().includes(q)
      );

      document.getElementById('glossaryCount').textContent = filtered.length;

      if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-2 text-center py-8 text-xs text-slate-400">Không tìm thấy từ vựng phù hợp.</div>';
        return;
      }

      filtered.forEach(v => {
        const safeWord = (v.word || '').replace(/'/g, "\\\\'");
        grid.innerHTML += \`
          <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between gap-2 shadow-sm">
            <div class="flex items-start justify-between gap-2">
              <div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="font-black text-slate-900 dark:text-white text-xs sm:text-sm">\${v.word}</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-mono font-bold">\${v.ipa}</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 italic">\${v.type}</span>
                </div>
                <div class="text-xs text-sky-800 dark:text-sky-200 font-bold mt-1.5">\${v.meaning}</div>
              </div>
              <button onclick="speakWord('\${safeWord}')" title="Nghe phát âm" class="w-8 h-8 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-300 hover:bg-sky-600 hover:text-white flex items-center justify-center transition cursor-pointer shrink-0">
                <i class="fa-solid fa-volume-high text-xs"></i>
              </button>
            </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
              &ldquo;\${v.ex}&rdquo;
            </div>
          </div>
        \`;
      });
    }

    // 4. Handbook Modal Logic & Tabs
    const handbookModal = document.getElementById('handbookModal');
    function openHandbookModal() {
      handbookModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
    function closeHandbookModal() {
      handbookModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    function switchHandbookTab(tabId) {
      ['tab-grammar', 'tab-phonics', 'tab-comm', 'tab-skills'].forEach(t => {
        document.getElementById(t).classList.add('hidden');
      });
      ['btn-tab-grammar', 'btn-tab-phonics', 'btn-tab-comm', 'btn-tab-skills'].forEach(b => {
        document.getElementById(b).classList.remove('border-emerald-600', 'text-emerald-600', 'dark:text-emerald-400');
        document.getElementById(b).classList.add('border-transparent', 'text-slate-500');
      });

      document.getElementById(tabId).classList.remove('hidden');
      const activeBtn = document.getElementById('btn-' + tabId);
      activeBtn.classList.add('border-emerald-600', 'text-emerald-600', 'dark:text-emerald-400');
      activeBtn.classList.remove('border-transparent', 'text-slate-500');
    }

    // 5. Mini-Quiz Check Logic
    function checkUnitQuiz(unitId, qIdx, answer, explain) {
      const radios = document.getElementsByName('q-' + unitId + '-' + qIdx);
      let selectedVal = null;
      for (let r of radios) {
        if (r.checked) {
          selectedVal = parseInt(r.value, 10);
          break;
        }
      }

      const resSpan = document.getElementById('quiz-result-' + unitId + '-' + qIdx);
      const expDiv = document.getElementById('quiz-explain-' + unitId + '-' + qIdx);
      resSpan.classList.remove('hidden', 'text-emerald-600', 'text-rose-600');
      expDiv.classList.remove('hidden');

      if (selectedVal === null) {
        alert('Vui lòng chọn một đáp án trước khi bấm kiểm tra.');
        return;
      }

      if (selectedVal === answer) {
        resSpan.textContent = 'Chính xác! ✓';
        resSpan.classList.add('text-emerald-600');
        expDiv.innerHTML = '<strong class="text-emerald-600 font-bold">Giải thích:</strong> ' + explain;
      } else {
        resSpan.textContent = 'Chưa đúng ✕';
        resSpan.classList.add('text-rose-600');
        expDiv.innerHTML = '<strong class="text-rose-600 font-bold">Giải thích:</strong> ' + explain;
      }
    }

    // 6. Exam Modal & 60:00 Countdown Logic
    const examModal = document.getElementById('examModal');
    let examTimeSeconds = 3600;
    let examInterval = null;
    const examQuestionsData = ${JSON.stringify(examQuestions)};

    function openExamModal() {
      examModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      if (!examInterval) startExamTimer();
    }
    function closeExamModal() {
      examModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    function startExamTimer() {
      if (examInterval) clearInterval(examInterval);
      examInterval = setInterval(() => {
        if (examTimeSeconds <= 0) {
          clearInterval(examInterval);
          alert('Hết giờ làm bài thi Trạng Nguyên! Hệ thống đang tự động chấm điểm.');
          submitExam();
          return;
        }
        examTimeSeconds--;
        const mins = Math.floor(examTimeSeconds / 60);
        const secs = examTimeSeconds % 60;
        document.getElementById('exam-timer').textContent = 
          (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
      }, 1000);
    }

    function submitExam() {
      if (examInterval) clearInterval(examInterval);

      let score = 0;
      examQuestionsData.forEach((eq, idx) => {
        const radios = document.getElementsByName('exam-q-' + idx);
        let selectedVal = null;
        for (let r of radios) {
          if (r.checked) {
            selectedVal = parseInt(r.value, 10);
            break;
          }
        }

        const exp = document.getElementById('exam-explain-' + idx);
        exp.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-500', 'text-emerald-900', 'dark:bg-emerald-950/40', 'dark:text-emerald-200', 'bg-rose-50', 'border-rose-500', 'text-rose-900', 'dark:bg-rose-950/40', 'dark:text-rose-200');

        if (selectedVal === eq.answer) {
          score++;
          exp.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-900', 'dark:bg-emerald-950/40', 'dark:text-emerald-200');
          exp.innerHTML = '<strong class="font-bold text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-circle-check mr-1"></i> Chính xác!</strong> ' + eq.explain;
        } else {
          exp.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-900', 'dark:bg-rose-950/40', 'dark:text-rose-200');
          exp.innerHTML = '<strong class="font-bold text-rose-700 dark:text-rose-300"><i class="fa-solid fa-circle-xmark mr-1"></i> Chưa đúng!</strong> Đáp án đúng: <em>' + eq.options[eq.answer] + '</em>. ' + eq.explain;
        }
      });

      const banner = document.getElementById('examScoreBanner');
      const scoreText = document.getElementById('examScoreText');
      const fbText = document.getElementById('examFeedbackText');
      banner.classList.remove('hidden');

      scoreText.textContent = score + ' / 25 Điểm';
      const pct = Math.round((score / 25) * 100);
      if (pct >= 90) {
        fbText.textContent = 'Xuất sắc! Em đạt danh hiệu Trạng Nguyên Tiếng Anh 9 với năng lực ngôn ngữ và ngữ pháp đỉnh cao!';
      } else if (pct >= 70) {
        fbText.textContent = 'Khá giỏi! Em nắm rất chắc các chuyên đề ngữ pháp và vốn từ vựng Global Success.';
      } else {
        fbText.textContent = 'Em hãy rà soát lại các bài học và luyện tập thêm với Sổ tay cốt lõi nhé!';
      }
    }
  </script>
</body>
</html>
`;

// Save to courses/tienganh_9.html
const outTienganh9 = path.resolve(__dirname, '../courses/tienganh_9.html');
fs.writeFileSync(outTienganh9, fullHtml, 'utf8');
console.log('Saved tienganh_9.html, size:', fullHtml.length);

// Copy to courses/english_9.html
const outEnglish9 = path.resolve(__dirname, '../courses/english_9.html');
fs.writeFileSync(outEnglish9, fullHtml, 'utf8');
console.log('Saved english_9.html, size:', fullHtml.length);
