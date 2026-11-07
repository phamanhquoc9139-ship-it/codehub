// scratch/build_sinhhoc12.js
// Biên dịch trọn bộ khóa học Sinh học 12 (8 Chương, 35 Bài) cho cs-learning-platform
const fs = require('fs');
const path = require('path');

const data = require('./sinhhoc12_data.js');
const diagrams = require('./sinhhoc12_diagrams.js');

console.log('Compiling Sinh học 12 course files...');

function formatInline(str) {
  if (!str) return '';
  return String(str)
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-emerald-700 dark:text-emerald-300 font-medium">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-emerald-100/80 dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-semibold">$1</code>');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const outputPath1 = path.resolve(__dirname, '../courses/sinhhoc_12.html');
const outputPath2 = path.resolve(__dirname, '../courses/sinhhoc12.html');

// 1. Generate Sidebar Chapter and Lesson Navigation Items
const sidebarChaptersHtml = data.chapters.map(ch => {
  const lessonLinks = ch.lessons.map(num => {
    const l = data.lessons[num];
    if (!l) return '';
    return `
      <a href="#bai-${num}" data-lesson-title="Bài ${num} ${l.title}" class="sidebar-lesson-link flex items-center gap-2 py-1.5 px-2.5 rounded-lg text-xs text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800 transition">
        <span class="font-bold text-[11px] shrink-0 ${l.isPractical ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}">Bài ${num}:</span>
        <span class="truncate">${escapeHtml(l.title)}</span>
      </a>
    `;
  }).join('');

  return `
    <div class="sidebar-chapter-group mb-4">
      <div class="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100 py-1.5 px-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 mb-1 text-xs">
        <span class="flex items-center gap-2 truncate">
          <i class="fas ${ch.icon} text-emerald-500 text-[11px]"></i>
          <span class="truncate">${escapeHtml(ch.shortTitle)}</span>
        </span>
        <span class="text-[10px] text-slate-500 font-semibold shrink-0 ml-1">${ch.lessons.length} bài</span>
      </div>
      <div class="pl-2 ml-2 border-l-2 border-emerald-300 dark:border-emerald-800/60 space-y-0.5">
        ${lessonLinks}
      </div>
    </div>
  `;
}).join('\n');

// 2. Generate Quick Lesson Picker Grid for Hero section
const quickPickerHtml = data.chapters.map(ch => `
  <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
    <div class="flex items-center gap-2 mb-2 font-bold text-xs text-slate-900 dark:text-slate-100">
      <i class="fas ${ch.icon} text-emerald-500"></i>
      <span class="truncate">${escapeHtml(ch.shortTitle)}</span>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
      ${ch.lessons.map(num => {
        const l = data.lessons[num];
        return `
          <a href="#bai-${num}" class="p-1.5 rounded-lg text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600 border border-slate-200 dark:border-slate-700/60 truncate transition" title="${l.title}">
            B${num}. ${escapeHtml(l.title.split(':')[0].replace('Thực hành', 'TH').replace('Dự án', 'DA'))}
          </a>
        `;
      }).join('')}
    </div>
  </div>
`).join('\n');

// 3. Generate 35 Lesson Articles
const lessonsHtml = [];
for (let num = 1; num <= 35; num++) {
  const l = data.lessons[num];
  if (!l) continue;

  const isPrac = l.isPractical;
  const badgeColor = isPrac ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800' : 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800';
  const badgeText = isPrac ? 'THỰC HÀNH / DỰ ÁN' : 'LÍ THUYẾT CỐT LÕI';

  // Specific Diagrams mapping
  let diagramHtml = '';
  if (num === 1) diagramHtml = diagrams.dnaReplicationFork;
  if (num === 3) diagramHtml = diagrams.operonLac;
  if (num === 7) diagramHtml = diagrams.chromosomeStructure;
  if (num === 29) diagramHtml = diagrams.ecologicalPyramid;

  // Sections rendering
  const sectionsHtml = (l.sections || []).map(sec => `
    <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800/80 mb-4">
      <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          ${escapeHtml(sec.title)}
        </h4>
        <span class="text-[11px] px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-500 font-semibold border border-slate-200 dark:border-slate-700">
          ${escapeHtml(sec.badge)}
        </span>
      </div>
      <div class="space-y-2.5">
        ${sec.points.map(pt => `
          <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <span class="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold shrink-0 mt-0.5">✓</span>
            <div class="flex-1">${formatInline(pt)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Quizzes rendering
  const quizzesHtml = (l.quizzes || []).map((qz, qIdx) => `
    <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 mb-3" id="quiz-${num}-${qIdx}">
      <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-3">
        <span class="inline-block px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 font-bold mr-1">Câu ${qIdx + 1}</span>
        ${formatInline(qz.q)}
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${qz.options.map((opt, oIdx) => `
          <button type="button" onclick="checkQuiz(${num}, ${qIdx}, ${oIdx}, ${qz.answer})" class="quiz-btn-${num}-${qIdx} text-left p-2.5 rounded-lg text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-slate-800 transition cursor-pointer">
            ${formatInline(opt)}
          </button>
        `).join('')}
      </div>
      <div id="quiz-explain-${num}-${qIdx}" class="hidden mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed"></div>
    </div>
  `).join('');

  lessonsHtml.push(`
    <article id="bai-${num}" class="lesson-article scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs mb-10 transition">
      <!-- Header Lesson -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800 mb-5">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${badgeColor}">${badgeText}</span>
            <span class="text-xs font-bold text-slate-400">Bài ${num} • Sinh Học 12 KNTT</span>
          </div>
          <h3 class="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
            Bài ${num}. ${escapeHtml(l.title)}
          </h3>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            ${escapeHtml(l.subtitle || '')}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            Chương ${l.chapter}
          </span>
        </div>
      </div>

      <!-- Objective Card -->
      <div class="p-3.5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 mb-6 flex items-start gap-3">
        <span class="text-emerald-600 dark:text-emerald-400 text-base mt-0.5"><i class="fas fa-bullseye"></i></span>
        <div class="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed">
          <strong class="font-bold">Mục tiêu cốt lõi:</strong> ${formatInline(l.objectives)}
        </div>
      </div>

      <!-- Theory & Practice Sections -->
      <div class="space-y-4">
        ${sectionsHtml}
      </div>

      <!-- Embedded Vector Diagram (if any) -->
      ${diagramHtml}

      <!-- Interactive Mini Quizzes -->
      <div class="mt-7 pt-5 border-t border-slate-100 dark:border-slate-800">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-question text-emerald-500"></i> Luyện tập củng cố (3 câu hỏi trắc nghiệm)
          </h4>
          <span class="text-[11px] text-slate-400 font-medium">Chấm điểm &amp; giải thích tức thì</span>
        </div>
        ${quizzesHtml}
      </div>
    </article>
  `);
}

// 4. Generate Formula Table Rows
const formulaRowsHtml = data.formulaTable.map((row, idx) => `
  <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-850/50 transition">
    <td class="p-3.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 border-b border-slate-100 dark:border-slate-800">${idx + 1}. ${escapeHtml(row.topic)}</td>
    <td class="p-3.5 text-xs font-mono font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/40">${escapeHtml(row.formula)}</td>
    <td class="p-3.5 text-xs text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 leading-relaxed">${escapeHtml(row.note)}</td>
  </tr>
`).join('');

// 5. Generate Subject Summary Cards (3 Trụ Cột)
const summaryCardsHtml = data.subjectSummaryCards.map(c => `
  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
    <div class="flex items-center gap-3 mb-2.5">
      <span class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
        <i class="fas ${c.icon}"></i>
      </span>
      <h4 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">${escapeHtml(c.title)}</h4>
    </div>
    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
      ${formatInline(c.summary)}
    </p>
  </div>
`).join('');

// 6. Explanations map for in-lesson mini quizzes
const allExplanations = {};
for (let num = 1; num <= 35; num++) {
  const l = data.lessons[num];
  if (l && l.quizzes) {
    allExplanations[num] = l.quizzes.map(q => q.explain);
  }
}

// Build Full HTML
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sinh Học 12 — Trọn Bộ 8 Chương 35 Bài | Kết Nối Tri Thức | CodeHub</title>
  
  <!-- Tailwind CSS & FontAwesome -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- Google Fonts: Inter & Outfit -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- KaTeX for math & chemical notation -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}]});"></script>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Outfit', 'sans-serif']
          },
          colors: {
            slate: {
              850: '#111827',
              950: '#090d16'
            }
          }
        }
      }
    };

    // Dark mode init
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>

  <style>
    body { font-family: 'Inter', sans-serif; }
    h1, h2, h3, h4, .font-heading { font-family: 'Outfit', sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-emerald-500 selection:text-white">

  <!-- TOP STICKY NAVBAR -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Logo & Subject Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition" title="Quay lại trang chủ">
          <i class="fas fa-arrow-left"></i>
        </a>
        <div class="flex items-center gap-2.5">
          <span class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-xs text-lg font-black">
            <i class="fas fa-dna"></i>
          </span>
          <div>
            <h1 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight flex items-center gap-2">
              Sinh Học 12
              <span class="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                KẾT NỐI TRI THỨC
              </span>
            </h1>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">Đủ 8 Chương • 35 Bài học toàn diện</p>
          </div>
        </div>
      </div>

      <!-- Right: Actions -->
      <div class="flex items-center gap-2">
        <!-- Quick Search (Ctrl+K) -->
        <button onclick="openModal('searchModal')" class="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs text-slate-600 dark:text-slate-300 transition" title="Tìm kiếm bài học">
          <i class="fas fa-search text-emerald-500"></i>
          <span>Tìm nhanh...</span>
          <kbd class="px-1.5 py-0.5 rounded text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono">Ctrl K</kbd>
        </button>

        <!-- Sổ tay công thức -->
        <a href="#bang-cong-thuc" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 transition">
          <i class="fas fa-table-list text-emerald-500"></i> Bảng Công Thức
        </a>

        <!-- Đấu trường Trạng Nguyên -->
        <button onclick="startExam()" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold shadow-xs transition">
          <i class="fas fa-trophy text-amber-300"></i> Đấu Trường 45:00
        </button>

        <!-- Dark/Light toggle -->
        <button onclick="toggleDarkMode()" class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition">
          <i class="fas fa-moon dark:hidden"></i>
          <i class="fas fa-sun hidden dark:block text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- MAIN CONTAINER WITH SIDEBAR & CONTENT -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="flex flex-col lg:flex-row gap-8 items-start">

      <!-- LEFT STICKY SIDEBAR NAVIGATION -->
      <aside class="w-full lg:w-80 shrink-0 lg:sticky lg:top-24 max-h-[calc(100vh-7rem)] overflow-hidden flex flex-col rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xs">
        
        <!-- Header Info Card in Sidebar -->
        <div class="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-200/60 dark:border-emerald-800/60 mb-3">
          <div class="flex items-center justify-between mb-1">
            <span class="text-[10px] font-extrabold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">MỤC LỤC CHỌN BÀI</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">35 Bài • 8 Chương</span>
          </div>
          <div class="text-xs font-bold text-slate-800 dark:text-slate-100">Bấm bài học bất kì để học ngay</div>
          
          <!-- Instant filter inside sidebar -->
          <div class="mt-2.5">
            <input type="text" oninput="filterSidebar(this.value)" placeholder="🔍 Lọc bài học..." class="w-full px-2.5 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500">
          </div>
        </div>

        <!-- Full Chapter & Lesson Tree Navigation -->
        <nav id="sidebar-nav" class="flex-1 overflow-y-auto pr-1 custom-scrollbar text-xs">
          ${sidebarChaptersHtml}

          <!-- Special Sections in Sidebar -->
          <div class="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800">
            <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">TIỆN ÍCH &amp; TỔNG HỢP</div>
            <div class="space-y-1">
              <a href="#bang-cong-thuc" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 transition">
                <span>📑 Bảng công thức &amp; sơ đồ trọng tâm</span>
              </a>
              <a href="#so-do-tong-ket" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 transition">
                <span>🌳 Sơ đồ tổng kết 3 trụ cột</span>
              </a>
              <button type="button" onclick="startExam()" class="w-full text-left flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-rose-600 dark:text-rose-400 font-bold hover:bg-rose-50 dark:hover:bg-rose-950/40 transition">
                <span>🏆 Đấu trường 20 câu 45 phút</span>
              </button>
            </div>
          </div>
        </nav>
      </aside>

      <!-- RIGHT MAIN CONTENT COLUMN -->
      <main class="flex-1 min-w-0 w-full space-y-8">
        
        <!-- HERO OVERVIEW BANNER -->
        <section class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-slate-900 text-white shadow-md relative overflow-hidden">
          <div class="relative z-10">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-black bg-white/20 text-white backdrop-blur-xs mb-3">
              BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
            </span>
            <h2 class="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-2">
              Sinh Học 12 — Hệ Thống Kiến Thức Toàn Diện Đầy Đủ Theo Bài
            </h2>
            <p class="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed mb-6">
              Hệ thống hóa toàn bộ 8 chương, 35 bài học theo chuẩn khung chương trình GDPT mới. Đầy đủ lí thuyết chuyên sâu, quy trình thực hành thực nghiệm, sơ đồ vector SVG trực quan, 105 câu hỏi trắc nghiệm tự kiểm tra và Đấu trường Trạng Nguyên 45:00.
            </p>

            <!-- Metrics Badges -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div class="text-xl sm:text-2xl font-black text-white">8</div>
                <div class="text-[11px] text-emerald-200 font-semibold uppercase">Chương Trọng Tâm</div>
              </div>
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div class="text-xl sm:text-2xl font-black text-white">35</div>
                <div class="text-[11px] text-emerald-200 font-semibold uppercase">Bài Học &amp; Thực Hành</div>
              </div>
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div class="text-xl sm:text-2xl font-black text-white">105</div>
                <div class="text-[11px] text-emerald-200 font-semibold uppercase">Câu Trắc Nghiệm Có Lời Giải</div>
              </div>
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div class="text-xl sm:text-2xl font-black text-white">20 CÂU</div>
                <div class="text-[11px] text-emerald-200 font-semibold uppercase">Đấu Trường 45 Phút</div>
              </div>
            </div>
          </div>
        </section>

        <!-- QUICK LESSON PICKER SECTION -->
        <section class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs">
          <div class="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div class="flex items-center gap-2.5">
              <span class="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 text-base">📚</span>
              <div>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Mục Lục 35 Bài Học — Chọn Bài Học Nhanh</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">Bấm vào bất kì bài học nào để cuộn trang đến nội dung bài tương ứng.</p>
              </div>
            </div>
            <span class="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Đủ 8 Chương</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            ${quickPickerHtml}
          </div>
        </section>

        <!-- 35 LESSON ARTICLES -->
        <div class="space-y-4">
          ${lessonsHtml.join('\n')}
        </div>

        <!-- SPECIAL SECTION 1: BẢNG CÔNG THỨC VÀ SƠ ĐỒ TRỌNG TÂM -->
        <section id="bang-cong-thuc" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-4">
          <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <span class="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl shadow-xs shrink-0">
              <i class="fas fa-table-list"></i>
            </span>
            <div>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">TỔNG HỢP TOÀN KHÓA</span>
              <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">Bảng Công Thức và Sơ Đồ Trọng Tâm</h3>
            </div>
          </div>

          <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-slate-800 dark:bg-slate-950 text-white text-[11px] uppercase tracking-wider">
                  <th class="p-3.5 font-bold">Nội dung</th>
                  <th class="p-3.5 font-bold">Biểu thức / Luồng quy luật</th>
                  <th class="p-3.5 font-bold">Điều kiện hoặc cách hiểu khoa học</th>
                </tr>
              </thead>
              <tbody>
                ${formulaRowsHtml}
              </tbody>
            </table>
          </div>
        </section>

        <!-- SPECIAL SECTION 2: SƠ ĐỒ TỔNG KẾT MÔN HỌC (3 TRỤ CỘT) -->
        <section id="so-do-tong-ket" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30 dark:from-emerald-950/20 dark:via-slate-900 dark:to-slate-900 border border-emerald-200/70 dark:border-emerald-900/40 shadow-xs space-y-4">
          <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <span class="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center text-xl shadow-xs shrink-0">
              <i class="fas fa-diagram-project"></i>
            </span>
            <div>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300">TỔNG KẾT KHÁI NIỆM</span>
              <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">Sơ Đồ Tổng Kết Môn Học (3 Trụ Cột Sinh Học 12)</h3>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${summaryCardsHtml}
          </div>
        </section>

        <!-- SPECIAL SECTION 3: NGUỒN VÀ TÀI LIỆU THAM KHẢO -->
        <section class="p-6 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2">
          <h4 class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
            <i class="fas fa-book-bookmark text-emerald-500"></i> Nguồn tài liệu &amp; Bản quyền học liệu
          </h4>
          <p class="leading-relaxed">
            Tổng hợp và biên soạn khoa học theo sách giáo khoa <strong>Sinh học 12, bộ Kết nối tri thức với cuộc sống</strong>, gồm 8 chương và 35 bài. Nội dung lí thuyết, các câu hỏi và quy trình hoạt động thực hành được diễn giải, tinh chỉnh tối ưu cho nền tảng học tập số, không sao chép nguyên văn toàn bộ sách gốc.
          </p>
        </section>

      </main>

    </div>
  </div>

  <!-- MODAL: QUICK SEARCH (CTRL + K) -->
  <div id="searchModal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 px-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fas fa-search text-emerald-600 dark:text-emerald-400"></i>
        <input id="global-search-input" type="text" oninput="runGlobalSearch(this.value)"
          placeholder="Nhập tên bài học, khái niệm (Operon lac, Mendel, Hardy-Weinberg, diễn thế sinh thái)..."
          class="w-full text-sm text-slate-800 dark:text-slate-100 bg-transparent focus:outline-none" />
        <button type="button" onclick="closeModal('searchModal')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer">ESC</button>
      </div>
      <div id="global-search-results" class="max-h-96 overflow-y-auto p-3 space-y-1.5 custom-scrollbar"></div>
    </div>
  </div>

  <!-- MODAL: ĐẤU TRƯỜNG TRẠNG NGUYÊN 45 PHÚT (20 CÂU TRẮC NGHIỆM) -->
  <div id="examModal" class="fixed inset-0 z-50 hidden bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
      <div class="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 p-5 text-white flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
            <i class="fas fa-trophy"></i>
          </span>
          <div>
            <h3 class="font-black text-lg">Đấu Trường Sinh Học 12 (Trạng Nguyên 45 Phút)</h3>
            <p class="text-xs text-slate-300">20 câu hỏi trắc nghiệm ngẫu nhiên phủ kín 8 chương</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-white/15 font-mono font-bold text-sm text-amber-300">
            <i class="far fa-clock mr-1"></i><span id="arena-timer">45:00</span>
          </div>
          <button type="button" onclick="closeModal('examModal')" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer">
            <i class="fas fa-xmark"></i>
          </button>
        </div>
      </div>
      <div id="arena-body" class="p-5 overflow-y-auto flex-1 space-y-4 custom-scrollbar bg-slate-50 dark:bg-slate-950"></div>
      <div class="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between shrink-0">
        <div id="arena-score-status" class="text-sm font-bold text-slate-700 dark:text-slate-200">Chọn đáp án cho 20 câu hỏi rồi bấm Nộp bài.</div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="startExam()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold cursor-pointer">
            <i class="fas fa-rotate mr-1"></i> Đề mới
          </button>
          <button type="button" id="arena-submit-btn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-xs cursor-pointer">
            <i class="fas fa-paper-plane mr-1"></i> Nộp bài chấm điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- JAVASCRIPT CONTROLLERS -->
  <script>
    const ALL_ARENA_QS = ${JSON.stringify(data.arenaBank)};
    const ALL_EXPLANATIONS = ${JSON.stringify(allExplanations)};
    const SEARCH_INDEX = ${JSON.stringify(Object.keys(data.lessons).map(num => ({
      num: Number(num),
      title: data.lessons[num].title,
      subtitle: data.lessons[num].subtitle,
      chapter: data.lessons[num].chapter
    })))};

    // Theme Toggle Functionality
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Modal helpers
    function openModal(id) {
      const m = document.getElementById(id);
      if (m) m.classList.remove('hidden');
    }
    function closeModal(id) {
      const m = document.getElementById(id);
      if (m) m.classList.add('hidden');
    }

    // Sidebar filter
    function filterSidebar(query) {
      const q = (query || '').toLowerCase().trim();
      const links = document.querySelectorAll('.sidebar-lesson-link');
      links.forEach(el => {
        const title = el.getAttribute('data-lesson-title').toLowerCase();
        el.style.display = title.includes(q) ? 'flex' : 'none';
      });
    }

    // In-Lesson Mini Quiz Checker
    function checkQuiz(lessonNum, qIdx, optIdx, correctIdx) {
      const btns = document.querySelectorAll('.quiz-btn-' + lessonNum + '-' + qIdx);
      const expEl = document.getElementById('quiz-explain-' + lessonNum + '-' + qIdx);
      const isCorrect = (optIdx === correctIdx);

      btns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIdx) {
          btn.className = 'quiz-btn-' + lessonNum + '-' + qIdx + ' text-left p-2.5 rounded-lg text-xs border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 font-bold';
        } else if (idx === optIdx && !isCorrect) {
          btn.className = 'quiz-btn-' + lessonNum + '-' + qIdx + ' text-left p-2.5 rounded-lg text-xs border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/70 text-rose-900 dark:text-rose-200';
        } else {
          btn.className = 'quiz-btn-' + lessonNum + '-' + qIdx + ' text-left p-2.5 rounded-lg text-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-400 opacity-60';
        }
      });

      if (expEl) {
        expEl.classList.remove('hidden');
        const expText = (ALL_EXPLANATIONS[lessonNum] && ALL_EXPLANATIONS[lessonNum][qIdx]) || '';
        if (isCorrect) {
          expEl.className = 'mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          expEl.innerHTML = '<span class="font-bold text-emerald-700 dark:text-emerald-300">✔ Chính xác!</span> ' + expText;
        } else {
          expEl.className = 'mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expEl.innerHTML = '<span class="font-bold text-rose-700 dark:text-rose-300">✘ Chưa chính xác.</span> ' + expText;
        }
      }
    }

    // Global Search (Ctrl + K)
    function runGlobalSearch(query) {
      const box = document.getElementById('global-search-results');
      if (!box) return;
      const q = (query || '').trim().toLowerCase();
      const matches = SEARCH_INDEX.filter(item => {
        if (!q) return true;
        return ('bài ' + item.num + ' ' + item.title + ' ' + item.subtitle).toLowerCase().includes(q);
      }).slice(0, 10);

      if (matches.length === 0) {
        box.innerHTML = '<div class="p-6 text-center text-sm text-slate-500">Không tìm thấy bài học phù hợp.</div>';
        return;
      }
      box.innerHTML = matches.map(item => \`
        <a href="#bai-\${item.num}" onclick="closeModal('searchModal')" class="flex items-center justify-between p-3 rounded-2xl hover:bg-emerald-50 dark:hover:bg-slate-800 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800 transition">
          <div>
            <div class="font-bold text-slate-900 dark:text-slate-100 text-sm">Bài \${item.num}. \${item.title}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">\${item.subtitle}</div>
          </div>
          <span class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs shrink-0">Chương \${item.chapter}</span>
        </a>
      \`).join('');
    }

    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('searchModal');
      } else if (e.key === 'Escape') {
        closeModal('searchModal');
        closeModal('examModal');
      }
    });

    // 45-Minute Exam Arena
    let currentArenaSet = [];
    let arenaAnswers = {};
    let arenaTimerInterval = null;
    let arenaSecondsLeft = 45 * 60;

    function startExam() {
      openModal('examModal');
      arenaAnswers = {};
      arenaSecondsLeft = 45 * 60;
      if (arenaTimerInterval) clearInterval(arenaTimerInterval);

      // Shuffle 20 questions
      const pool = [...ALL_ARENA_QS];
      currentArenaSet = pool.sort(() => 0.5 - Math.random()).slice(0, 20);

      const body = document.getElementById('arena-body');
      body.innerHTML = currentArenaSet.map((q, idx) => \`
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
          <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-start gap-2">
            <span class="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold shrink-0">Câu \${idx + 1}</span>
            <span>\${q.q}</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            \${q.options.map((opt, oIdx) => \`
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 cursor-pointer text-xs">
                <input type="radio" name="arena-q-\${idx}" value="\${oIdx}" onchange="selectArenaAnswer(\${idx}, \${oIdx})" class="text-emerald-600 focus:ring-emerald-500">
                <span class="text-slate-700 dark:text-slate-300">\${opt}</span>
              </label>
            \`).join('')}
          </div>
          <div id="arena-exp-\${idx}" class="hidden p-2.5 rounded-lg text-xs leading-relaxed mt-2"></div>
        </div>
      \`).join('');

      document.getElementById('arena-score-status').textContent = 'Chọn đáp án cho 20 câu hỏi rồi bấm Nộp bài.';
      document.getElementById('arena-submit-btn').style.display = 'inline-flex';

      arenaTimerInterval = setInterval(() => {
        arenaSecondsLeft--;
        const m = Math.floor(arenaSecondsLeft / 60);
        const s = arenaSecondsLeft % 60;
        document.getElementById('arena-timer').textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
        if (arenaSecondsLeft <= 0) {
          clearInterval(arenaTimerInterval);
          alert('Đã hết 45 phút! Hệ thống tự động nộp bài.');
          submitExam();
        }
      }, 1000);
    }

    function selectArenaAnswer(qIdx, optIdx) {
      arenaAnswers[qIdx] = optIdx;
    }

    function submitExam() {
      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      let correct = 0;
      currentArenaSet.forEach((q, idx) => {
        const userAns = arenaAnswers[idx];
        const isRight = (userAns === q.ans);
        if (isRight) correct++;

        const expEl = document.getElementById('arena-exp-' + idx);
        if (expEl) {
          expEl.classList.remove('hidden');
          if (isRight) {
            expEl.className = 'p-2.5 rounded-lg text-xs leading-relaxed mt-2 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 text-emerald-900 dark:text-emerald-200';
            expEl.innerHTML = '<strong>✔ Chính xác!</strong> ' + q.explain;
          } else {
            expEl.className = 'p-2.5 rounded-lg text-xs leading-relaxed mt-2 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 text-rose-900 dark:text-rose-200';
            expEl.innerHTML = '<strong>✘ Chưa đúng.</strong> Đáp án đúng: ' + q.options[q.ans] + '. ' + q.explain;
          }
        }
      });

      const pct = Math.round((correct / currentArenaSet.length) * 100);
      document.getElementById('arena-score-status').innerHTML = \`
        <span class="text-emerald-700 dark:text-emerald-400 font-extrabold text-sm sm:text-base">
          Kết quả: \${correct}/\${currentArenaSet.length} câu (\${pct}%)
        </span>
        \${pct >= 80 ? '🎉 Xuất sắc! Vinh danh Trạng Nguyên Sinh Học 12!' : 'Cần cố gắng ôn tập kĩ hơn!'}
      \`;
      document.getElementById('arena-submit-btn').style.display = 'none';
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(outputPath1, fullHtml, 'utf8');
fs.writeFileSync(outputPath2, fullHtml, 'utf8');
console.log('Successfully compiled Sinh học 12 to:');
console.log(' - ' + outputPath1 + ' (' + fs.statSync(outputPath1).size + ' bytes)');
console.log(' - ' + outputPath2 + ' (' + fs.statSync(outputPath2).size + ' bytes)');
