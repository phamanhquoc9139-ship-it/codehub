// Script biên dịch trang Tiếng Nga 7 (courses/tiengnga_7.html & courses/russian_7.html)
const fs = require('fs');
const path = require('path');

const p1 = require('./tiengnga7_data_p1.js');
const p2 = require('./tiengnga7_data_p2.js');
const { tiengNga7ExamQuestions } = require('./tiengnga7_exam.js');

const allThemes = [...p1.themesPart1, ...p2.themesPart2];
const russianCasesMatrix = p2.russianCasesMatrix;
const russianPhoneticsRules = p2.russianPhoneticsRules;

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeForJsSingleQuote(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '');
}

// Hàm sinh SVG Mindmap cho từng bài học tiếng Nga
function generateLessonSvg(lesson, lessonIndex) {
  const title = escapeHtml(lesson.title || `BÀI ${lessonIndex + 1}`);
  const vnTitle = escapeHtml(lesson.vnTitle || '');
  
  let branch1Title = "TỪ VỰNG TRỌNG TÂM (Лексика)";
  let branch1Desc = "Từ vựng cốt lõi, dấu trọng âm, phát âm bản ngữ và nghĩa ngữ cảnh.";
  if (lesson.vocab && lesson.vocab.length > 0) {
    branch1Desc = lesson.vocab.slice(0, 4).map(v => v.ru).join(' • ');
  }

  let branch2Title = "ĐIỂM NGỮ PHÁP (Грамматика)";
  let branch2Desc = "Cấu trúc biến cách, thì thể động từ và quy tắc ngữ pháp then chốt.";
  if (lesson.grammar && lesson.grammar.title) {
    branch2Title = escapeHtml(lesson.grammar.title.slice(0, 38));
    branch2Desc = escapeHtml(lesson.grammar.formula ? lesson.grammar.formula.split('\n')[0].slice(0, 80) : lesson.grammar.usage.slice(0, 80));
  }

  let branch3Title = "GIAO TIẾP & VĂN HÓA (Диалог и культура)";
  let branch3Desc = "Đoạn thoại mẫu thực tế, phản xạ giao tiếp và kiến thức văn hóa Nga - Việt.";
  if (lesson.dialogue && lesson.dialogue.situation) {
    branch3Desc = escapeHtml(lesson.dialogue.situation.slice(0, 80));
  }

  return `
    <div class="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-slate-900 p-2 sm:p-3 shadow-inner">
      <div class="flex items-center justify-between px-3 py-1 mb-1 border-b border-slate-800 text-[11px] font-bold text-slate-400">
        <span class="flex items-center gap-1.5">
          <i class="fa-solid fa-diagram-project text-blue-400"></i> CONCEPT MINDMAP VECTOR &bull; ${title.toUpperCase()}
        </span>
        <span class="text-slate-500 text-[10px]">Trực quan hóa cấu trúc cốt lõi</span>
      </div>
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="11.5" font-weight="900" letter-spacing="0.5">${title.slice(0, 26)}</text>
        <text x="135" y="103" text-anchor="middle" fill="#bfdbfe" font-size="9.5" font-weight="700">${vnTitle.slice(0, 26)}</text>
        <text x="135" y="125" text-anchor="middle" fill="#e0f2fe" font-size="8.5">Русский язык 7</text>
        <text x="135" y="145" text-anchor="middle" fill="#93c5fd" font-size="8">SGK Kết Nối Tri Thức (Tập 1 &amp; 2)</text>

        <path d="M 245 75 L 320 40" stroke="#60a5fa" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#60a5fa" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#60a5fa" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#2563eb" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#2563eb"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#bfdbfe" font-size="11" font-weight="800">${branch1Title}</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">${branch1Desc}</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#38bdf8"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#bfdbfe" font-size="11" font-weight="800">${branch2Title}</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">${branch2Desc}</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#1d4ed8" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#1d4ed8"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#bfdbfe" font-size="11" font-weight="800">${branch3Title}</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">${branch3Desc}</text>
        </g>
      </svg>
    </div>
  `;
}

console.log('Generating Tiếng Nga 7 HTML with identical structure to Tiếng Anh 7...');

