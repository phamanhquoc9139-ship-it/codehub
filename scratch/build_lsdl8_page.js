// scratch/build_lsdl8_page.js
const fs = require('fs');
const path = require('path');

const histP1 = require('./lsdl8_history_part1.js');
const histP2 = require('./lsdl8_history_part2.js');
const geoAndTopics = require('./lsdl8_geo_and_topics.js');

const allUnits = [...histP1, ...histP2, ...geoAndTopics];
const examQuestions = require('./lsdl8_exam.js');

function buildLsdl8Page() {
  console.log(`Building Lịch Sử và Địa Lí 8 page with ${allUnits.length} units...`);

  // Chapters grouping
  const chapters = [
    { title: "CHƯƠNG 1. CHÂU ÂU VÀ BẮC MỸ (TK XVI - XVIII)", branch: "Lịch sử", range: [1, 3] },
    { title: "CHƯƠNG 2. ĐÔNG NAM Á (TK XVI - GIỮA TK XIX)", branch: "Lịch sử", range: [4, 4] },
    { title: "CHƯƠNG 3. VIỆT NAM (ĐẦU TK XVI - TK XVIII)", branch: "Lịch sử", range: [5, 9] },
    { title: "CHƯƠNG 4. CHÂU ÂU VÀ NƯỚC MỸ (CUỐI TK XVIII - ĐẦU TK XX)", branch: "Lịch sử", range: [10, 12] },
    { title: "CHƯƠNG 5. KHOA HỌC, KĨ THUẬT, VĂN HỌC, NGHỆ THUẬT (TK XVIII - XIX)", branch: "Lịch sử", range: [13, 13] },
    { title: "CHƯƠNG 6. CHÂU Á (NỬA SAU TK XIX - ĐẦU TK XX)", branch: "Lịch sử", range: [14, 15] },
    { title: "CHƯƠNG 7. VIỆT NAM (TK XIX - ĐẦU TK XX)", branch: "Lịch sử", range: [16, 19] },
    { title: "CHƯƠNG 1. VỊ TRÍ, ĐỊA HÌNH VÀ KHOÁNG SẢN VN", branch: "Địa lí", range: [20, 22] },
    { title: "CHƯƠNG 2. KHÍ HẬU VÀ THỦY VĂN VN", branch: "Địa lí", range: [23, 27] },
    { title: "CHƯƠNG 3. THỔ NHƯỠNG VÀ SINH VẬT VN", branch: "Địa lí", range: [28, 29] },
    { title: "CHƯƠNG 4. BIỂN ĐẢO VIỆT NAM", branch: "Địa lí", range: [30, 31] },
    { title: "CHỦ ĐỀ CHUNG 1 & 2", branch: "Chủ đề chung", range: [32, 33] }
  ];

  // Sidebar navigation
  const sidebarHtml = chapters.map(chap => {
    const chapUnits = allUnits.filter(u => u.unitNumber >= chap.range[0] && u.unitNumber <= chap.range[1]);
    let colorClass = "text-amber-700 dark:text-amber-300 bg-amber-50/80 dark:bg-amber-950/40";
    if (chap.branch === "Địa lí") colorClass = "text-teal-700 dark:text-teal-300 bg-teal-50/80 dark:bg-teal-950/40";
    if (chap.branch === "Chủ đề chung") colorClass = "text-indigo-700 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-950/40";

    return `
      <div class="mb-3.5 chapter-nav-group" data-branch="${chap.branch}">
        <div class="px-2.5 py-1.5 text-[10.5px] font-bold uppercase tracking-wider ${colorClass} rounded-lg mb-1 flex items-center justify-between">
          <span class="truncate">${chap.title}</span>
          <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono shrink-0">${chapUnits.length}</span>
        </div>
        <div class="pl-1 space-y-0.5">
          ${chapUnits.map(u => `
            <a href="#unit-${u.id}" class="unit-nav-link flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs transition group" data-branch="${u.type}" data-id="${u.id}">
              <span class="truncate flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full ${u.type === 'history' ? 'bg-amber-500' : (u.type === 'geography' ? 'bg-teal-500' : 'bg-indigo-500')} shrink-0"></span>
                <span class="font-medium group-hover:text-amber-600 dark:group-hover:text-amber-400 transition truncate">${u.title.split('.')[0]}: ${u.title.split('.').slice(1).join('.').trim()}</span>
              </span>
              <span class="text-[10px] text-slate-500 font-mono shrink-0">#${u.unitNumber}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Main Units Content Cards
  const unitsCardsHtml = allUnits.map(u => {
    let typeBadgeColor = "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300";
    let borderAccent = "border-amber-500/40";
    let iconClass = "fa-landmark text-amber-500";
    let typeName = "Lịch sử";

    if (u.type === 'geography') {
      typeBadgeColor = "bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 border-teal-300";
      borderAccent = "border-teal-500/40";
      iconClass = "fa-earth-asia text-teal-500";
      typeName = "Địa lí";
    } else if (u.type === 'common') {
      typeBadgeColor = "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-300";
      borderAccent = "border-indigo-500/40";
      iconClass = "fa-compass text-indigo-500";
      typeName = "Chủ đề chung";
    }

    const quizOptions = u.quiz.options.map((opt, oIdx) => `
      <label class="flex items-start gap-2.5 p-2 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-amber-50/50 dark:hover:bg-slate-800/80 cursor-pointer transition text-xs text-slate-800 dark:text-slate-200">
        <input type="radio" name="quiz_${u.id}" value="${oIdx}" class="mt-0.5 text-amber-600 focus:ring-0" onchange="checkUnitQuiz('${u.id}', ${oIdx}, ${u.quiz.ans}, '${encodeURIComponent(u.quiz.expl)}')">
        <span><strong class="text-slate-500 mr-1">${String.fromCharCode(65 + oIdx)}.</strong> ${opt}</span>
      </label>
    `).join('');

    return `
      <article id="unit-${u.id}" class="unit-card scroll-mt-24 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border ${borderAccent} shadow-md hover:shadow-xl transition-all duration-300 space-y-4" data-branch="${u.type}" data-title="${u.title.toLowerCase()}">
        
        <!-- Header -->
        <div class="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3.5">
          <div class="space-y-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${typeBadgeColor}">
                <i class="fa-solid ${iconClass}"></i> ${typeName}
              </span>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">${u.chapter}</span>
            </div>
            <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
              ${u.title}
            </h3>
          </div>
          <span class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold shrink-0">
            Mục #${u.unitNumber}
          </span>
        </div>

        <!-- Objective -->
        <div class="p-3 bg-slate-50/90 dark:bg-slate-800/50 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
          <i class="fa-solid fa-bullseye text-amber-500 text-sm mt-0.5 shrink-0"></i>
          <div>
            <strong class="text-slate-900 dark:text-slate-100">Mục tiêu & Khởi động:</strong>
            <p class="mt-0.5 leading-relaxed text-slate-600 dark:text-slate-400">${u.objective}</p>
          </div>
        </div>

        <!-- Visual SVG Vector -->
        <div class="visual-container my-3 rounded-2xl overflow-hidden shadow-inner flex justify-center bg-slate-950 p-2">
          ${u.svg}
        </div>

        <!-- 4 Core Pedagogical Blocks -->
        <div class="space-y-3.5 pt-1">
          
          <!-- Block 1: Core Knowledge -->
          <div class="p-4 bg-gradient-to-br from-slate-50/80 to-slate-100/40 dark:from-slate-800/60 dark:to-slate-800/30 rounded-2xl border border-slate-200/70 dark:border-slate-700/60">
            <h4 class="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2 text-xs sm:text-sm">
              <i class="fa-solid fa-book-bookmark text-amber-500"></i> 1. Kiến thức cốt lõi & Tư liệu chuyên sâu
            </h4>
            ${u.coreKnowledge}
          </div>

          <!-- Block 2: Analysis Model -->
          <div class="p-4 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-2xl border border-indigo-200/60 dark:border-indigo-900/40">
            <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2 text-xs sm:text-sm">
              <i class="fa-solid fa-diagram-project text-indigo-500"></i> 2. Mô hình phân tích sự kiện / hiện tượng
            </h4>
            ${u.analysisModel}
          </div>

          <!-- Block 3: Common Mistakes -->
          <div class="p-3.5 bg-rose-50/60 dark:bg-rose-950/20 rounded-2xl border border-rose-200/60 dark:border-rose-900/40 text-xs">
            <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-triangle-exclamation text-rose-500"></i> 3. Cạm bẫy & Lỗi sai thường gặp khi làm bài
            </h4>
            <p class="text-rose-800 dark:text-rose-300 leading-relaxed">${u.commonMistakes}</p>
          </div>

        </div>

        <!-- Block 4: Interactive Mini Quiz -->
        <div class="quiz-item p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700" data-id="${u.id}">
          <p class="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 mb-2.5 flex items-start gap-2">
            <span class="px-2 py-0.5 rounded-md bg-amber-500 text-white text-[11px] font-extrabold shrink-0">Thực hành</span>
            <span>${u.quiz.q}</span>
          </p>
          <div class="space-y-1.5">
            ${quizOptions}
          </div>
          <div id="feedback-${u.id}" class="hidden mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed transition-all"></div>
        </div>

      </article>
    `;
  }).join('');

  // Complete Full HTML template
  const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Lịch Sử và Địa Lí 8 (SGK Kết Nối Tri Thức: 19 Bài Lịch Sử • 12 Bài Địa Lí • 2 Chủ Đề Chung • Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            history: {
              gold: '#D97706',
              amber: '#B45309',
              red: '#B91C1C'
            },
            geo: {
              teal: '#0D9488',
              emerald: '#059669',
              blue: '#0284C7'
            }
          }
        }
      }
    };
  </script>

  <!-- Google Fonts & FontAwesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- KaTeX for formulas -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
    }
    .glass-header {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .katex-display {
      margin: 0.5em 0 !important;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 3px 0;
    }
    .katex {
      font-size: 1.05em;
    }
    .katex, .katex * {
      letter-spacing: normal !important;
    }
    /* Chống dính chữ tuyệt đối & hiển thị tiếng Việt sắc nét */
    body, p, li, h1, h2, h3, h4, button, span {
      letter-spacing: 0.005em !important;
      line-height: 1.7 !important;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 5px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #94a3b8;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #64748b;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">

  <!-- Top Navigation Header -->
  <header class="sticky top-0 z-40 glass-header bg-white/85 dark:bg-slate-900/85 border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Logo & Back to Grade 8 -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-teal-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-landmark text-sm"></i>
          </div>
          <span class="font-black text-lg bg-gradient-to-r from-amber-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent hidden sm:inline">CodeHub</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700 hidden sm:inline">/</span>
        <a href="../index.html#grade-8" class="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition hidden sm:inline">
          Lớp 8
        </a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <span class="text-xs font-bold text-amber-600 dark:text-amber-400 truncate max-w-[180px] sm:max-w-none">
          Lịch Sử &amp; Địa Lí 8
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        
        <!-- Mở Sổ tay Niên biểu Modal -->
        <button onclick="openHandbookModal()" class="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800 transition flex items-center gap-1.5 shadow-xs">
          <i class="fa-solid fa-book text-amber-600"></i>
          <span class="hidden sm:inline">Sổ tay Niên biểu &amp; Địa lí</span>
        </button>

        <!-- Trạng Nguyên Button -->
        <a href="#exam-section" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-teal-500 hover:from-amber-600 hover:to-teal-600 text-white text-xs font-bold shadow-md shadow-amber-500/20 transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Trạng Nguyên (60p)</span>
        </a>

        <!-- Dark/Light Mode toggle -->
        <button id="themeToggleBtn" onclick="toggleTheme()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center transition">
          <i id="themeIcon" class="fa-solid fa-moon text-sm"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Banner -->
  <section class="relative bg-gradient-to-br from-amber-900 via-slate-900 to-teal-950 text-white overflow-hidden py-10 sm:py-14 border-b border-amber-800/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
          <i class="fa-solid fa-graduation-cap"></i> SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG • CHƯƠNG TRÌNH GDPT 2018
        </div>
        <h1 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
          Học Liệu Cốt Lõi: Lịch Sử &amp; Địa Lí Lớp 8
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Hệ thống hóa toàn bộ <strong>19 bài Lịch sử</strong> (Châu Âu, Bắc Mỹ, Việt Nam từ TK XVI đến đầu TK XX), <strong>12 bài Địa lí</strong> (Vị trí, địa hình, khoáng sản, khí hậu, thủy văn, thổ nhưỡng, sinh vật, biển đảo) và <strong>2 Chủ đề chung</strong> (Văn minh sông Hồng - Cửu Long, Bảo vệ chủ quyền Biển Đông) với 33 hình vẽ Vector SVG và Đấu trường Trạng Nguyên 60:00.
        </p>
        <div class="flex flex-wrap items-center gap-3 pt-2">
          <a href="#unit-ls-1" class="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-md transition flex items-center gap-2">
            <i class="fa-solid fa-book-open-reader"></i> Khám phá bài học
          </a>
          <button onclick="openHandbookModal()" class="px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm transition flex items-center gap-2">
            <i class="fa-solid fa-timeline"></i> Tra cứu Niên biểu
          </button>
          <a href="#exam-section" class="px-5 py-2.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2">
            <i class="fa-solid fa-trophy"></i> Thi Trạng Nguyên 60:00
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Filter & Search Bar -->
  <div class="sticky top-16 z-30 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
      
      <!-- Filter Tabs -->
      <div class="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800 text-xs font-bold overflow-x-auto w-full sm:w-auto">
        <button onclick="filterUnits('all', this)" class="filter-tab-btn active px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-xs transition">
          Tất cả (33)
        </button>
        <button onclick="filterUnits('history', this)" class="filter-tab-btn px-3.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-amber-600 transition">
          Lịch sử (19)
        </button>
        <button onclick="filterUnits('geography', this)" class="filter-tab-btn px-3.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-teal-600 transition">
          Địa lí (12)
        </button>
        <button onclick="filterUnits('common', this)" class="filter-tab-btn px-3.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition">
          Chủ đề chung (2)
        </button>
      </div>

      <!-- Search Input -->
      <div class="relative w-full sm:w-80">
        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
        <input type="text" id="unitSearchInput" onkeyup="searchUnits()" placeholder="Tìm kiếm bài học, mốc sự kiện, tọa độ..." class="w-full pl-9 pr-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs transition">
      </div>

    </div>
  </div>

  <!-- Main Content Layout (Sidebar + Units List) -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

      <!-- Left Sidebar: Chapter Directory -->
      <aside class="hidden lg:block lg:col-span-1 sticky top-36 max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
          <span class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <i class="fa-solid fa-bars-staggered text-amber-500"></i> Mục lục bài học
          </span>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">
            33 Mục
          </span>
        </div>
        <nav id="sidebarNav" class="space-y-1">
          ${sidebarHtml}
        </nav>
      </aside>

      <!-- Right Column: Lesson Units List -->
      <div class="lg:col-span-3 space-y-8">
        
        <!-- Cards Container -->
        <div id="unitsContainer" class="space-y-8">
          ${unitsCardsHtml}
        </div>

        <!-- Section: Đấu trường Trạng Nguyên Sử - Địa 8 (60:00) -->
        <section id="exam-section" class="mt-14 mb-8 rounded-3xl bg-gradient-to-br from-slate-950 via-amber-950/40 to-slate-900 p-6 sm:p-8 text-white border border-amber-800/40 shadow-xl relative overflow-hidden">
          <div class="relative z-10">
            
            <!-- Exam Header -->
            <div class="flex flex-wrap items-center justify-between gap-4 border-b border-amber-800/40 pb-5">
              <div class="space-y-1">
                <span class="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40">
                  <i class="fa-solid fa-trophy"></i> HỘI THI TRẠNG NGUYÊN SỬ ĐỊA 8
                </span>
                <h3 class="text-xl sm:text-2xl font-black text-white">
                  Đấu Trường Trạng Nguyên Lịch Sử &amp; Địa Lí 8 (60:00)
                </h3>
                <p class="text-xs text-slate-300">
                  20 câu hỏi trắc nghiệm chuẩn hóa bao quát Lịch sử thế giới, Lịch sử Việt Nam, Địa lí tự nhiên và Biển đảo.
                </p>
              </div>

              <!-- Timer Display -->
              <div class="flex items-center gap-3 bg-slate-900/90 border border-amber-500/50 px-4 py-2 rounded-2xl shadow-inner">
                <i class="fa-solid fa-clock text-amber-400 animate-pulse text-lg"></i>
                <div id="examTimer" class="font-mono text-xl sm:text-2xl font-black text-amber-400">60:00</div>
              </div>
            </div>

            <!-- Exam Intro Screen -->
            <div id="examIntro" class="text-center py-8 max-w-xl mx-auto space-y-4">
              <div class="w-16 h-16 rounded-3xl bg-amber-500/20 text-amber-400 text-3xl flex items-center justify-center mx-auto border border-amber-500/30">
                <i class="fa-solid fa-scroll"></i>
              </div>
              <h4 class="text-lg font-black">Sẵn sàng bước vào Đấu trường Trạng Nguyên?</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Đề thi gồm 20 câu hỏi lựa chọn 4 phương án. Thời gian làm bài 60 phút. Hệ thống tự động chấm điểm, xếp hạng Trạng Nguyên và hiển thị đáp án giải thích chi tiết.
              </p>
              <button onclick="startExam()" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-teal-500 hover:from-amber-500 hover:to-teal-600 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/25 transition transform hover:scale-105">
                BẮT ĐẦU LÀM BÀI THI
              </button>
            </div>

            <!-- Exam Body Screen -->
            <div id="examBody" class="hidden pt-6">
              <div id="examQuestionsList" class="space-y-6 mb-8">
                <!-- Injected via JS -->
              </div>
              <div class="flex items-center justify-between pt-4 border-t border-amber-800/40">
                <span id="answeredCount" class="text-xs text-amber-300 font-bold">Đã làm: 0/20 câu</span>
                <button onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-teal-500 hover:from-amber-600 hover:to-teal-600 text-slate-950 font-black text-xs sm:text-sm shadow-md transition flex items-center gap-2">
                  <i class="fa-solid fa-paper-plane"></i> Nộp bài thi
                </button>
              </div>
            </div>

            <!-- Exam Result Screen -->
            <div id="examResult" class="hidden text-center py-6 space-y-4">
              <div id="resultRankBadge" class="text-4xl sm:text-5xl">🏆</div>
              <h4 id="resultScoreText" class="text-2xl font-black text-amber-300">Điểm số: 0/20</h4>
              <p id="resultComment" class="text-xs sm:text-sm text-slate-200 max-w-md mx-auto"></p>
              
              <div class="flex items-center justify-center gap-3 pt-3">
                <button onclick="reviewExamAnswers()" class="px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition">
                  <i class="fa-solid fa-list-check"></i> Xem lại lời giải chi tiết
                </button>
                <button onclick="resetExam()" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black transition">
                  <i class="fa-solid fa-rotate-right"></i> Thi lại
                </button>
              </div>

              <!-- Detailed Review Container -->
              <div id="examReviewContainer" class="hidden mt-8 text-left space-y-4 max-w-3xl mx-auto">
                <!-- Injected via JS -->
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  </main>

  <!-- Modal: Sổ tay Niên biểu & Quy tắc Địa lí 8 -->
  <div id="handbookModal" class="fixed inset-0 z-50 hidden bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden">
      
      <!-- Modal Header -->
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/40">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-timeline"></i>
          </div>
          <div>
            <h3 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Sổ Tay Niên Biểu Lịch Sử &amp; Quy Tắc Địa Lí 8</h3>
            <p class="text-[11px] text-slate-500">Tra cứu nhanh các mốc son thời gian và phương pháp phân tích địa lí</p>
          </div>
        </div>
        <button onclick="closeHandbookModal()" class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-5 overflow-y-auto space-y-5 text-xs text-slate-700 dark:text-slate-300 custom-scrollbar">
        
        <!-- Bảng 1: Niên biểu Lịch sử thế giới & Việt Nam -->
        <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 text-xs sm:text-sm mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-calendar-check text-amber-500"></i> Bảng Niên biểu Mốc son Lịch sử Trọng tâm Lớp 8
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 font-bold">
                  <th class="py-1 px-2">Năm</th>
                  <th class="py-1 px-2">Sự kiện lịch sử</th>
                  <th class="py-1 px-2">Ý nghĩa bước ngoặt</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-amber-100 dark:divide-amber-900/30">
                <tr><td class="py-1 px-2 font-bold text-amber-600">1640 - 1688</td><td class="py-1 px-2">Cách mạng tư sản Anh</td><td class="py-1 px-2">Xác lập chế độ Quân chủ lập hiến</td></tr>
                <tr><td class="py-1 px-2 font-bold text-amber-600">4/7/1776</td><td class="py-1 px-2">Tuyên ngôn Độc lập Hoa Kỳ</td><td class="py-1 px-2">Thành lập Hợp chúng quốc Hoa Kỳ (USA)</td></tr>
                <tr><td class="py-1 px-2 font-bold text-amber-600">14/7/1789</td><td class="py-1 px-2">Chiếm ngục Bastille (Pháp)</td><td class="py-1 px-2">Mở đầu Cách mạng tư sản Pháp triệt để</td></tr>
                <tr><td class="py-1 px-2 font-bold text-amber-600">1698</td><td class="py-1 px-2">Nguyễn Hữu Cảnh kinh lược</td><td class="py-1 px-2">Lập phủ Gia Định, định hình Nam Bộ</td></tr>
                <tr><td class="py-1 px-2 font-bold text-amber-600">1785 &amp; 1789</td><td class="py-1 px-2">Đại thắng Rạch Gầm &amp; Đống Đa</td><td class="py-1 px-2">Quang Trung quét sạch 5 vạn Xiêm &amp; 29 vạn Thanh</td></tr>
                <tr><td class="py-1 px-2 font-bold text-amber-600">1831 - 1832</td><td class="py-1 px-2">Cải cách hành chính Minh Mạng</td><td class="py-1 px-2">Chia cả nước thành 30 tỉnh và 1 phủ</td></tr>
                <tr><td class="py-1 px-2 font-bold text-amber-600">1858</td><td class="py-1 px-2">Pháp nổ súng đánh Đà Nẵng</td><td class="py-1 px-2">Mở đầu quá trình xâm lược Việt Nam</td></tr>
                <tr><td class="py-1 px-2 font-bold text-amber-600">1885 - 1896</td><td class="py-1 px-2">Phong trào Cần Vương</td><td class="py-1 px-2">Khởi nghĩa Hương Khê là đỉnh cao</td></tr>
                <tr><td class="py-1 px-2 font-bold text-amber-600">5/6/1911</td><td class="py-1 px-2">Nguyễn Tất Thành rời Bến Nhà Rồng</td><td class="py-1 px-2">Mở đầu hành trình tìm đường cứu nước</td></tr>
                <tr><td class="py-1 px-2 font-bold text-amber-600">1914 - 1918</td><td class="py-1 px-2">Chiến tranh thế giới thứ nhất</td><td class="py-1 px-2">Chiến tranh đế quốc phi nghĩa xô đẩy nhân loại</td></tr>
                <tr><td class="py-1 px-2 font-bold text-amber-600">1917</td><td class="py-1 px-2">Cách mạng tháng Mười Nga</td><td class="py-1 px-2">Nhà nước Xã hội chủ nghĩa đầu tiên ra đời</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Bảng 2: Mẫu phân tích hiện tượng Địa lí 5 bước -->
        <div class="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-900/40">
          <h4 class="font-bold text-teal-900 dark:text-teal-300 text-xs sm:text-sm mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-compass-drafting text-teal-500"></i> Quy trình 5 bước phân tích hiện tượng địa lí chuẩn mực
          </h4>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>Bước 1 - Vị trí &amp; Phạm vi:</strong> Xác định tọa độ địa lí, ranh giới và phạm vi phân bố trên bản đồ/lược đồ.</li>
            <li><strong>Bước 2 - Đặc điểm &amp; Số liệu:</strong> Nêu rõ biểu hiện cụ thể bằng số liệu chứng minh (đơn vị đo, giá trị cao nhất, thấp nhất, trung bình).</li>
            <li><strong>Bước 3 - Giải thích nguyên nhân:</strong> Dựa vào các nhân tố vị trí, địa hình, hoàn lưu gió mùa, thổ nhưỡng hoặc hoạt động kinh tế con người.</li>
            <li><strong>Bước 4 - Đánh giá tác động:</strong> Phân tích mặt thuận lợi và khó khăn đối với sinh hoạt, sản xuất nông nghiệp, công nghiệp và môi trường.</li>
            <li><strong>Bước 5 - Đề xuất giải pháp:</strong> Đưa ra các giải pháp thích ứng, sử dụng tiết kiệm và phát triển bền vững lâu dài.</li>
          </ol>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex justify-end">
        <button onclick="closeHandbookModal()" class="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition">
          Đóng Sổ tay
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center text-xs text-slate-500 dark:text-slate-400">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-slate-800 dark:text-slate-200">
        Nền tảng học tập CodeHub © 2026 • Khóa học Lịch Sử &amp; Địa Lí 8 (SGK Kết nối tri thức với cuộc sống)
      </p>
      <p>Trọn bộ 19 bài Lịch sử, 12 bài Địa lí, 2 Chủ đề chung, 33 Sơ đồ Vector SVG và Đấu trường Trạng Nguyên 60:00</p>
    </div>
  </footer>

  <!-- Interactive JavaScript Logic -->
  <script>
    // 1. Dark/Light Mode
    function initTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        document.getElementById('themeIcon').className = 'fa-solid fa-sun text-sm text-amber-400';
      } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('themeIcon').className = 'fa-solid fa-moon text-sm text-slate-700';
      }
    }
    initTheme();

    function toggleTheme() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        document.getElementById('themeIcon').className = 'fa-solid fa-moon text-sm text-slate-700';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        document.getElementById('themeIcon').className = 'fa-solid fa-sun text-sm text-amber-400';
      }
    }

    // 2. Filter Units by Branch (All / History / Geography / Common)
    function filterUnits(branch, btn) {
      document.querySelectorAll('.filter-tab-btn').forEach(b => {
        b.classList.remove('active', 'bg-white', 'dark:bg-slate-800', 'text-amber-600', 'dark:text-amber-400', 'shadow-xs');
        b.classList.add('text-slate-600', 'dark:text-slate-400');
      });
      btn.classList.add('active', 'bg-white', 'dark:bg-slate-800', 'text-amber-600', 'dark:text-amber-400', 'shadow-xs');
      btn.classList.remove('text-slate-600', 'dark:text-slate-400');

      const cards = document.querySelectorAll('.unit-card');
      cards.forEach(card => {
        const cardBranch = card.getAttribute('data-branch');
        if (branch === 'all' || cardBranch === branch) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // 3. Search Units
    function searchUnits() {
      const keyword = document.getElementById('unitSearchInput').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.unit-card');
      cards.forEach(card => {
        const title = card.getAttribute('data-title') || '';
        const text = card.innerText.toLowerCase();
        if (title.includes(keyword) || text.includes(keyword)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // 4. Modal Tra cứu Niên biểu
    function openHandbookModal() {
      document.getElementById('handbookModal').classList.remove('hidden');
    }
    function closeHandbookModal() {
      document.getElementById('handbookModal').classList.add('hidden');
    }

    // 5. Check Unit Mini Quiz
    function checkUnitQuiz(unitId, selectedIdx, correctIdx, explEncoded) {
      const fb = document.getElementById('feedback-' + unitId);
      const expl = decodeURIComponent(explEncoded);
      fb.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'dark:bg-emerald-950/40', 'dark:text-emerald-300', 'bg-rose-50', 'text-rose-800', 'dark:bg-rose-950/40', 'dark:text-rose-300');
      
      if (selectedIdx === correctIdx) {
        fb.classList.add('bg-emerald-50', 'text-emerald-800', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
        fb.innerHTML = '<span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-emerald-600"></i> Chính xác!</span> ' + expl;
      } else {
        fb.classList.add('bg-rose-50', 'text-rose-800', 'dark:bg-rose-950/40', 'dark:text-rose-300');
        fb.innerHTML = '<span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-xmark text-rose-600"></i> Chưa đúng!</span> Hãy đọc lại phần kiến thức cốt lõi. ' + expl;
      }
    }

    // 6. Đấu trường Trạng Nguyên Exam System (20 Questions - 60:00)
    const examQuestions = ${JSON.stringify(examQuestions)};
    let examTimeSeconds = 60 * 60;
    let examTimerInterval = null;
    let userExamAnswers = {};

    function startExam() {
      document.getElementById('examIntro').classList.add('hidden');
      document.getElementById('examBody').classList.remove('hidden');
      document.getElementById('examResult').classList.add('hidden');
      userExamAnswers = {};

      const listEl = document.getElementById('examQuestionsList');
      listEl.innerHTML = examQuestions.map((q, idx) => {
        return \`
          <div class="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-700/80 space-y-3">
            <p class="font-bold text-xs sm:text-sm text-white flex items-start gap-2">
              <span class="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-xs font-black shrink-0">Câu \${idx + 1}</span>
              <span>\${q.q}</span>
            </p>
            <div class="space-y-1.5 pl-1 sm:pl-2">
              \${q.options.map((opt, oIdx) => \`
                <label class="flex items-start gap-2.5 p-2 rounded-xl border border-slate-700 hover:bg-slate-800/80 cursor-pointer text-xs transition text-slate-200">
                  <input type="radio" name="exam_q_\${idx}" value="\${oIdx}" onchange="selectExamAns(\${idx}, \${oIdx})" class="text-amber-500 focus:ring-0">
                  <span><strong>\${String.fromCharCode(65 + oIdx)}.</strong> \${opt}</span>
                </label>
              \`).join('')}
            </div>
          </div>
        \`;
      }).join('');

      examTimeSeconds = 60 * 60;
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        examTimeSeconds--;
        if (examTimeSeconds <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        }
        const m = Math.floor(examTimeSeconds / 60);
        const s = examTimeSeconds % 60;
        document.getElementById('examTimer').innerText = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
      }, 1000);
    }

    function selectExamAns(qIdx, oIdx) {
      userExamAnswers[qIdx] = oIdx;
      const count = Object.keys(userExamAnswers).length;
      document.getElementById('answeredCount').innerText = 'Đã làm: ' + count + '/' + examQuestions.length + ' câu';
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let correct = 0;
      examQuestions.forEach((q, idx) => {
        if (userExamAnswers[idx] === q.ans) correct++;
      });

      const total = examQuestions.length;
      document.getElementById('examBody').classList.add('hidden');
      document.getElementById('examResult').classList.remove('hidden');

      const scoreText = document.getElementById('resultScoreText');
      scoreText.innerText = 'Kết quả: ' + correct + '/' + total + ' câu (' + (correct * 0.5).toFixed(1) + ' điểm)';

      const badge = document.getElementById('resultRankBadge');
      const comment = document.getElementById('resultComment');

      if (correct >= 18) {
        badge.innerText = '👑';
        comment.innerText = 'Xuất sắc! Em xứng danh TRẠNG NGUYÊN SỬ ĐỊA 8 với kiến thức sâu rộng và tư duy sắc bén!';
      } else if (correct >= 15) {
        badge.innerText = '🥈';
        comment.innerText = 'Rất tốt! Em đạt danh hiệu BẢNG NHÃN, nắm rất vững các mốc sự kiện và quy tắc địa lí!';
      } else if (correct >= 10) {
        badge.innerText = '🥉';
        comment.innerText = 'Khá tốt! Em đạt danh hiệu THÁM HOA, hãy ôn tập lại các bài còn sai sót nhé!';
      } else {
        badge.innerText = '📚';
        comment.innerText = 'Cần nỗ lực hơn! Hãy đọc lại sổ tay niên biểu và các bài học để bứt phá lần thi sau!';
      }
    }

    function reviewExamAnswers() {
      const c = document.getElementById('examReviewContainer');
      c.classList.remove('hidden');
      c.innerHTML = examQuestions.map((q, idx) => {
        const userA = userExamAnswers[idx];
        const isRight = userA === q.ans;
        return \`
          <div class="p-4 rounded-xl border \${isRight ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-rose-500/40 bg-rose-950/20'} text-xs">
            <p class="font-bold text-white mb-1.5">
              <span class="mr-1.5 px-1.5 py-0.5 rounded \${isRight ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'} font-black">Câu \${idx + 1}</span>
              \${q.q}
            </p>
            <p class="\${isRight ? 'text-emerald-300' : 'text-rose-300'} mb-1">
              <strong>Lựa chọn của em:</strong> \${userA !== undefined ? q.options[userA] : 'Chưa chọn'}
              \${isRight ? ' ✓ (Đúng)' : ' ✗ (Sai)'}
            </p>
            <p class="text-amber-300 mb-1"><strong>Đáp án đúng:</strong> \${q.options[q.ans]}</p>
            <p class="text-slate-300 italic">💡 \${q.expl}</p>
          </div>
        \`;
      }).join('');
    }

    function resetExam() {
      startExam();
    }

    // 7. Auto render KaTeX
    document.addEventListener("DOMContentLoaded", function() {
      if (window.renderMathInElement) {
        renderMathInElement(document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\\\(', right: '\\\\)', display: false},
            {left: '\\\\[', right: '\\\\]', display: true}
          ],
          throwOnError: false
        });
      }
    });
  </script>
</body>
</html>
  `;

  // Output files
  const p1Path = path.join(__dirname, '../courses/lsdl_8.html');
  const p2Path = path.join(__dirname, '../courses/history_geography_8.html');

  fs.writeFileSync(p1Path, fullHtml, 'utf8');
  console.log('Saved:', p1Path, '(size:', fullHtml.length, 'bytes)');

  fs.writeFileSync(p2Path, fullHtml, 'utf8');
  console.log('Saved:', p2Path, '(size:', fullHtml.length, 'bytes)');
}

buildLsdl8Page();
