// Generator for Tiếng Anh 7 (Global Success) Interactive Digital Textbook
const fs = require('fs');

const { theme1And2Data } = require('./tienganh7_data_p1.js');
const { theme3And4Data, grammarMatrix } = require('./tienganh7_data_p2.js');
const { getMindmapSVG } = require('./tienganh7_mindmaps.js');
const { examQuestions } = require('./tienganh7_exam.js');

const allLessons = [...theme1And2Data, ...theme3And4Data];

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
        <button onclick="speakWord('${safeWord}')" title="Nghe phát âm chuẩn" class="w-8 h-8 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-300 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 shadow-sm">
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
    themeBadgeBg = "bg-amber-600";
    themeBorder = "border-amber-200 dark:border-amber-900/60";
    themeText = "text-amber-600 dark:text-amber-400";
    themeBgSoft = "bg-amber-50/50 dark:bg-amber-950/20";
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
            <p class="text-xs text-gray-500 dark:text-gray-400">${lesson.theme} &bull; SGK Global Success 7</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold px-3 py-1 rounded-full ${themeBgSoft} ${themeText}">
            ${lesson.focus ? lesson.focus.slice(0, 50) + '...' : ''}
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
          <span class="text-[11px] text-gray-500 dark:text-gray-400 italic">Nhấn vào biểu tượng loa để nghe chuẩn</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          ${(lesson.vocab || []).map(v => renderVocabBadge(v)).join('')}
        </div>
      </div>

      <!-- Section 2: Pronunciation (A Closer Look 1) -->
      <div class="p-4 rounded-2xl ${themeBgSoft} border ${themeBorder} space-y-2">
        <h3 class="text-sm font-bold ${themeText} flex items-center gap-2 uppercase tracking-wide">
          <i class="fa-solid fa-ear-listen"></i> 2. Pronunciation (A Closer Look 1)
        </h3>
        <div class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
          Trọng tâm ngữ âm: <span class="font-mono text-rose-600 dark:text-rose-400">${lesson.pronunciation.sounds}</span>
        </div>
        <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
          ${lesson.pronunciation.guide}
        </p>
        <div class="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 text-xs">
          <span class="font-bold text-sky-600 dark:text-sky-400">Cặp từ thực hành: </span>
          <span class="text-gray-800 dark:text-gray-200">${lesson.pronunciation.pairs}</span>
        </div>
      </div>

      <!-- Section 3: Grammar (A Closer Look 2) -->
      <div class="space-y-3">
        <h3 class="text-sm sm:text-base font-bold ${themeText} flex items-center gap-2 uppercase tracking-wide">
          <i class="fa-solid fa-shapes"></i> 3. Grammar (A Closer Look 2) &bull; Ngữ pháp trọng tâm
        </h3>
        <div class="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-xs">
              <i class="fa-solid fa-feather-pointed"></i>
            </span>
            <h4 class="font-bold text-sm text-gray-900 dark:text-white">${lesson.grammar.topic}</h4>
          </div>
          
          <div class="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200/80 dark:border-sky-800/60 font-mono text-xs text-sky-900 dark:text-sky-200 font-bold whitespace-pre-line">
            ${Array.isArray(lesson.grammar.rules) ? lesson.grammar.rules.join('\n') : lesson.grammar.rules}
          </div>

          <div class="space-y-1.5 pt-1">
            <span class="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Ví dụ thực tế:</span>
            ${(lesson.grammar.examples || []).map(ex => `
              <div class="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 text-xs text-gray-800 dark:text-gray-200 flex items-start gap-2">
                <i class="fa-solid fa-check text-emerald-500 mt-0.5 text-[10px]"></i>
                <span>${ex}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Section 4: Communication & Skills -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Communication -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2.5 shadow-sm">
          <h4 class="font-bold text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
            <i class="fa-solid fa-comments"></i> 4. Everyday English Communication
          </h4>
          <p class="text-xs text-gray-600 dark:text-gray-300 italic font-semibold">${lesson.communication.function}</p>
          <div class="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-xs text-gray-800 dark:text-gray-200 space-y-1.5">
            <div class="font-bold text-blue-700 dark:text-blue-300">Đoạn hội thoại mẫu:</div>
            ${Array.isArray(lesson.communication.dialogue) ? lesson.communication.dialogue.map(d => `
              <div><strong class="text-sky-600 dark:text-sky-400">${d.speaker}:</strong> <span>${d.text}</span></div>
            `).join('') : `<p class="whitespace-pre-line">${lesson.communication.dialogue}</p>`}
          </div>
        </div>

        <!-- Skills & Writing -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2.5 shadow-sm">
          <h4 class="font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
            <i class="fa-solid fa-pen-ruler"></i> 5. Skills (Reading, Speaking, Writing)
          </h4>
          <div class="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
            <div><strong class="text-gray-900 dark:text-white">&bull; Reading:</strong> ${lesson.skills.reading}</div>
            <div><strong class="text-gray-900 dark:text-white">&bull; Speaking:</strong> ${lesson.skills.speaking}</div>
            <div><strong class="text-gray-900 dark:text-white">&bull; Writing:</strong> ${lesson.skills.writing}</div>
          </div>
        </div>
      </div>

      <!-- Section 5: Mini-Quiz -->
      <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
        <h4 class="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <i class="fa-solid fa-circle-question"></i> Mini-Quiz Củng Cố Kiến Thức (${lesson.unit})
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${(lesson.quiz || []).map((qItem, qIdx) => `
            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
                <strong>Câu ${qIdx + 1}:</strong> ${qItem.q}
              </p>
              <div class="space-y-1.5">
                ${qItem.options.map((opt, optIdx) => `
                  <button onclick="checkAnswer('${unitId}', ${qIdx}, ${optIdx}, ${qItem.a}, this)"
                          class="quiz-btn w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 text-xs text-gray-800 dark:text-gray-200 transition cursor-pointer">
                    <span class="font-bold text-gray-500 dark:text-gray-400">${String.fromCharCode(65 + optIdx)}.</span> ${opt}
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

// Generate the whole HTML file
const fullHTML = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiếng Anh 7 - Global Success | Nền Tảng Học Số CodeHub</title>
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
    /* Bulletproof dark mode fallback */
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
            EN
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-sm sm:text-base font-black tracking-tight text-gray-900 dark:text-white">TIẾNG ANH 7</h1>
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 uppercase tracking-wider">Global Success</span>
            </div>
            <p class="text-[11px] text-gray-500 dark:text-gray-400 hidden sm:block">4 Chủ Điểm &bull; 12 Units &bull; 4 Review &bull; SGK Kết Nối Tri Thức</p>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Audio Studio Modal Button -->
        <button onclick="openAudioStudioModal()" class="px-3 py-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center gap-1.5 transition border border-sky-200 dark:border-sky-800 cursor-pointer shadow-sm">
          <i class="fa-solid fa-headphones"></i>
          <span class="hidden md:inline">Phonetics Studio</span>
        </button>

        <!-- Grammar Matrix Modal Button -->
        <button onclick="openGrammarModal()" class="px-3 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center gap-1.5 transition border border-indigo-200 dark:border-indigo-800 cursor-pointer shadow-sm">
          <i class="fa-solid fa-table-list"></i>
          <span class="hidden md:inline">Sổ Tay Ngữ Pháp</span>
        </button>

        <!-- Exam Modal Button -->
        <button onclick="openExamModal()" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-md shadow-emerald-600/20 cursor-pointer">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Dark/Light Mode Toggle -->
        <button onclick="toggleDarkMode()" id="themeToggleBtn" class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-amber-400 flex items-center justify-center transition cursor-pointer shadow-sm" title="Chuyển chế độ Sáng / Tối">
          <i id="themeIcon" class="fa-solid fa-moon"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== MAIN CONTENT WRAPPER ==================== -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 flex flex-col lg:flex-row gap-6">

    <!-- ==================== LEFT SIDEBAR ==================== -->
    <aside class="w-full lg:w-80 shrink-0 space-y-4">
      
      <!-- Sticky Card -->
      <div class="lg:sticky lg:top-24 space-y-4">
        
        <!-- Search & Filter Card -->
        <div class="p-4 rounded-3xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
          
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-gray-400 text-xs"></i>
            <input type="text" id="lessonSearchInput" onkeyup="filterLessons()" placeholder="Tìm Unit, hobbies, traffic, grammar..."
                   class="w-full pl-9 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition">
          </div>

          <!-- Progress Bar -->
          <div class="space-y-1.5 pt-1">
            <div class="flex items-center justify-between text-[11px] font-bold text-gray-500 dark:text-gray-400">
              <span>Tiến độ học tập</span>
              <span id="progressText">0 / 16 bài</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <div id="progressBar" class="h-full bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
          </div>

          <!-- Theme Filter Chips -->
          <div class="pt-2 border-t border-gray-100 dark:border-gray-800 space-y-1.5">
            <div class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Lọc theo Theme</div>
            <div class="grid grid-cols-2 gap-1.5">
              <button onclick="filterByTheme('all')" class="theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-sky-600 text-white text-center transition cursor-pointer" data-theme-btn="all">
                Tất cả (16)
              </button>
              <button onclick="filterByTheme('1')" class="theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer" data-theme-btn="1">
                Theme 1: Communities
              </button>
              <button onclick="filterByTheme('2')" class="theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer" data-theme-btn="2">
                Theme 2: Heritage
              </button>
              <button onclick="filterByTheme('3')" class="theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer" data-theme-btn="3">
                Theme 3: Our World
              </button>
              <button onclick="filterByTheme('4')" class="theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer col-span-2" data-theme-btn="4">
                Theme 4: Visions of Future
              </button>
            </div>
          </div>

        </div>

        <!-- Lesson Navigation List -->
        <div class="p-3 rounded-3xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 shadow-sm space-y-1 max-h-[50vh] overflow-y-auto scrollbar-thin" id="lessonNavList">
          ${allLessons.map((l, i) => `
            <a href="#${l.id}" onclick="markLessonVisited(${i})" class="lesson-nav-link flex items-center justify-between p-2 rounded-xl text-xs hover:bg-gray-50 dark:hover:bg-gray-800/80 transition group" data-nav-id="${l.id}" data-theme-nav="${l.id.startsWith('unit-4') || l.id.startsWith('unit-5') || l.id.startsWith('unit-6') || l.id === 'review-2' ? '2' : (l.id.startsWith('unit-7') || l.id.startsWith('unit-8') || l.id.startsWith('unit-9') || l.id === 'review-3' ? '3' : (l.id.startsWith('unit-10') || l.id.startsWith('unit-11') || l.id.startsWith('unit-12') || l.id === 'review-4' ? '4' : '1'))}">
              <div class="flex items-center gap-2 overflow-hidden">
                <span class="w-6 h-6 rounded-lg ${l.id.startsWith('review') ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300' : 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300'} font-bold flex items-center justify-center text-[10px] shrink-0">
                  ${l.id.startsWith('review') ? 'R' : (l.id.replace('unit-', ''))}
                </span>
                <span class="truncate font-semibold text-gray-700 dark:text-gray-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                  ${l.unit}: ${l.title}
                </span>
              </div>
              <span id="check-icon-${i}" class="text-[10px] text-gray-300 dark:text-gray-600">
                <i class="fa-regular fa-circle"></i>
              </span>
            </a>
          `).join('')}
        </div>

      </div>

    </aside>

    <!-- ==================== MAIN CONTENT ==================== -->
    <main class="flex-1 space-y-6">

      <!-- Hero Welcome Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 text-white shadow-xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="relative z-10 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-sky-100">
            <i class="fa-solid fa-graduation-cap"></i> CHƯƠNG TRÌNH GDPT 2018 &bull; GLOBAL SUCCESS 7
          </div>
          <h2 class="text-2xl sm:text-3xl font-black leading-tight">
            Kiến Thức Cốt Lõi Tiếng Anh 7
          </h2>
          <p class="text-xs sm:text-sm text-sky-100 leading-relaxed max-w-2xl">
            Tổng hợp toàn diện 4 Chủ Điểm (Themes), 12 Units và 4 Bài Ôn Tập. Tích hợp Audio phát âm Web Speech API, sơ đồ tư duy Vector SVG, sổ tay ma trận ngữ pháp và đấu trường Trạng Nguyên Tiếng Anh 60 phút.
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">12 Units</div>
              <div class="text-[10px] text-sky-200 uppercase font-semibold">Chủ điểm cốt lõi</div>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">400+</div>
              <div class="text-[10px] text-sky-200 uppercase font-semibold">Từ vựng &amp; IPA Audio</div>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">12 SVG</div>
              <div class="text-[10px] text-sky-200 uppercase font-semibold">Sơ đồ tư duy</div>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">40 Câu</div>
              <div class="text-[10px] text-sky-200 uppercase font-semibold">Đề thi Trạng Nguyên</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Render all Lessons -->
      <div class="space-y-8" id="lessonContainer">
        ${allLessons.map((l, i) => renderLessonHTML(l, i)).join('')}
      </div>

    </main>

  </div>

  <!-- ==================== MODAL 1: PHONETICS & AUDIO STUDIO ==================== -->
  <div id="audioStudioModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-sky-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-headphones"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black">Phonetics Studio &amp; IPA Pronunciation (Tiếng Anh 7)</h3>
            <p class="text-xs text-sky-200">Trọng tâm 12 cặp âm và quy tắc phát âm SGK Global Success 7</p>
          </div>
        </div>
        <button onclick="closeAudioStudioModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-4 scrollbar-thin text-xs text-gray-700 dark:text-gray-300">
        
        <!-- Interactive Web Speech Tester -->
        <div class="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 space-y-2">
          <div class="font-bold text-sky-800 dark:text-sky-300 text-sm flex items-center gap-2">
            <i class="fa-solid fa-bullhorn"></i> Máy Phát Âm Chuẩn Bản Ngữ (Text-to-Speech)
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-300">Nhập từ hoặc câu tiếng Anh bất kì rồi nhấn "Phát âm" để nghe ngữ điệu chuẩn en-US:</p>
          <div class="flex gap-2">
            <input type="text" id="customSpeechInput" placeholder="Ví dụ: Congratulations! You did a fantastic job." class="flex-1 p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-gray-100">
            <button onclick="speakCustom()" class="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition cursor-pointer">
              <i class="fa-solid fa-volume-high mr-1"></i> Phát âm
            </button>
          </div>
        </div>

        <!-- 12 Phonetic Units Table -->
        <div class="space-y-3">
          <h4 class="font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-list-ol text-sky-600"></i> Bảng Tổng Hợp 12 Bài Ngữ Âm Toàn Bộ Năm Học
          </h4>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            
            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sky-600 dark:text-sky-400">Unit 1: Âm /ə/ và /ɜː/</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 font-bold">Vowels</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">/ə/: <button onclick="speakWord('away')" class="underline hover:text-sky-500 font-bold">away</button>, <button onclick="speakWord('sister')" class="underline hover:text-sky-500 font-bold">sister</button> &bull; /ɜː/: <button onclick="speakWord('bird')" class="underline hover:text-sky-500 font-bold">bird</button>, <button onclick="speakWord('girl')" class="underline hover:text-sky-500 font-bold">girl</button>, <button onclick="speakWord('learn')" class="underline hover:text-sky-500 font-bold">learn</button></p>
            </div>

            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sky-600 dark:text-sky-400">Unit 2: Âm /f/ và /v/</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 font-bold">Consonants</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">/f/: <button onclick="speakWord('fat')" class="underline hover:text-sky-500 font-bold">fat</button>, <button onclick="speakWord('cough')" class="underline hover:text-sky-500 font-bold">cough</button> &bull; /v/: <button onclick="speakWord('vitamin')" class="underline hover:text-sky-500 font-bold">vitamin</button>, <button onclick="speakWord('active')" class="underline hover:text-sky-500 font-bold">active</button></p>
            </div>

            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sky-600 dark:text-sky-400">Unit 3: Đuôi -ed (/t/, /d/, /ɪd/)</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 font-bold">Ending sound</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">/ɪd/: <button onclick="speakWord('donated')" class="underline hover:text-sky-500 font-bold">donated</button> &bull; /t/: <button onclick="speakWord('helped')" class="underline hover:text-sky-500 font-bold">helped</button> &bull; /d/: <button onclick="speakWord('cleaned')" class="underline hover:text-sky-500 font-bold">cleaned</button></p>
            </div>

            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sky-600 dark:text-sky-400">Unit 4: Âm /ʃ/ và /ʒ/</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 font-bold">Consonants</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">/ʃ/: <button onclick="speakWord('musician')" class="underline hover:text-sky-500 font-bold">musician</button>, <button onclick="speakWord('special')" class="underline hover:text-sky-500 font-bold">special</button> &bull; /ʒ/: <button onclick="speakWord('television')" class="underline hover:text-sky-500 font-bold">television</button>, <button onclick="speakWord('pleasure')" class="underline hover:text-sky-500 font-bold">pleasure</button></p>
            </div>

            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sky-600 dark:text-sky-400">Unit 5: Âm /ɒ/ và /ɔː/</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 font-bold">Vowels</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">/ɒ/: <button onclick="speakWord('pot')" class="underline hover:text-sky-500 font-bold">pot</button>, <button onclick="speakWord('bottle')" class="underline hover:text-sky-500 font-bold">bottle</button> &bull; /ɔː/: <button onclick="speakWord('pork')" class="underline hover:text-sky-500 font-bold">pork</button>, <button onclick="speakWord('sauce')" class="underline hover:text-sky-500 font-bold">sauce</button></p>
            </div>

            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sky-600 dark:text-sky-400">Unit 6: Âm /tʃ/ và /dʒ/</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 font-bold">Affricates</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">/tʃ/: <button onclick="speakWord('teacher')" class="underline hover:text-sky-500 font-bold">teacher</button>, <button onclick="speakWord('chair')" class="underline hover:text-sky-500 font-bold">chair</button> &bull; /dʒ/: <button onclick="speakWord('orange')" class="underline hover:text-sky-500 font-bold">orange</button>, <button onclick="speakWord('project')" class="underline hover:text-sky-500 font-bold">project</button></p>
            </div>

            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sky-600 dark:text-sky-400">Unit 7: Âm /aɪ/ và /eɪ/</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 font-bold">Diphthongs</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">/aɪ/: <button onclick="speakWord('cycle')" class="underline hover:text-sky-500 font-bold">cycle</button>, <button onclick="speakWord('sign')" class="underline hover:text-sky-500 font-bold">sign</button> &bull; /eɪ/: <button onclick="speakWord('station')" class="underline hover:text-sky-500 font-bold">station</button>, <button onclick="speakWord('pavement')" class="underline hover:text-sky-500 font-bold">pavement</button></p>
            </div>

            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sky-600 dark:text-sky-400">Unit 8: Âm /ɪə/ và /eə/</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 font-bold">Diphthongs</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">/ɪə/: <button onclick="speakWord('cheer')" class="underline hover:text-sky-500 font-bold">cheer</button>, <button onclick="speakWord('fear')" class="underline hover:text-sky-500 font-bold">fear</button> &bull; /eə/: <button onclick="speakWord('share')" class="underline hover:text-sky-500 font-bold">share</button>, <button onclick="speakWord('care')" class="underline hover:text-sky-500 font-bold">care</button></p>
            </div>

            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sky-600 dark:text-sky-400">Unit 9: Trọng âm từ 2 âm tiết</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 font-bold">Stress rules</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">Danh từ/Tính từ &rarr; Âm 1: <button onclick="speakWord('pumpkin')" class="underline hover:text-sky-500 font-bold">pumpkin</button>, <button onclick="speakWord('costume')" class="underline hover:text-sky-500 font-bold">costume</button> &bull; Động từ &rarr; Âm 2: <button onclick="speakWord('parade')" class="underline hover:text-sky-500 font-bold">parade</button>, <button onclick="speakWord('perform')" class="underline hover:text-sky-500 font-bold">perform</button></p>
            </div>

            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sky-600 dark:text-sky-400">Unit 10: Trọng âm từ 3 âm tiết</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 font-bold">Stress rules</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">Âm 1: <button onclick="speakWord('energy')" class="underline hover:text-sky-500 font-bold">energy</button>, <button onclick="speakWord('natural')" class="underline hover:text-sky-500 font-bold">natural</button> &bull; Âm 2: <button onclick="speakWord('pollutant')" class="underline hover:text-sky-500 font-bold">pollutant</button>, <button onclick="speakWord('recycle')" class="underline hover:text-sky-500 font-bold">recycle</button></p>
            </div>

            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sky-600 dark:text-sky-400">Unit 11: Trọng âm câu (Sentence Stress)</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 font-bold">Stress</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">Nhấn từ mang nghĩa chính (N, V, Adj): <button onclick="speakWord('Flying cars will save lots of time.')" class="underline hover:text-sky-500 font-bold">FLYING CARS will SAVE lots of TIME.</button></p>
            </div>

            <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sky-600 dark:text-sky-400">Unit 12: Ngữ điệu câu hỏi</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 font-bold">Intonation</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">Yes/No lên giọng (&nearr;), Wh- xuống giọng (&searr;): <button onclick="speakWord('Is English your favourite subject?')" class="underline hover:text-sky-500 font-bold">Is English favourite? (&nearr;)</button> &bull; <button onclick="speakWord('Where is Scotland located?')" class="underline hover:text-sky-500 font-bold">Where is Scotland? (&searr;)</button></p>
            </div>

          </div>
        </div>

      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
        <button onclick="closeAudioStudioModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
          Đóng Phonetics Studio
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 2: GRAMMAR MATRIX HANDBOOK ==================== -->
  <div id="grammarModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-indigo-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-table-list"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black">Sổ Tay Ma Trận Ngữ Pháp Toàn Diện 12 Unit</h3>
            <p class="text-xs text-indigo-200">Công thức, dấu hiệu nhận biết và ví dụ thực chiến lớp 7</p>
          </div>
        </div>
        <button onclick="closeGrammarModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-4 scrollbar-thin text-xs text-gray-700 dark:text-gray-300">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 border-b border-indigo-200 dark:border-indigo-800">
                <th class="p-3 font-bold rounded-tl-xl">Unit &amp; Chủ đề</th>
                <th class="p-3 font-bold">Chuyên đề Ngữ Pháp</th>
                <th class="p-3 font-bold">Công Thức Cốt Lõi</th>
                <th class="p-3 font-bold rounded-tr-xl">Ví Dụ &amp; Dấu Hiệu</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
              ${grammarMatrix.map((item, idx) => `
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
                  <td class="p-3 font-bold text-sky-600 dark:text-sky-400 whitespace-nowrap">${item.unit}</td>
                  <td class="p-3 font-semibold text-gray-900 dark:text-white">${item.topic}</td>
                  <td class="p-3 font-mono text-[11px] text-indigo-600 dark:text-indigo-300">${item.formula}</td>
                  <td class="p-3 text-gray-600 dark:text-gray-300">${item.example}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
        <button onclick="closeGrammarModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
          Đóng Sổ Tay
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 3: TRẠNG NGUYÊN TIẾNG ANH (60:00) ==================== -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <!-- Exam Header -->
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-emerald-900 via-teal-900 to-sky-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-lg shadow">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black leading-tight">Đấu Trường Trạng Nguyên Tiếng Anh 7</h3>
            <p class="text-xs text-emerald-200">Ma trận 40 câu hỏi trắc nghiệm &bull; Thời gian 60:00 &bull; Chuẩn khảo sát chất lượng</p>
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

  <!-- ==================== FOOTER ==================== -->
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-6 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <span class="w-5 h-5 rounded-md bg-sky-600 text-white font-black text-[10px] flex items-center justify-center">EN</span>
        <span class="font-bold text-gray-800 dark:text-gray-200">Tiếng Anh 7 &bull; Bộ Giáo Dục &amp; Đào Tạo &bull; Global Success</span>
      </div>
      <div>Phát triển học liệu số hóa chất lượng cao &bull; CodeHub THCS</div>
    </div>
  </footer>

  <!-- ==================== JAVASCRIPT LOGIC ==================== -->
  <script>
    // Theme Switcher with bulletproof localStorage
    function initTheme() {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      updateThemeIcons();
    }

    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcons();
    }

    function updateThemeIcons() {
      const isDark = document.documentElement.classList.contains('dark');
      const icon = document.getElementById('themeIcon');
      if (icon) {
        if (isDark) {
          icon.className = 'fa-solid fa-sun';
        } else {
          icon.className = 'fa-solid fa-moon';
        }
      }
    }

    // Call on load
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
        alert('Trình duyệt của bạn chưa hỗ trợ Web Speech API.');
      }
    }

    function speakCustom() {
      const input = document.getElementById('customSpeechInput');
      const text = input ? input.value.trim() : '';
      if (!text) {
        speakWord('Please type something into the box to listen.');
        return;
      }
      speakWord(text);
    }

    // Progress Tracking
    const visitedLessons = new Set();
    function markLessonVisited(idx) {
      visitedLessons.add(idx);
      updateProgress();
    }

    function updateProgress() {
      const total = 16;
      const count = visitedLessons.size;
      const pct = Math.round((count / total) * 100);
      document.getElementById('progressText').innerText = count + ' / ' + total + ' bài';
      document.getElementById('progressBar').style.width = pct + '%';
      
      visitedLessons.forEach(i => {
        const icon = document.getElementById('check-icon-' + i);
        if (icon) {
          icon.innerHTML = '<i class=\"fa-solid fa-circle-check text-emerald-500\"></i>';
        }
      });
    }

    // Search Filtering
    function filterLessons() {
      const query = document.getElementById('lessonSearchInput').value.toLowerCase().trim();
      const sections = document.querySelectorAll('.lesson-section');
      const navLinks = document.querySelectorAll('.lesson-nav-link');

      sections.forEach(sec => {
        const text = sec.innerText.toLowerCase();
        if (text.includes(query)) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });

      navLinks.forEach(link => {
        const text = link.innerText.toLowerCase();
        if (text.includes(query)) {
          link.classList.remove('hidden');
        } else {
          link.classList.add('hidden');
        }
      });
    }

    // Theme Filtering
    function filterByTheme(theme) {
      const buttons = document.querySelectorAll('.theme-filter-btn');
      buttons.forEach(btn => {
        if (btn.getAttribute('data-theme-btn') === theme) {
          btn.className = 'theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-sky-600 text-white text-center transition cursor-pointer';
        } else {
          btn.className = 'theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer';
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

    // Modal controls
    function openAudioStudioModal() {
      document.getElementById('audioStudioModal').classList.remove('hidden');
    }
    function closeAudioStudioModal() {
      document.getElementById('audioStudioModal').classList.add('hidden');
    }

    function openGrammarModal() {
      document.getElementById('grammarModal').classList.remove('hidden');
    }
    function closeGrammarModal() {
      document.getElementById('grammarModal').classList.add('hidden');
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
      if (score >= 38) title = "🏆 TRẠNG NGUYÊN TIẾNG ANH 7 (English Champion)";
      else if (score >= 32) title = "🥈 BẢNG NHÃN TIẾNG ANH 7 (Master of English)";
      else if (score >= 26) title = "🥉 THÁM HOA TIẾNG ANH 7 (English Scholar)";

      const resMsg = [
        'KẾT QUẢ ĐẤU TRƯỜNG TRẠNG NGUYÊN TIẾNG ANH 7:',
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

const outPath1 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tienganh_7.html';
const outPath2 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/english_7.html';

fs.writeFileSync(outPath1, fullHTML, 'utf8');
fs.writeFileSync(outPath2, fullHTML, 'utf8');

console.log('Successfully generated tienganh_7.html and english_7.html!');
