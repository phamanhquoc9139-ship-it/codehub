// build_tienganh8_page.js
// Master HTML Builder for Tiếng Anh 8 (Global Success) - Sách học sinh
// Generates: courses/tienganh_8.html and courses/english_8.html (synchronized)

const fs = require('fs');
const path = require('path');

const { theme1And2Data } = require('./tienganh8_data_p1.js');
const { theme3And4Data, fastSummaryMatrix, phonicsMatrix } = require('./tienganh8_data_p2.js');
const { getMindmapSVG } = require('./tienganh8_mindmaps.js');
const { examQuestions } = require('./tienganh8_exam.js');

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
    <div class="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 flex flex-col justify-between gap-2 shadow-sm hover:shadow transition">
      <div class="flex items-start justify-between gap-2">
        <div>
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="font-bold text-gray-900 dark:text-white text-xs sm:text-sm">${v.word}</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-mono font-medium">${v.ipa}</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 italic">${v.type}</span>
          </div>
          <div class="text-xs text-sky-800 dark:text-sky-200 font-semibold mt-1">${v.meaning}</div>
        </div>
        <button onclick="speakWord('${safeWord}')" title="Nghe phát âm chuẩn (US)" class="w-8 h-8 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-300 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 shadow-sm">
          <i class="fa-solid fa-volume-high text-xs"></i>
        </button>
      </div>
      <div class="text-[11px] text-gray-500 dark:text-gray-400 italic pt-1 border-t border-gray-100 dark:border-gray-700/60">
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
  let themeIcon = "fa-compass";

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

  const mindmapSVG = getMindmapSVG ? getMindmapSVG(unitId) : '';

  return `
    <section id="${unitId}" data-theme="${themeNum}" class="lesson-section scroll-mt-20 rounded-3xl p-6 sm:p-8 bg-white dark:bg-gray-850 border-2 ${themeBorder} shadow-lg space-y-6">
      
      <!-- Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-xl ${themeBadgeBg} text-white font-black text-xs uppercase tracking-wider shadow flex items-center gap-1.5">
            <i class="fa-solid ${themeIcon}"></i> THEME ${themeNum}
          </span>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
              <span>${lesson.unit}: ${lesson.title}</span>
            </h2>
            <p class="text-xs text-gray-500 dark:text-gray-400">${lesson.theme} &bull; SGK Global Success 8</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold px-3 py-1 rounded-full ${themeBgSoft} ${themeText}">
            ${lesson.focus ? lesson.focus.slice(0, 60) + '...' : ''}
          </span>
        </div>
      </div>

      <!-- Vector SVG Mindmap (if available) -->
      ${mindmapSVG ? `
      <div class="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-slate-900 p-2 sm:p-3 shadow-inner">
        <div class="flex items-center justify-between px-3 py-1 mb-1 border-b border-slate-800 text-[11px] font-bold text-slate-400">
          <span class="flex items-center gap-1.5">
            <i class="fa-solid fa-diagram-project text-sky-400"></i> CONCEPT MINDMAP VECTOR &bull; ${lesson.unit}
          </span>
          <span class="text-slate-500 text-[10px]">Trực quan hóa cấu trúc cốt lõi</span>
        </div>
        ${mindmapSVG}
      </div>
      ` : ''}

      <!-- Section 1: Vocabulary & Getting Started -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-sm sm:text-base font-bold ${themeText} flex items-center gap-2 uppercase tracking-wide">
            <i class="fa-solid fa-book-bookmark"></i> 1. Getting Started &amp; Vocabulary (Từ vựng có phát âm Audio)
          </h3>
          <span class="text-[11px] text-gray-500 dark:text-gray-400 italic">Nhấn vào biểu tượng loa để nghe chuẩn US</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          ${(lesson.vocab || []).map(v => renderVocabBadge(v)).join('')}
        </div>
      </div>

      <!-- Section 2: Pronunciation (A Closer Look 1) -->
      <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/80 space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-bold ${themeText} flex items-center gap-2 uppercase tracking-wide">
            <i class="fa-solid fa-ear-listen"></i> 2. Pronunciation (A Closer Look 1): ${lesson.pronunciation.sounds}
          </h3>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
          ${lesson.pronunciation.guide}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1">
          ${(lesson.pronunciation.pairs || []).map(p => `
            <div class="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between text-xs font-semibold">
              <span class="text-sky-700 dark:text-sky-300">${p.wordA}</span>
              <i class="fa-solid fa-arrows-left-right text-[10px] text-gray-400"></i>
              <span class="text-amber-700 dark:text-amber-300">${p.wordB}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Section 3: Grammar (A Closer Look 2) -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-900 text-white space-y-4 border border-indigo-500/30 shadow-md">
        <div class="flex items-center justify-between border-b border-indigo-500/20 pb-2">
          <h3 class="text-sm sm:text-base font-bold text-indigo-300 flex items-center gap-2 uppercase tracking-wide">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i> 3. Grammar (A Closer Look 2): ${lesson.grammar.topic}
          </h3>
          <span class="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-200 border border-indigo-500/30">Cốt Lõi</span>
        </div>
        <ul class="space-y-2 text-xs text-gray-200 leading-relaxed list-disc pl-4">
          ${lesson.grammar.rules.map(r => `<li>${r}</li>`).join('')}
        </ul>
        <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5 text-xs">
          <span class="font-bold text-amber-300 text-[11px] block uppercase tracking-wider">Ví Dụ Thực Hành (Examples):</span>
          ${lesson.grammar.examples.map(ex => `<div class="text-gray-300 pl-2 border-l-2 border-amber-400 italic">&bull; ${ex}</div>`).join('')}
        </div>
      </div>

      <!-- Section 4: Communication & Skills -->
      <div class="space-y-3">
        <h3 class="text-sm font-bold ${themeText} flex items-center gap-2 uppercase tracking-wide">
          <i class="fa-solid fa-comments"></i> 4. Everyday English &amp; 4 Skills (Giao Tiếp &amp; Kỹ Năng)
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Everyday English Dialogue -->
          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/70 border border-gray-200/80 dark:border-gray-700/80 space-y-2.5">
            <div class="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center justify-between">
              <span>Chức năng: <strong class="${themeText}">${lesson.communication.function}</strong></span>
              <i class="fa-solid fa-message text-gray-400"></i>
            </div>
            <div class="space-y-2 text-xs pt-1">
              ${(lesson.communication.dialogue || []).map(d => `
                <div class="p-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <strong class="text-indigo-600 dark:text-indigo-400">${d.speaker}:</strong> 
                  <span class="text-gray-700 dark:text-gray-300">&ldquo;${d.text}&rdquo;</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Skills Summary -->
          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/70 border border-gray-200/80 dark:border-gray-700/80 space-y-2 text-xs text-gray-700 dark:text-gray-300">
            <div class="font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider text-[11px] pb-1 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <span>Skills 1 &amp; Skills 2 &amp; Project</span>
              <i class="fa-solid fa-pen-nib text-gray-400"></i>
            </div>
            <div class="space-y-1.5 pt-1">
              ${lesson.skills.reading ? `<div><strong class="text-sky-600 dark:text-sky-400">Reading:</strong> ${lesson.skills.reading}</div>` : ''}
              ${lesson.skills.speaking ? `<div><strong class="text-emerald-600 dark:text-emerald-400">Speaking:</strong> ${lesson.skills.speaking}</div>` : ''}
              ${lesson.skills.listening ? `<div><strong class="text-amber-600 dark:text-amber-400">Listening:</strong> ${lesson.skills.listening}</div>` : ''}
              ${lesson.skills.writing ? `<div><strong class="text-rose-600 dark:text-rose-400">Writing:</strong> ${lesson.skills.writing}</div>` : ''}
              ${lesson.skills.project ? `<div><strong class="text-purple-600 dark:text-purple-400">Looking Back &amp; Project:</strong> ${lesson.skills.project}</div>` : ''}
            </div>
          </div>
        </div>
      </div>

      <!-- Section 5: Mini-Quiz -->
      <div class="p-5 rounded-2xl bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 space-y-4">
        <div class="flex items-center justify-between">
          <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 uppercase tracking-wide">
            <i class="fa-solid fa-circle-question text-amber-500"></i> Mini-Quiz Củng Cố Kiến Thức (${lesson.unit})
          </h4>
          <span class="text-[10px] text-gray-500 dark:text-gray-400">Tự kiểm tra có phản hồi ngay</span>
        </div>

        <div class="space-y-4">
          ${(lesson.quiz || []).map((q, qIdx) => `
            <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 space-y-2.5">
              <p class="text-xs font-bold text-gray-900 dark:text-white leading-relaxed">
                Câu ${qIdx + 1}: ${q.q}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${q.options.map((opt, oIdx) => `
                  <button type="button" 
                          onclick="checkAnswer('${unitId}', ${qIdx}, ${oIdx}, ${q.a}, this)"
                          class="quiz-btn text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-sky-500 hover:bg-sky-50/50 dark:hover:bg-sky-950/30 text-xs transition cursor-pointer text-gray-800 dark:text-gray-200">
                    ${opt}
                  </button>
                `).join('')}
              </div>
              <div id="quiz-fb-${unitId}-${qIdx}" class="hidden p-3 rounded-xl text-xs leading-relaxed"></div>
            </div>
          `).join('')}
        </div>
      </div>

    </section>
  `;
}

function buildPage() {
  const html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Anh 8 (Global Success - GDPT 2018: 4 Themes • 12 Units • 4 Reviews • Tra Từ Audio • Đấu Trường Trạng Nguyên 60:00) | CodeHub</title>
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
          colors: {
            gray: {
              850: '#151c2c',
              950: '#070b14'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }
        }
      }
    }
  </script>

  <style>
    /* Dark mode bulletproof fallback */
    .dark body { background-color: #0b1120 !important; color: #f1f5f9 !important; }
    .dark .lesson-section { background-color: #111827 !important; color: #f3f4f6 !important; }
    .dark .modal-content-card { background-color: #0f172a !important; color: #f8fafc !important; }
    
    .scrollbar-thin::-webkit-scrollbar { width: 6px; height: 6px; }
    .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.3); border-radius: 9999px; }
    .dark .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(100, 116, 139, 0.4); }
  </style>