let totalLessonsCount = 0;
const lessonList = [];
allThemes.forEach((theme, tIdx) => {
  theme.lessons.forEach((lesson, lIdx) => {
    lesson.themeNum = tIdx + 1;
    lesson.themeTitle = theme.title;
    lesson.globalIndex = totalLessonsCount;
    totalLessonsCount++;
    lessonList.push(lesson);
  });
});

let html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiếng Nga 7 — Sách Kết Nối Tri Thức (Tập 1 &amp; 2) | Nền Tảng Học Số CodeHub</title>
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
            },
            russia: {
              50: '#eff6ff',
              100: '#dbeafe',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a'
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
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-rose-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-blue-500/20">
            РУ
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-sm sm:text-base font-black tracking-tight text-gray-900 dark:text-white">TIẾNG NGA 7</h1>
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase tracking-wider">SGK Tiếng Nga 7</span>
            </div>
            <p class="text-[11px] text-gray-500 dark:text-gray-400 hidden sm:block">5 Chủ Điểm &bull; 16 Bài Học &bull; Bảng 6 Cách &bull; Tập 1 &amp; Tập 2</p>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Audio Studio Modal Button -->
        <button onclick="openAudioStudioModal()" class="px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center gap-1.5 transition border border-blue-200 dark:border-blue-800 cursor-pointer shadow-sm">
          <i class="fa-solid fa-headphones"></i>
          <span class="hidden md:inline">Phonetics Studio</span>
        </button>

        <!-- Grammar Matrix Modal Button -->
        <button onclick="openGrammarModal()" class="px-3 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center gap-1.5 transition border border-indigo-200 dark:border-indigo-800 cursor-pointer shadow-sm">
          <i class="fa-solid fa-table-list"></i>
          <span class="hidden md:inline">Sổ Tay 6 Cách</span>
        </button>

        <!-- Exam Modal Button -->
        <button onclick="openExamModal()" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-md shadow-blue-600/20 cursor-pointer">
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
            <input type="text" id="lessonSearchInput" onkeyup="filterLessons()" placeholder="Tìm Bài, sức khỏe, Moskva, ngữ pháp, 6 cách..."
                   class="w-full pl-9 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
          </div>

          <!-- Progress Bar -->
          <div class="space-y-1.5 pt-1">
            <div class="flex items-center justify-between text-[11px] font-bold text-gray-500 dark:text-gray-400">
              <span>Tiến độ học tập</span>
              <span id="progressText">0 / ${totalLessonsCount} bài</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <div id="progressBar" class="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
          </div>

          <!-- Theme Filter Chips -->
          <div class="pt-2 border-t border-gray-100 dark:border-gray-800 space-y-1.5">
            <div class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Lọc theo Chủ điểm</div>
            <div class="grid grid-cols-2 gap-1.5">
              <button onclick="filterByTheme('all')" class="theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-blue-600 text-white text-center transition cursor-pointer" data-theme-btn="all">
                Tất cả (${totalLessonsCount})
              </button>
              <button onclick="filterByTheme('1')" class="theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer" data-theme-btn="1">
                CĐ 1: Живое слово
              </button>
              <button onclick="filterByTheme('2')" class="theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer" data-theme-btn="2">
                CĐ 2: Береги платье
              </button>
              <button onclick="filterByTheme('3')" class="theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer" data-theme-btn="3">
                CĐ 3: В культуре
              </button>
              <button onclick="filterByTheme('4')" class="theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer" data-theme-btn="4">
                CĐ 4: Родной край
              </button>
              <button onclick="filterByTheme('5')" class="theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer col-span-2" data-theme-btn="5">
                CĐ 5: Учёба и труд
              </button>
            </div>
          </div>

        </div>

        <!-- Lesson Navigation List -->
        <div class="p-3 rounded-3xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 shadow-sm space-y-1 max-h-[50vh] overflow-y-auto scrollbar-thin" id="lessonNavList">
`;

lessonList.forEach((lesson, idx) => {
  html += `
          <a href="#${lesson.id}" onclick="markLessonVisited(${idx})" class="lesson-nav-link flex items-center justify-between p-2 rounded-xl text-xs hover:bg-gray-50 dark:hover:bg-gray-800/80 transition group" data-nav-id="${lesson.id}" data-theme-nav="${lesson.themeNum}">
            <div class="flex items-center gap-2 overflow-hidden">
              <span class="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold flex items-center justify-center text-[10px] shrink-0 font-mono">
                ${lesson.num}
              </span>
              <span class="truncate font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                ${escapeHtml(lesson.title)}
              </span>
            </div>
            <span id="check-icon-${idx}" class="text-[10px] text-gray-300 dark:text-gray-600">
              <i class="fa-regular fa-circle"></i>
            </span>
          </a>
  `;
});

html += `
        </div>

      </div>

    </aside>

    <!-- ==================== MAIN CONTENT ==================== -->
    <main class="flex-1 space-y-6">

      <!-- Hero Welcome Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="relative z-10 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-blue-100">
            <i class="fa-solid fa-graduation-cap"></i> CHƯƠNG TRÌNH GDPT 2018 &bull; TIẾNG NGA 7 (TẬP 1 &amp; 2)
          </div>
          <h2 class="text-2xl sm:text-3xl font-black leading-tight flex items-baseline gap-3 flex-wrap">
            <span>Kiến Thức Cốt Lõi Tiếng Nga 7</span>
            <span class="text-xl sm:text-2xl text-amber-300 font-bold opacity-90">Русский язык 7</span>
          </h2>
          <p class="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-2xl">
            Tổng hợp toàn diện 5 Chủ Điểm lớn và 16 Bài Học đúng theo phân phối SGK Tiếng Nga 7. Tích hợp Audio phát âm chuẩn bản ngữ Web Speech API (ru-RU), sơ đồ tư duy Vector SVG cho từng bài, sổ tay hệ thống 6 Cách và đấu trường Trạng Nguyên Tiếng Nga 60 phút.
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">16 Bài Học</div>
              <div class="text-[10px] text-blue-200 uppercase font-semibold">5 Chủ điểm SGK</div>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">350+</div>
              <div class="text-[10px] text-blue-200 uppercase font-semibold">Từ vựng &amp; Audio ru-RU</div>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">16 SVG</div>
              <div class="text-[10px] text-blue-200 uppercase font-semibold">Sơ đồ tư duy</div>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">40 Câu</div>
              <div class="text-[10px] text-blue-200 uppercase font-semibold">Đề thi Trạng Nguyên</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Render all Lessons -->
      <div class="space-y-8" id="lessonContainer">
`;

lessonList.forEach((lesson, idx) => {
  html += `
    <section id="${lesson.id}" data-theme="${lesson.themeNum}" class="lesson-section scroll-mt-20 rounded-3xl p-6 sm:p-8 bg-white dark:bg-gray-850 border-2 border-blue-200 dark:border-blue-900/60 shadow-lg space-y-6">
      
      <!-- Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-xl bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow flex items-center gap-1.5">
            <i class="fa-solid fa-compass"></i> CHỦ ĐIỂM ${lesson.themeNum}
          </span>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2 flex-wrap">
              <span>${escapeHtml(lesson.title)}</span>
              <button onclick="speakWord('${escapeForJsSingleQuote(lesson.title)}')" title="Nghe tiêu đề tiếng Nga" class="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:scale-110 transition flex items-center justify-center">
                <i class="fa-solid fa-volume-high text-xs"></i>
              </button>
            </h2>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              ${escapeHtml(lesson.vnTitle || '')}
            </p>
          </div>
        </div>
        ${lesson.goal ? `
          <div class="flex items-center gap-2 max-w-md text-right">
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400">
              <i class="fa-solid fa-bullseye text-[10px] mr-1"></i>${escapeHtml(lesson.goal)}
            </span>
          </div>
        ` : ''}
      </div>

      <!-- Vector SVG Mindmap -->
      ${generateLessonSvg(lesson, idx)}

      <!-- Section 1: Vocabulary & Getting Started -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2 uppercase tracking-wide">
            <i class="fa-solid fa-book-bookmark"></i> 1. Từ Vựng Trọng Tâm &amp; Ngữ Âm (Audio ru-RU)
          </h3>
          <span class="text-[11px] text-gray-500 dark:text-gray-400 italic">Dấu sắc biểu thị trọng âm chính của từ</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
  `;

  lesson.vocab.forEach(v => {
    html += `
          <div class="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 flex flex-col justify-between gap-2 shadow-sm hover:shadow transition">
            <div class="flex items-start justify-between gap-2">
              <div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="font-black text-gray-900 dark:text-white text-base">${escapeHtml(v.stress || v.ru)}</span>
                  ${v.type ? `<span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-medium italic">${escapeHtml(v.type)}</span>` : ''}
                </div>
                <div class="text-xs text-blue-900 dark:text-blue-200 font-semibold mt-1">${escapeHtml(v.vn)}</div>
              </div>
              <button onclick="speakWord('${escapeForJsSingleQuote(v.ru)}')" title="Nghe phát âm chuẩn" class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 shadow-sm">
                <i class="fa-solid fa-volume-high text-xs"></i>
              </button>
            </div>
          </div>
    `;
  });

  html += `
        </div>
      </div>
  `;

  // Section 2: Grammar Focus
  if (lesson.grammar && (lesson.grammar.title || lesson.grammar.formula)) {
    html += `
      <!-- Section 2: Grammar Focus -->
      <div class="space-y-3">
        <h3 class="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2 uppercase tracking-wide">
          <i class="fa-solid fa-shapes"></i> 2. Điểm Ngữ Pháp &amp; Cấu Trúc Then Chốt
        </h3>
        <div class="p-4 rounded-2xl bg-gradient-to-br from-blue-50/70 to-indigo-50/30 dark:from-gray-800 dark:to-gray-850 border border-blue-200 dark:border-blue-900/60 space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              <i class="fa-solid fa-book-open"></i>
            </span>
            <h4 class="font-black text-sm text-gray-900 dark:text-white">${escapeHtml(lesson.grammar.title || '')}</h4>
          </div>
          ${lesson.grammar.formula ? `
            <div class="p-3 rounded-xl bg-white dark:bg-gray-900 border border-blue-200/80 dark:border-blue-900 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 leading-relaxed whitespace-pre-line">
              <i class="fa-solid fa-code text-[11px] mr-1 text-slate-400"></i>${escapeHtml(lesson.grammar.formula)}
            </div>
          ` : ''}
          ${lesson.grammar.usage ? `
            <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">${escapeHtml(lesson.grammar.usage)}</p>
          ` : ''}
          ${lesson.grammar.examples && lesson.grammar.examples.length > 0 ? `
            <div class="space-y-1.5 pt-1">
              <div class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Ví dụ mẫu chuẩn:</div>
              ${lesson.grammar.examples.map(ex => `
                <div class="p-2.5 rounded-xl bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-start justify-between gap-2">
                  <span class="text-xs text-gray-800 dark:text-gray-200 font-medium">${escapeHtml(ex)}</span>
                  <button onclick="speakWord('${escapeForJsSingleQuote(ex.split('(')[0].trim())}')" title="Nghe câu ví dụ" class="shrink-0 w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:scale-105 transition flex items-center justify-center">
                    <i class="fa-solid fa-volume-high text-[10px]"></i>
                  </button>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // Section 3: Dialogue
  if (lesson.dialogue && lesson.dialogue.lines && lesson.dialogue.lines.length > 0) {
    html += `
      <!-- Section 3: Communication & Dialogue -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2 uppercase tracking-wide">
            <i class="fa-solid fa-comments"></i> 3. Hội Thoại Mẫu Thực Tế (Диалог)
          </h3>
          <button onclick="playFullDialogue('dlg_${lesson.id}')" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-play text-[10px]"></i> Nghe toàn bộ đoạn thoại
          </button>
        </div>
        ${lesson.dialogue.situation ? `
          <div class="text-xs text-gray-500 dark:text-gray-400 italic">
            <i class="fa-solid fa-circle-info text-blue-500 mr-1"></i> Tình huống: ${escapeHtml(lesson.dialogue.situation)}
          </div>
        ` : ''}
        <div id="dlg_${lesson.id}" class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/80 space-y-2.5">
    `;

    lesson.dialogue.lines.forEach(line => {
      html += `
          <div class="flex items-start gap-3 dlg-row p-2 rounded-xl transition" data-ru="${escapeHtml(line.text)}">
            <span class="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              ${escapeHtml(line.spk ? line.spk.charAt(0) : 'A')}
            </span>
            <div class="flex-1 space-y-0.5">
              <div class="text-[11px] font-bold text-blue-700 dark:text-blue-300">${escapeHtml(line.spk || 'Nhân vật')}</div>
              <div class="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">${escapeHtml(line.text)}</div>
            </div>
            <button onclick="speakWord('${escapeForJsSingleQuote(line.text)}')" title="Nghe câu này" class="shrink-0 w-7 h-7 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition flex items-center justify-center">
              <i class="fa-solid fa-volume-high text-xs"></i>
            </button>
          </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  }

  // Section 4: Culture & Extension
  html += `
      <!-- Section 4: Culture & Digital Safety -->
      <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
        <i class="fa-solid fa-landmark text-amber-500 text-base shrink-0 mt-0.5"></i>
        <div class="space-y-1">
          <span class="font-bold uppercase tracking-wider text-[11px] text-amber-600 dark:text-amber-400">Góc Văn Hóa Nga &bull; Nhịp Cầu Hữu Nghị:</span>
          <p class="leading-relaxed">Tìm hiểu đất nước, con người Nga qua các danh thắng lịch sử (Điện Kremlin, Quảng trường Đỏ, bảo tàng Ermitage), tình cảm yêu mến Chủ tịch Hồ Chí Minh, truyền thống tôn sư trọng đạo và kỹ năng sử dụng mạng Internet an toàn, văn minh.</p>
        </div>
      </div>
  `;

  // Section 5: Mini-Quiz
  if (lesson.quiz && lesson.quiz.length > 0) {
    html += `
      <!-- Section 5: Mini-Quiz -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2 uppercase tracking-wide">
            <i class="fa-solid fa-circle-question"></i> 5. Luyện Tập Nhanh Tại Lớp (Mini-Quiz)
          </h3>
          <span class="text-[11px] text-gray-500 dark:text-gray-400">Chọn đáp án đúng để củng cố bài học</span>
        </div>
        <div class="space-y-3">
    `;

    lesson.quiz.forEach((q, qIdx) => {
      const correctIdx = q.a !== undefined ? q.a : (q.answer !== undefined ? q.answer : 0);
      const explanation = escapeHtml(q.exp || q.explain || '');

      html += `
          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/60 space-y-2">
            <div class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-start gap-2">
              <span class="text-blue-600 dark:text-blue-400 shrink-0">Câu ${qIdx + 1}:</span>
              <span>${escapeHtml(q.q)}</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
      `;

      q.options.forEach((opt, oIdx) => {
        html += `
              <button onclick="checkAnswer('${lesson.id}', ${qIdx}, ${oIdx}, ${correctIdx}, this)" class="quiz-btn w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-medium hover:border-blue-400 dark:hover:border-blue-500 transition cursor-pointer flex items-center justify-between">
                <span>${escapeHtml(opt)}</span>
                <i class="fa-regular fa-circle text-gray-300 dark:text-gray-600 text-[10px]"></i>
              </button>
        `;
      });

      html += `
            </div>
            <div id="quiz-fb-${lesson.id}-${qIdx}" class="hidden p-3 rounded-xl text-xs leading-relaxed mt-2" data-exp="${explanation}"></div>
          </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  }

  html += `
    </section>
  `;
});

html += `
      </div>

    </main>

  </div>

  <!-- ==================== MODAL 1: AUDIO / PHONETICS STUDIO ==================== -->
  <div id="audioStudioModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-300 dark:border-blue-800 shadow-2xl space-y-5 p-6 modal-content-card">
      <div class="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-800">
        <div class="flex items-center gap-2.5 text-blue-600 dark:text-blue-400">
          <i class="fa-solid fa-headphones text-xl"></i>
          <div>
            <h3 class="text-base sm:text-lg font-black text-gray-900 dark:text-white">Phonetics Studio Tiếng Nga (ru-RU)</h3>
            <p class="text-[11px] text-gray-500 dark:text-gray-400">Luyện nghe và phát âm chuẩn tiếng Nga Web Speech API</p>
          </div>
        </div>
        <button onclick="closeAudioStudioModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-blue-600 transition flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Live Pronunciation Tester -->
      <div class="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-2">
        <div class="text-xs font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
          <i class="fa-solid fa-bullhorn text-blue-500"></i> Thử nghiệm phát âm câu tiếng Nga bất kì:
        </div>
        <div class="flex gap-2">
          <input type="text" id="customSpeechInput" placeholder="Nhập câu tiếng Nga, ví dụ: Здравствуйте, как дела?..." class="flex-1 px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <button onclick="speakCustom()" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow cursor-pointer">
            Phát Âm
          </button>
        </div>
      </div>

      <!-- Phonetics Rules -->
      <div class="space-y-2 pt-1">
        <div class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">4 Quy Tắc Ngữ Âm &amp; Trọng Âm Cốt Lõi</div>
        <div class="space-y-2">
`;

russianPhoneticsRules.forEach(r => {
  html += `
          <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs space-y-1">
            <div class="font-bold text-blue-700 dark:text-blue-400">${escapeHtml(r.rule)}</div>
            <p class="text-gray-600 dark:text-gray-300">${escapeHtml(r.desc)}</p>
            <div class="text-[11px] text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900/60 p-2 rounded flex items-center justify-between">
              <span>Ví dụ: ${escapeHtml(r.example)}</span>
              <button onclick="speakWord('${escapeForJsSingleQuote(r.example.split(' ')[0])}')" class="text-blue-600 hover:scale-110 transition ml-2"><i class="fa-solid fa-volume-high text-xs"></i></button>
            </div>
          </div>
  `;
});

html += `
        </div>
      </div>

      <div class="pt-3 border-t border-gray-200 dark:border-gray-800 flex justify-end">
        <button onclick="closeAudioStudioModal()" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold rounded-xl hover:bg-gray-300 transition cursor-pointer">
          Đóng Studio
        </button>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 2: 6 CASES & GRAMMAR MATRIX ==================== -->
  <div id="grammarModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-blue-300 dark:border-blue-900 shadow-2xl space-y-5 p-6 modal-content-card">
      <div class="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-800">
        <div class="flex items-center gap-2.5 text-blue-600 dark:text-blue-400">
          <i class="fa-solid fa-table-list text-xl"></i>
          <div>
            <h3 class="text-base sm:text-lg font-black text-gray-900 dark:text-white">Bảng Tra Cứu Hệ Thống 6 Cách Tiếng Nga</h3>
            <p class="text-[11px] text-gray-500 dark:text-gray-400">Tổng hợp câu hỏi, chức năng và ví dụ mẫu cho cả 6 cách</p>
          </div>
        </div>
        <button onclick="closeGrammarModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-blue-600 transition flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- 6 Cases Matrix Table -->
      <div class="space-y-2">
        <div class="overflow-x-auto border border-gray-200 dark:border-gray-800 rounded-2xl">
          <table class="w-full text-xs text-left">
            <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wider">
              <tr>
                <th class="p-3">Cách</th>
                <th class="p-3">Tên Tiếng Nga &amp; Việt</th>
                <th class="p-3">Câu Hỏi Đi Kèm</th>
                <th class="p-3">Chức Năng &amp; Ví Dụ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
`;

russianCasesMatrix.forEach(cm => {
  html += `
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition">
                <td class="p-3 font-bold text-blue-600 whitespace-nowrap">${escapeHtml(cm.caseNum)}</td>
                <td class="p-3 space-y-0.5">
                  <div class="font-bold text-gray-900 dark:text-white">${escapeHtml(cm.nameRu)}</div>
                  <div class="text-[11px] text-gray-500">${escapeHtml(cm.nameVn)}</div>
                </td>
                <td class="p-3 font-mono text-blue-700 dark:text-blue-300">${escapeHtml(cm.questions)}</td>
                <td class="p-3 space-y-1">
                  <p class="text-gray-600 dark:text-gray-300">${escapeHtml(cm.functions)}</p>
                  <div class="text-[11px] font-semibold text-blue-800 dark:text-blue-200 italic bg-blue-50/50 dark:bg-blue-950/30 p-1.5 rounded">
                    ${escapeHtml(cm.examples)}
                  </div>
                </td>
              </tr>
  `;
});

html += `
            </tbody>
          </table>
        </div>
      </div>

      <div class="pt-3 border-t border-gray-200 dark:border-gray-800 flex justify-end">
        <button onclick="closeGrammarModal()" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold rounded-xl hover:bg-gray-300 transition cursor-pointer">
          Đóng Sổ Tay
        </button>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 3: EXAM (60:00) ==================== -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border-2 border-blue-600 shadow-2xl flex flex-col modal-content-card">
      
      <!-- Exam Sticky Header -->
      <div class="sticky top-0 z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div>
          <div class="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 flex items-center gap-1.5">
            <i class="fa-solid fa-trophy text-amber-400"></i> ĐẤU TRƯỜNG TRẠNG NGUYÊN TIẾNG NGA 7
          </div>
          <h3 class="text-base sm:text-lg font-black text-gray-900 dark:text-white">Đề Thi Trắc Nghiệm Tổng Hợp SGK (40 Câu)</h3>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 font-mono font-black text-sm border border-blue-200 dark:border-blue-800">
            <i class="fa-regular fa-clock text-xs"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-blue-600 transition flex items-center justify-center cursor-pointer">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div class="p-6 space-y-6 flex-1 overflow-y-auto">
        <div class="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-circle-info text-amber-500"></i>
            <span>Thời gian: <strong>60 phút</strong>. Gồm: Ngữ âm trọng âm, Hệ thống 6 cách, Thể động từ &amp; Đọc hiểu văn hóa.</span>
          </div>
          <div class="font-bold shrink-0">Đã trả lời: <span id="answeredCount" class="text-blue-600 dark:text-blue-400">0</span>/40</div>
        </div>

        <!-- Questions Container -->
        <div id="examQuestionsContainer" class="space-y-4"></div>

        <div class="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <span class="text-xs text-gray-500">Kiểm tra kĩ tất cả các câu trước khi nộp bài.</span>
          <button onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-extrabold text-xs shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-paper-plane"></i> Nộp Bài &amp; Xem Điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8 px-4 text-center text-xs text-gray-500 space-y-2">
    <div class="flex items-center justify-center gap-2 text-blue-600 font-bold text-sm">
      <i class="fa-solid fa-graduation-cap"></i> Nền Tảng Học Số CodeHub &bull; Tiếng Nga 7
    </div>
    <p>Biên soạn đối chiếu chuẩn theo SGK Tiếng Nga 7 (Tập 1 &amp; Tập 2) — Sách Kết Nối Tri Thức Với Cuộc Sống (GDPT 2018).</p>
    <p class="text-[11px] text-gray-400">Tích hợp Web Speech API công nghệ tổng hợp giọng nói tiếng Nga ru-RU tốc độ chuẩn 0.88x.</p>
  </footer>

  <!-- ==================== JAVASCRIPT LOGIC ==================== -->
  <script>
    // Theme Mode Toggle (Matches Tiếng Anh 7)
    function toggleDarkMode() {
      const htmlEl = document.documentElement;
      const themeIcon = document.getElementById('themeIcon');
      if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
      } else {
        htmlEl.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-amber-400';
      }
    }

    // Initialize Theme
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      const icon = document.getElementById('themeIcon');
      if (icon) icon.className = 'fa-solid fa-sun text-amber-400';
    } else {
      document.documentElement.classList.remove('dark');
      const icon = document.getElementById('themeIcon');
      if (icon) icon.className = 'fa-solid fa-moon';
    }

    // Modal Handlers
    function openAudioStudioModal() {
      document.getElementById('audioStudioModal').classList.remove('hidden');
      document.getElementById('audioStudioModal').classList.add('flex');
    }
    function closeAudioStudioModal() {
      document.getElementById('audioStudioModal').classList.add('hidden');
      document.getElementById('audioStudioModal').classList.remove('flex');
    }

    function openGrammarModal() {
      document.getElementById('grammarModal').classList.remove('hidden');
      document.getElementById('grammarModal').classList.add('flex');
    }
    function closeGrammarModal() {
      document.getElementById('grammarModal').classList.add('hidden');
      document.getElementById('grammarModal').classList.remove('flex');
    }

    // Web Speech API for Pronunciation (ru-RU)
    function speakWord(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        // Xóa dấu trọng âm nếu có để Web Speech API phát âm chuẩn xác
        const cleanText = text.replace(/[́̀]/g, '');
        const u = new SpeechSynthesisUtterance(cleanText);
        u.lang = 'ru-RU';
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
        speakWord('Здравствуйте, как дела?');
        return;
      }
      speakWord(text);
    }

    // Dialogue playback sequence
    function playFullDialogue(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const rows = container.querySelectorAll('.dlg-row');
      if (!rows || rows.length === 0) return;

      window.speechSynthesis.cancel();
      let currentIndex = 0;

      function speakNext() {
        if (currentIndex >= rows.length) return;
        const row = rows[currentIndex];
        const ru = row.getAttribute('data-ru');
        const cleanRu = ru.replace(/[́̀]/g, '');
        const u = new SpeechSynthesisUtterance(cleanRu);
        u.lang = 'ru-RU';
        u.rate = 0.88;
        row.classList.add('bg-blue-100', 'dark:bg-blue-950/70');
        u.onend = function() {
          row.classList.remove('bg-blue-100', 'dark:bg-blue-950/70');
          currentIndex++;
          setTimeout(speakNext, 350);
        };
        u.onerror = function() {
          row.classList.remove('bg-blue-100', 'dark:bg-blue-950/70');
          currentIndex++;
          speakNext();
        };
        window.speechSynthesis.speak(u);
      }

      speakNext();
    }

    // Progress Tracking
    const visitedLessons = new Set();
    function markLessonVisited(idx) {
      visitedLessons.add(idx);
      updateProgress();
    }

    function updateProgress() {
      const total = ${totalLessonsCount};
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
          btn.className = 'theme-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-blue-600 text-white text-center transition cursor-pointer';
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
        const exp = fb.getAttribute('data-exp') || '';
        if (chosenIdx === correctIdx) {
          fb.className = 'p-3 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300';
          fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-check mr-1\"></i> Chính xác!</strong> ' + exp;
        } else {
          fb.className = 'p-3 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300';
          fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-xmark mr-1\"></i> Chưa đúng!</strong> ' + exp;
        }
      }
    }

    // Exam 40 Questions Data & Logic
    const examQuestionsData = ${JSON.stringify(tiengNga7ExamQuestions)};
    let examTimeRemaining = 3600; // 60 minutes
    let examInterval = null;
    const userExamAnswers = {};

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      document.getElementById('examModal').classList.add('flex');
      if (!document.getElementById('examQuestionsContainer').hasChildNodes()) {
        renderExamQuestions();
      }
      if (!examInterval) {
        startExamTimer();
      }
    }

    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
      document.getElementById('examModal').classList.remove('flex');
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
            <span class="w-6 h-6 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              \${qIdx + 1}
            </span>
            <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-relaxed">
              \${item.q}
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            \${item.options.map((opt, oIdx) => \`
              <label class="exam-opt-label flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 cursor-pointer transition text-xs"
                     id="exam-label-\${qIdx}-\${oIdx}">
                <input type="radio" name="exam_q_\${qIdx}" value="\${oIdx}" onchange="selectExamOption(\${qIdx}, \${oIdx})" class="accent-blue-600">
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
      let title = "Tú Tài Tiếng Nga";
      if (score >= 36) title = "🏆 TRẠNG NGUYÊN TIẾNG NGA 7 (Russian Champion)";
      else if (score >= 30) title = "🥈 BẢNG NHÃN TIẾNG NGA 7 (Master of Russian)";
      else if (score >= 22) title = "🥉 THÁM HOA TIẾNG NGA 7 (Russian Scholar)";

      const resMsg = [
        'KẾT QUẢ ĐẤU TRƯỜNG TRẠNG NGUYÊN TIẾNG NGA 7:',
        '--------------------------------------------',
        'Điểm số: ' + score + ' / 40 câu đúng (' + ((score / 40) * 10).toFixed(1) + '/10 điểm)',
        'Danh hiệu: ' + title,
        'Hãy xem lại phần giải thích chi tiết trong đề thi!'
      ].join('\\n');
      alert(resMsg);
    }
  </script>
</body>
</html>
`;

const outputPath1 = path.join(__dirname, '../courses/tiengnga_7.html');
const outputPath2 = path.join(__dirname, '../courses/russian_7.html');

fs.writeFileSync(outputPath1, html, 'utf8');
fs.writeFileSync(outputPath2, html, 'utf8');

console.log('Successfully written Tiếng Nga 7 to:');
console.log('-', outputPath1, '(' + html.length + ' bytes)');
console.log('-', outputPath2, '(' + html.length + ' bytes)');