</head>

<body class="bg-slate-50 text-slate-800 antialiased font-sans transition-colors duration-300 min-h-screen flex flex-col">

  <!-- ==================== HEADER / NAVBAR ==================== -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      
      <!-- Back & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 flex items-center justify-center transition cursor-pointer shadow-sm" title="Quay lại Trang Chủ">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-sky-500/20">
            EN8
          </div>
          <div>
            <h1 class="text-sm sm:text-base font-black text-gray-900 dark:text-white leading-tight">
              TIẾNG ANH 8 <span class="text-xs font-normal text-gray-500 dark:text-gray-400 hidden sm:inline">&bull; Global Success &bull; GDPT 2018</span>
            </h1>
            <p class="text-[10px] text-gray-400 dark:text-gray-500">4 Themes &bull; 12 Units &bull; 4 Reviews &bull; Audio Phát Âm Chuẩn</p>
          </div>
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Tra Từ Vựng Cả Năm Button -->
        <button onclick="openGlossaryModal()" class="px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/60 dark:hover:bg-sky-900/60 text-sky-700 dark:text-sky-300 text-xs font-bold border border-sky-200 dark:border-sky-800 transition flex items-center gap-1.5 cursor-pointer" title="Tra cứu hơn 100 từ vựng và cụm từ cả năm có âm thanh audio">
          <i class="fa-solid fa-spell-check text-sky-600 dark:text-sky-400"></i>
          <span class="hidden md:inline">Tra Từ Vựng (${allVocabWords.length})</span>
        </button>

        <!-- Sổ Tay Ngữ Pháp & Phát Âm Button -->
        <button onclick="openHandbookModal()" class="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800 transition flex items-center gap-1.5 cursor-pointer" title="Sổ tay ma trận ngữ pháp và ngữ âm 12 Unit">
          <i class="fa-solid fa-book text-indigo-600 dark:text-indigo-400"></i>
          <span class="hidden md:inline">Sổ Tay Ngữ Pháp</span>
        </button>

        <!-- Trạng Nguyên 60:00 Button -->
        <button onclick="openExamModal()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-500/20 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Theme Toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== HERO BANNER ==================== -->
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 text-white py-10 sm:py-14 border-b border-sky-900/40">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="space-y-3 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold">
            <i class="fa-solid fa-graduation-cap"></i> SGK Tiếng Anh 8 — Global Success &bull; GDPT 2018
          </div>
          <h2 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Khóa Học <span class="bg-gradient-to-r from-sky-400 via-blue-300 to-amber-300 bg-clip-text text-transparent">Tiếng Anh 8 Toàn Diện</span>
          </h2>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Hệ thống hóa học liệu nền tảng theo đúng <strong>4 chủ điểm (Themes), 12 Unit và 4 bài Review</strong>. Chu trình 8 bước chuẩn sư phạm: <em>Getting Started &bull; A Closer Look 1 &bull; A Closer Look 2 &bull; Communication &bull; Skills 1 &bull; Skills 2 &bull; Looking Back &bull; Project</em>. Tích hợp âm thanh audio phát âm chuẩn US, 12 Sơ đồ tư duy Vector SVG, Sổ tay tra cứu từ vựng và Đấu trường Trạng Nguyên 60:00.
          </p>
          <div class="flex flex-wrap gap-2 pt-1 text-xs">
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-compass text-sky-400 mr-1.5"></i> Theme 1: Our Communities (Units 1 - 3)
            </span>
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-landmark text-rose-400 mr-1.5"></i> Theme 2: Our Heritage (Units 4 - 6)
            </span>
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-earth-americas text-emerald-400 mr-1.5"></i> Theme 3: Our World (Units 7 - 9)
            </span>
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-rocket text-indigo-400 mr-1.5"></i> Theme 4: Visions of the Future (Units 10 - 12)
            </span>
          </div>
        </div>

        <!-- Quick Stat Pills -->
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 w-full lg:w-auto shrink-0">
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-xl sm:text-2xl font-black text-sky-400">12</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Units Chuẩn SGK</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-xl sm:text-2xl font-black text-amber-400">12 SVG</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Sơ Đồ Tư Duy</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-xl sm:text-2xl font-black text-rose-400">4</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Review Ôn Tập</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-xl sm:text-2xl font-black text-emerald-400">40</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Đề Trạng Nguyên</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MAIN CONTENT WITH SIDEBAR ==================== -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      
      <!-- STICKY SIDEBAR -->
      <aside class="w-full lg:w-72 shrink-0 lg:sticky lg:top-20 space-y-4">
        <!-- Progress Card -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-3">
          <div class="flex items-center justify-between text-xs font-bold">
            <span class="text-gray-500 dark:text-gray-400">Tiến độ bài học:</span>
            <span id="progressText" class="text-sky-600 dark:text-sky-400 font-black">16 Mục học tập</span>
          </div>
          <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 transition-all duration-300" style="width: 100%"></div>
          </div>

          <!-- Quick Filters: Themes -->
          <div class="pt-2 border-t border-gray-100 dark:border-gray-800">
            <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Lọc theo Theme:</span>
            <div class="grid grid-cols-2 gap-1.5 text-xs font-semibold">
              <button onclick="setThemeFilter('all')" id="filter-btn-all" class="theme-filter-btn active col-span-2 py-1.5 px-3 rounded-lg bg-sky-600 text-white transition text-center">Tất Cả (12 Unit + 4 Review)</button>
              <button onclick="setThemeFilter('1')" id="filter-btn-1" class="theme-filter-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">Theme 1 (U1-3)</button>
              <button onclick="setThemeFilter('2')" id="filter-btn-2" class="theme-filter-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">Theme 2 (U4-6)</button>
              <button onclick="setThemeFilter('3')" id="filter-btn-3" class="theme-filter-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">Theme 3 (U7-9)</button>
              <button onclick="setThemeFilter('4')" id="filter-btn-4" class="theme-filter-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">Theme 4 (U10-12)</button>
            </div>
          </div>
        </div>

        <!-- Lessons Navigation List -->
        <div class="p-3 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm max-h-[500px] overflow-y-auto scrollbar-thin space-y-1">
          <div class="px-2 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center justify-between">
            <span>Mục lục bài học</span>
            <span class="text-sky-600 dark:text-sky-400 font-black">16 Mục</span>
          </div>
          
          ${allLessons.map(l => {
            const isReview = l.id.startsWith('review-');
            let themeNum = 1;
            if (['unit-4', 'unit-5', 'unit-6', 'review-2'].includes(l.id)) themeNum = 2;
            else if (['unit-7', 'unit-8', 'unit-9', 'review-3'].includes(l.id)) themeNum = 3;
            else if (['unit-10', 'unit-11', 'unit-12', 'review-4'].includes(l.id)) themeNum = 4;

            return `
              <a href="#${l.id}" 
                 class="lesson-nav-link flex items-center justify-between p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 transition group"
                 data-theme-nav="${themeNum}">
                <span class="flex items-center gap-2 truncate">
                  <span class="w-6 h-6 rounded-lg ${isReview ? 'bg-amber-500' : 'bg-sky-600'} text-white text-[10px] font-black flex items-center justify-center shrink-0">
                    ${isReview ? 'R' : l.unit.replace('UNIT ', '')}
                  </span>
                  <span class="truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition">${l.unit}: ${l.title}</span>
                </span>
                <i class="fa-solid fa-angle-right text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition"></i>
              </a>
            `;
          }).join('')}
        </div>
      </aside>

      <!-- LESSONS CONTAINER -->
      <main class="flex-1 w-full space-y-10" id="mainLessonsContainer">
        
        <!-- Render 12 Units + 4 Reviews -->
        <div class="space-y-10" id="lessonList">
          ${allLessons.map((lesson, idx) => renderLessonHTML(lesson, idx)).join('')}
        </div>

        <!-- ==================== BẢNG HỆ THỐNG NHANH 12 UNIT ==================== -->
        <section id="fast-summary-table" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-850 border-2 border-indigo-200 dark:border-indigo-900/60 shadow-lg space-y-6">
          <div class="flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
            <span class="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow">
              <i class="fa-solid fa-table-cells"></i>
            </span>
            <div>
              <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">BẢNG HỆ THỐNG NHANH 12 UNIT</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">Tổng hợp toàn diện Từ vựng, Ngữ pháp, Phát âm, Giao tiếp và Dự án SGK Tiếng Anh 8</p>
            </div>
          </div>

          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 border-b border-indigo-200 dark:border-indigo-800">
                  <th class="p-3 font-bold rounded-tl-xl whitespace-nowrap">Unit</th>
                  <th class="p-3 font-bold">Chủ điểm từ vựng</th>
                  <th class="p-3 font-bold">Ngữ pháp trọng tâm</th>
                  <th class="p-3 font-bold">Phát âm / Giao tiếp</th>
                  <th class="p-3 font-bold rounded-tr-xl">Viết &amp; Dự án tiêu biểu</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                ${fastSummaryMatrix.map((row, idx) => `
                  <tr class="hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 transition">
                    <td class="p-3 font-bold text-sky-600 dark:text-sky-400 whitespace-nowrap">${row.unit}</td>
                    <td class="p-3 font-medium text-gray-900 dark:text-white">${row.vocab}</td>
                    <td class="p-3 font-mono text-[11px] text-indigo-600 dark:text-indigo-300">${row.grammar}</td>
                    <td class="p-3">${row.pronunciation} &bull; <em class="italic text-amber-600 dark:text-amber-400">${row.communication}</em></td>
                    <td class="p-3">${row.project}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>

        <!-- ==================== KHUNG TỰ HỌC PHÙ HỢP CHO WEBSITE ==================== -->
        <section id="learning-framework" class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 border-2 border-sky-200 dark:border-sky-900/60 shadow-lg space-y-4">
          <div class="flex items-center gap-3 border-b border-sky-200 dark:border-gray-800 pb-3">
            <i class="fa-solid fa-graduation-cap text-sky-600 dark:text-sky-400 text-xl"></i>
            <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white uppercase tracking-wider">
              Khung Tự Học &amp; Nguyên Tắc Ứng Dụng Chuẩn Mực
            </h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-gray-700 dark:text-gray-300">
            <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 space-y-2">
              <h4 class="font-bold text-sky-700 dark:text-sky-300 uppercase flex items-center gap-2">
                <i class="fa-solid fa-check-circle"></i> Chu trình học một Unit chuẩn 8 bước:
              </h4>
              <p>Mỗi Unit được tổ chức chặt chẽ: <strong>Getting Started</strong> (Khởi động) &rarr; <strong>A Closer Look 1</strong> (Từ vựng &amp; Phát âm) &rarr; <strong>A Closer Look 2</strong> (Ngữ pháp) &rarr; <strong>Communication</strong> (Giao tiếp thực tế) &rarr; <strong>Skills 1</strong> (Đọc hiểu &amp; Nói) &rarr; <strong>Skills 2</strong> (Nghe hiểu &amp; Viết) &rarr; <strong>Looking Back</strong> (Hệ thống hóa) &rarr; <strong>Project</strong> (Dự án thực hành sáng tạo).</p>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 space-y-2">
              <h4 class="font-bold text-indigo-700 dark:text-indigo-300 uppercase flex items-center gap-2">
                <i class="fa-solid fa-lightbulb"></i> Nguyên tắc tiếp thu ngôn ngữ tự nhiên:
              </h4>
              <p>Học từ mới theo cụm và ngữ cảnh (collocations). Khi học ngữ pháp, nắm rõ bản chất ý nghĩa trước khi áp dụng công thức. Đọc và nghe tìm ý chính, từ khóa trước khi đào sâu chi tiết. Viết và nói mạch lạc có từ nối, tuyệt đối tránh dịch từng từ theo ngữ pháp tiếng Việt.</p>
            </div>
          </div>
        </section>

      </main>

    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-6 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <span class="w-6 h-6 rounded-md bg-sky-600 text-white font-black text-[11px] flex items-center justify-center">EN8</span>
        <span class="font-bold text-gray-800 dark:text-gray-200">Tiếng Anh 8 &bull; Global Success &bull; Bộ Giáo Dục &amp; Đào Tạo</span>
      </div>
      <div>Phát triển học liệu số hóa tương tác &bull; CodeHub THCS</div>
    </div>
  </footer>

  <!-- ==================== MODAL 1: GLOSSARY SEARCH (TRA TỪ VỰNG) ==================== -->
  <div id="glossaryModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-spell-check"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black">Từ Điển Cốt Lõi Tiếng Anh 8 (${allVocabWords.length} Từ/Cụm)</h3>
            <p class="text-xs text-sky-200">Tra cứu nhanh từ vựng, phiên âm IPA, nghĩa tiếng Việt và audio giọng đọc chuẩn</p>
          </div>
        </div>
        <button onclick="closeGlossaryModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Search Input -->
      <div class="p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-gray-400"></i>
          <input type="text" id="vocabSearchInput" onkeyup="filterVocabList()" placeholder="Tìm kiếm từ vựng tiếng Anh hoặc nghĩa tiếng Việt (vd: DIY, stilt house, crater, carbon...)" class="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none dark:text-white">
        </div>
      </div>

      <div class="p-6 overflow-y-auto space-y-2 scrollbar-thin text-xs text-gray-700 dark:text-gray-300" id="glossaryListContainer">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="glossaryGrid">
          ${allVocabWords.map(v => renderVocabBadge(v)).join('')}
        </div>
      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
        <button onclick="closeGlossaryModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
          Đóng Từ Điển
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 2: GRAMMAR & PHONICS HANDBOOK ==================== -->
  <div id="handbookModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-book"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black">Sổ Tay Ngữ Pháp &amp; Ngữ Âm Toàn Diện 12 Unit</h3>
            <p class="text-xs text-indigo-200">Hệ thống hóa quy tắc phiên âm, công thức và ví dụ thực chiến lớp 8</p>
          </div>
        </div>
        <button onclick="closeHandbookModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-6 scrollbar-thin text-xs text-gray-700 dark:text-gray-300">
        
        <!-- Phonics Matrix Table -->
        <div class="space-y-3">
          <h4 class="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide flex items-center gap-2">
            <i class="fa-solid fa-ear-listen"></i> Bảng Tổng Hợp Ngữ Âm &amp; Trọng Âm Cả Năm
          </h4>
          <div class="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl">
            <table class="w-full text-left border-collapse text-xs">
              <thead class="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200">
                <tr>
                  <th class="p-2.5 font-bold">Unit</th>
                  <th class="p-2.5 font-bold">Trọng tâm âm</th>
                  <th class="p-2.5 font-bold">Quy tắc &amp; Ví dụ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                ${phonicsMatrix.map(pm => `
                  <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td class="p-2.5 font-bold text-sky-600 dark:text-sky-400 whitespace-nowrap">${pm.unit}</td>
                    <td class="p-2.5 font-semibold text-gray-900 dark:text-white font-mono">${pm.focus}</td>
                    <td class="p-2.5 text-gray-600 dark:text-gray-300">${pm.rule}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
        <button onclick="closeHandbookModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
          Đóng Sổ Tay
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 3: TRẠNG NGUYÊN TIẾNG ANH 8 (60:00) ==================== -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <!-- Exam Header -->
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-emerald-900 via-teal-900 to-sky-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-lg shadow">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black leading-tight">Đấu Trường Trạng Nguyên Tiếng Anh 8</h3>
            <p class="text-xs text-emerald-200">40 câu hỏi trắc nghiệm &bull; Thời gian 60:00 &bull; Khảo sát chuẩn chất lượng SGK</p>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <!-- Countdown Timer -->
          <div class="px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/20 text-center">
            <div class="text-[10px] text-gray-300 font-bold uppercase">Thời gian còn lại</div>
            <div id="examTimer" class="text-base sm:text-lg font-black text-amber-300 font-mono tracking-wider">60:00</div>
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Questions List -->
      <div id="examQuestionsContainer" class="p-6 overflow-y-auto space-y-6 scrollbar-thin text-xs text-gray-800 dark:text-gray-200">
        <!-- Rendered by JS -->
      </div>

      <!-- Exam Footer Controls -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex flex-wrap items-center justify-between gap-3">
        <div class="text-xs text-gray-600 dark:text-gray-300">
          Đã hoàn thành: <strong id="answeredCount" class="text-emerald-600 dark:text-emerald-400 font-mono">0</strong> / 40 câu
        </div>
        <div class="flex items-center gap-2">
          <button onclick="closeExamModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
            Tạm dừng
          </button>
          <button onclick="submitExam()" class="px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs transition shadow-md shadow-emerald-600/20 cursor-pointer">
            <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp Bài &amp; Xem Xếp Hạng
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- ==================== JAVASCRIPT LOGIC ==================== -->
  <script>
    // Theme Switcher with localStorage
    function initTheme() {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    initTheme();

    // Web Speech API for Pronunciation
    function speakWord(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        u.rate = 0.88;
        window.speechSynthesis.speak(u);
      } else {
        alert('Trình duyệt của bạn chưa hỗ trợ phát âm trực tiếp Web Speech API.');
      }
    }

    // Filter by Theme
    function setThemeFilter(theme) {
      const filterBtns = document.querySelectorAll('.theme-filter-btn');
      filterBtns.forEach(btn => {
        if (btn.id === 'filter-btn-' + theme) {
          btn.className = 'theme-filter-btn active py-1.5 px-2 rounded-lg bg-sky-600 text-white transition text-center truncate';
        } else {
          btn.className = 'theme-filter-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate';
        }
      });

      const sections = document.querySelectorAll('.lesson-section');
      const navLinks = document.querySelectorAll('.lesson-nav-link');

      sections.forEach(sec => {
        const secTheme = sec.getAttribute('data-theme');
        if (theme === 'all' || secTheme === theme) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });

      navLinks.forEach(link => {
        const navTheme = link.getAttribute('data-theme-nav');
        if (theme === 'all' || navTheme === theme) {
          link.classList.remove('hidden');
        } else {
          link.classList.add('hidden');
        }
      });
    }

    // Mini-Quiz Answer Checker
    function checkAnswer(unitId, qIdx, chosenIdx, correctIdx, btnEl) {
      const parent = btnEl.parentElement;
      const allBtns = parent.querySelectorAll('.quiz-btn');
      allBtns.forEach((b, idx) => {
        b.disabled = true;
        if (idx === correctIdx) {
          b.className = 'quiz-btn w-full text-left p-2.5 rounded-xl border border-emerald-500 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-200 text-xs font-bold transition';
        } else if (idx === chosenIdx && chosenIdx !== correctIdx) {
          b.className = 'quiz-btn w-full text-left p-2.5 rounded-xl border border-rose-500 bg-rose-50 dark:bg-rose-950/70 text-rose-800 dark:text-rose-200 text-xs font-bold transition';
        } else {
          b.className = 'quiz-btn w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 opacity-50 text-xs transition';
        }
      });

      const fb = document.getElementById('quiz-fb-' + unitId + '-' + qIdx);
      if (fb) {
        fb.classList.remove('hidden');
        if (chosenIdx === correctIdx) {
          fb.className = 'p-3 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300';
          fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-check mr-1\"></i> Chính xác!</strong> Bạn đã nắm vững kiến thức bài học này.';
        } else {
          fb.className = 'p-3 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300';
          fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-xmark mr-1\"></i> Chưa chính xác!</strong> Hãy xem lại ô màu xanh lá để nắm đáp án đúng nhé.';
        }
      }
    }

    // Modal controls: Glossary
    function openGlossaryModal() {
      document.getElementById('glossaryModal').classList.remove('hidden');
    }
    function closeGlossaryModal() {
      document.getElementById('glossaryModal').classList.add('hidden');
    }

    // Filter Vocab in Glossary
    function filterVocabList() {
      const query = document.getElementById('vocabSearchInput').value.toLowerCase().trim();
      const cards = document.querySelectorAll('#glossaryGrid > div');
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (!query || text.includes(query)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // Modal controls: Handbook
    function openHandbookModal() {
      document.getElementById('handbookModal').classList.remove('hidden');
    }
    function closeHandbookModal() {
      document.getElementById('handbookModal').classList.add('hidden');
    }

    // Exam Modal & Countdown 60:00
    const examQuestionsData = ${JSON.stringify(examQuestions)};
    let examTimeRemaining = 3600; // 60 minutes
    let examInterval = null;
    const userExamAnswers = {};

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      if (!document.getElementById('examQuestionsContainer').hasChildNodes()) {
        renderExamQuestions();
      }
      if (!examInterval) {
        startExamTimer();
      }
    }

    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
    }

    function startExamTimer() {
      examInterval = setInterval(() => {
        if (examTimeRemaining <= 0) {
          clearInterval(examInterval);
          submitExam();
          return;
        }
        examTimeRemaining--;
        const mins = Math.floor(examTimeRemaining / 60);
        const secs = examTimeRemaining % 60;
        document.getElementById('examTimer').innerText = 
          (mins < 10 ? '0' + mins : mins) + ':' + (secs < 10 ? '0' + secs : secs);
      }, 1000);
    }

    function renderExamQuestions() {
      const container = document.getElementById('examQuestionsContainer');
      container.innerHTML = examQuestionsData.map((item, qIdx) => \`
        <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 space-y-3">
          <div class="flex items-start gap-2.5">
            <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              \${qIdx + 1}
            </span>
            <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-relaxed">
              \${item.q}
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            \${item.options.map((opt, oIdx) => \`
              <label class="exam-opt-label flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 cursor-pointer transition"
                     id="exam-label-\${qIdx}-\${oIdx}">
                <input type="radio" name="exam_q_\${qIdx}" value="\${oIdx}" onchange="selectExamOption(\${qIdx}, \${oIdx})" class="accent-emerald-600">
                <span class="leading-snug text-gray-800 dark:text-gray-200">\${opt}</span>
              </label>
            \`).join('')}
          </div>
          <div id="exam-exp-\${qIdx}" class="hidden p-3 rounded-lg text-xs leading-relaxed mt-2"></div>
        </div>
      \`).join('');
    }

    function selectExamOption(qIdx, oIdx) {
      userExamAnswers[qIdx] = oIdx;
      document.getElementById('answeredCount').innerText = Object.keys(userExamAnswers).length;
    }

    function submitExam() {
      clearInterval(examInterval);
      let score = 0;
      examQuestionsData.forEach((item, qIdx) => {
        const chosen = userExamAnswers[qIdx];
        const expBox = document.getElementById('exam-exp-' + qIdx);
        if (expBox) {
          expBox.classList.remove('hidden');
          if (chosen === item.answer) {
            score++;
            expBox.className = 'p-3 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 mt-2';
            expBox.innerHTML = '<strong>✓ Chính xác!</strong> ' + item.explain;
          } else {
            expBox.className = 'p-3 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 mt-2';
            expBox.innerHTML = '<strong>✗ Chưa đúng!</strong> Đáp án đúng là <strong>' + item.options[item.answer] + '</strong>. ' + item.explain;
          }
        }
      });

      // Calculate Rank
      let title = "Tú Tài Tiếng Anh";
      if (score >= 38) title = "🏆 TRẠNG NGUYÊN TIẾNG ANH 8 (English Champion)";
      else if (score >= 32) title = "🥈 BẢNG NHÃN TIẾNG ANH 8 (Master of English)";
      else if (score >= 26) title = "🥉 THÁM HOA TIẾNG ANH 8 (English Scholar)";

      const resMsg = [
        'KẾT QUẢ ĐẤU TRƯỜNG TRẠNG NGUYÊN TIẾNG ANH 8:',
        '--------------------------------------------',
        'Điểm số: ' + score + ' / 40 câu đúng (' + ((score / 40) * 10).toFixed(1) + '/10 điểm)',
        'Danh hiệu: ' + title,
        'Hãy xem lại phần giải thích chi tiết trong đề thi!'
      ].join('\\n');
      alert(resMsg);
    }
  </script>
</body>
</html>`;

  return html;
}

// Write files: courses/tienganh_8.html and courses/english_8.html
const outputHtml = buildPage();
const target1 = path.join(__dirname, '../courses/tienganh_8.html');
const target2 = path.join(__dirname, '../courses/english_8.html');

fs.writeFileSync(target1, outputHtml, 'utf8');
fs.writeFileSync(target2, outputHtml, 'utf8');

console.log('Successfully wrote courses/tienganh_8.html, size:', outputHtml.length);
console.log('Successfully wrote courses/english_8.html, size:', outputHtml.length);
