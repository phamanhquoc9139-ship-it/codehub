const fs = require('fs');
const path = require('path');

const p1 = require('./khtn8_data_part1.js');
const p2 = require('./khtn8_data_part2.js');
const p3 = require('./khtn8_data_part3.js');
const allLessons = [...p1, ...p2, ...p3];

const d1 = require('./khtn8_detail_p1.js');
const d2 = require('./khtn8_detail_p2.js');
const d3 = require('./khtn8_detail_p3.js');
const allDetails = { ...d1, ...d2, ...d3 };

const examQuestions = require('./khtn8_exam.js');

function buildKhtn8Page() {
  console.log('Building Khoa Học Tự Nhiên 8 page with COMPREHENSIVE lesson details (47 lessons)...');

  // Group chapters
  const chapters = [
    { title: "BÀI MỞ ĐẦU", branch: "Mở đầu", icon: "fa-flask-vial", range: [1, 1] },
    { title: "CHƯƠNG I. PHẢN ỨNG HÓA HỌC", branch: "Hóa học", icon: "fa-atom", range: [2, 7] },
    { title: "CHƯƠNG II. MỘT SỐ HỢP CHẤT THÔNG DỤNG", branch: "Hóa học", icon: "fa-vial", range: [8, 12] },
    { title: "CHƯƠNG III. KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT", branch: "Vật lí", icon: "fa-scale-balanced", range: [13, 17] },
    { title: "CHƯƠNG IV. TÁC DỤNG LÀM QUAY CỦA LỰC", branch: "Vật lí", icon: "fa-rotate", range: [18, 19] },
    { title: "CHƯƠNG V. ĐIỆN", branch: "Vật lí", icon: "fa-bolt", range: [20, 25] },
    { title: "CHƯƠNG VI. NHIỆT", branch: "Vật lí", icon: "fa-temperature-high", range: [26, 29] },
    { title: "CHƯƠNG VII. SINH HỌC CƠ THỂ NGƯỜI", branch: "Sinh học", icon: "fa-heart-pulse", range: [30, 40] },
    { title: "CHƯƠNG VIII. SINH VẬT VÀ MÔI TRƯỜNG", branch: "Sinh học", icon: "fa-leaf", range: [41, 47] }
  ];

  // Sidebar chapter groups
  const sidebarHtml = chapters.map(chap => {
    const chapLessons = allLessons.filter(l => l.id >= chap.range[0] && l.id <= chap.range[1]);
    let branchColor = "text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/30";
    if (chap.branch === "Hóa học") branchColor = "text-teal-700 dark:text-teal-400 bg-teal-50/70 dark:bg-teal-950/30";
    else if (chap.branch === "Vật lí") branchColor = "text-indigo-700 dark:text-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/30";
    else if (chap.branch === "Sinh học") branchColor = "text-emerald-700 dark:text-emerald-400 bg-emerald-50/70 dark:bg-emerald-950/30";

    return `
      <div class="mb-3.5 chapter-nav-group" data-branch="${chap.branch}">
        <div class="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider ${branchColor} rounded-lg mb-1 flex items-center justify-between">
          <span class="truncate flex items-center gap-1.5">
            <i class="fa-solid ${chap.icon}"></i> ${chap.title}
          </span>
          <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-mono shrink-0">${chapLessons.length}</span>
        </div>
        <div class="pl-1 space-y-0.5">
          ${chapLessons.map(l => `
            <a href="#lesson-${l.id}" class="lesson-nav-link flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs transition group" data-branch="${l.branch}" data-id="${l.id}">
              <span class="truncate flex items-center gap-1.5">
                <span class="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center text-[9px] font-bold shrink-0">${l.id}</span>
                <span class="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition truncate">${l.title}</span>
              </span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // 47 Detailed Lesson cards
  const lessonCardsHtml = allLessons.map(l => {
    const detail = allDetails[l.id];

    let headerGradient = "from-blue-600 to-cyan-600";
    let iconClass = "fa-flask-vial";
    if (l.branch === "Hóa học") {
      headerGradient = "from-teal-600 to-emerald-600";
      iconClass = "fa-atom";
    } else if (l.branch === "Vật lí") {
      headerGradient = "from-blue-600 to-indigo-600";
      iconClass = "fa-bolt";
    } else if (l.branch === "Sinh học") {
      headerGradient = "from-emerald-600 to-green-600";
      iconClass = "fa-leaf";
    }

    const q = l.quiz;
    const quizOptions = q.options.map((opt, oIdx) => `
      <button onclick="checkQuizAnswer(${l.id}, 0, ${oIdx}, ${q.ans}, '${q.expl.replace(/'/g, "\\'")}')" class="quiz-btn-${l.id}-0 w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 text-xs text-gray-800 dark:text-gray-200 transition flex items-center justify-between group bg-white dark:bg-gray-800/80">
        <span class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] font-bold flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-700 transition">${String.fromCharCode(65 + oIdx)}</span>
          <span>${opt}</span>
        </span>
        <i class="fa-regular fa-circle text-gray-400 group-hover:text-blue-500 text-xs"></i>
      </button>
    `).join('');

    return `
      <article id="lesson-${l.id}" class="lesson-card bg-white dark:bg-gray-800 rounded-3xl p-5 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-sm transition hover:shadow-md mb-8" data-branch="${l.branch}" data-id="${l.id}">
        <!-- Header bài học -->
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-gray-100 dark:border-gray-700">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-gradient-to-r ${headerGradient} text-white shadow-xs">
                KHTN 8 • ${l.branch.toUpperCase()}
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">${l.chapter}</span>
            </div>
            <h2 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
              <span class="w-7 h-7 rounded-xl bg-gradient-to-tr ${headerGradient} text-white flex items-center justify-center text-xs font-bold shadow-xs">${l.id}</span>
              ${l.num}: ${l.title}
            </h2>
          </div>
          <span class="text-xs text-gray-500 italic max-w-sm text-right hidden sm:block">${l.desc}</span>
        </div>

        <!-- Mục tiêu bài học & Câu hỏi mở đầu -->
        <div class="mb-4 p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40 text-xs">
          <div class="font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5 mb-1">
            <i class="fa-solid fa-compass text-indigo-500"></i> Mục tiêu bài học &amp; Vấn đề khởi động:
          </div>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${detail.objective}</p>
        </div>

        <!-- Hình vẽ & Sơ đồ trực quan bài học -->
        <div class="mb-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-gray-50/90 to-gray-100/50 dark:from-gray-900/60 dark:to-gray-900/30 border border-gray-200/80 dark:border-gray-700/80 overflow-hidden">
          <div class="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid ${iconClass} text-blue-500"></i> Sơ đồ trực quan &amp; Nguyên lí khoa học
          </div>
          ${l.svg}
        </div>

        <!-- 4 Khối chi tiết bài học -->
        <div class="space-y-3.5 mb-5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          
          <!-- Khối 1: Kiến thức cốt lõi & Cơ chế khoa học -->
          <div class="p-4 bg-blue-50/60 dark:bg-blue-950/30 rounded-2xl border border-blue-200/70 dark:border-blue-900/50">
            <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2 text-xs sm:text-sm">
              <i class="fa-solid fa-book-bookmark text-blue-600"></i> 1. Kiến thức cốt lõi, Định luật &amp; Công thức
            </h4>
            <ul class="space-y-1.5 text-xs leading-relaxed text-gray-800 dark:text-gray-200">
              ${l.keyPoints.map(kp => `<li class="flex items-start gap-2"><span class="text-blue-500 font-bold mt-0.5">•</span><span>${kp}</span></li>`).join('')}
            </ul>
          </div>

          <!-- Khối 2: Thí nghiệm, Hiện tượng & Ứng dụng thực tiễn -->
          <div class="p-4 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200/70 dark:border-emerald-900/50">
            <h4 class="font-bold text-emerald-900 dark:text-emerald-300 mb-1.5 flex items-center gap-2 text-xs sm:text-sm">
              <i class="fa-solid fa-flask-vial text-emerald-600"></i> 2. Thí nghiệm, Hiện tượng &amp; Ứng dụng thực tế
            </h4>
            <div class="text-xs leading-relaxed text-gray-800 dark:text-gray-200">
              ${detail.experimentDetails}
            </div>
          </div>

          <!-- Khối 3: Ví dụ minh họa & Hướng dẫn giải chi tiết -->
          <div class="p-4 bg-amber-50/70 dark:bg-amber-950/30 rounded-2xl border border-amber-200/70 dark:border-amber-900/50">
            <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2 text-xs sm:text-sm">
              <i class="fa-solid fa-lightbulb text-amber-600"></i> 3. Ví dụ minh họa &amp; Hướng dẫn giải chi tiết
            </h4>
            <div class="space-y-2 text-xs leading-relaxed text-gray-800 dark:text-gray-200">
              <p class="font-medium text-amber-950 dark:text-amber-200"><strong>Đề bài:</strong> ${detail.exampleProblem.problem}</p>
              <div class="p-3 bg-white/80 dark:bg-gray-800/90 rounded-xl border border-amber-200/60 dark:border-amber-900/40">
                <p class="font-bold text-amber-800 dark:text-amber-300 mb-1">Lời giải chi tiết:</p>
                <div class="text-gray-800 dark:text-gray-200 leading-relaxed">${detail.exampleProblem.solution}</div>
              </div>
            </div>
          </div>

          <!-- Khối 4: Lỗi sai thường gặp & Cần lưu ý -->
          <div class="p-3.5 bg-rose-50/60 dark:bg-rose-950/20 rounded-2xl border border-rose-200/60 dark:border-rose-900/40 text-xs">
            <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-triangle-exclamation text-rose-500"></i> 4. Lỗi sai thường gặp &amp; Cần lưu ý
            </h4>
            <p class="text-rose-800 dark:text-rose-300 leading-relaxed">${detail.commonMistakes}</p>
          </div>

        </div>

        <!-- Khối 5: Thực hành Mini Quiz -->
        <div class="quiz-item p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700" data-id="${l.id}">
          <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 mb-2.5 flex items-start gap-2">
            <span class="px-2 py-0.5 rounded-md bg-gradient-to-r ${headerGradient} text-white text-[11px] font-extrabold shrink-0">Thực hành</span>
            <span>${q.q}</span>
          </p>
          <div class="space-y-1.5">
            ${quizOptions}
          </div>
          <div id="feedback-${l.id}-0" class="hidden mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed transition-all"></div>
        </div>
      </article>
    `;
  }).join('');

  // Complete HTML
  const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Khoa Học Tự Nhiên 8 (KHTN Lớp 8 - SGK Kết Nối Tri Thức: 8 Chương • 47 Bài Học Toàn Diện • Hình Vẽ Vector &amp; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            science: {
              teal: '#0D9488',
              cyan: '#06B6D4',
              emerald: '#059669',
              blue: '#2563EB',
              amber: '#D97706',
              purple: '#7C3AED'
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
    /* Chống dính chữ tuyệt đối & hiển thị sắc nét tiếng Việt */
    body, p, li, h1, h2, h3, h4, button, span {
      letter-spacing: 0.005em !important;
      word-spacing: normal !important;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .lesson-card p, .lesson-card li {
      line-height: 1.7 !important;
    }
    svg text {
      letter-spacing: normal !important;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
      user-select: none;
    }
    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
    .lesson-card { scroll-margin-top: 5rem; }
  </style>
</head>
<body class="bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans antialiased min-h-screen">

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 glass-header transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group" title="Về trang chủ CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 via-blue-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-flask-vial text-sm"></i>
          </div>
          <div>
            <span class="font-extrabold text-base tracking-tight bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">CodeHub</span>
            <span class="hidden sm:inline-block text-[11px] font-semibold text-gray-400 dark:text-gray-500 ml-1.5 px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">Lớp 8</span>
          </div>
        </a>
        <div class="h-4 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
        <div class="hidden sm:flex items-center gap-1.5">
          <span class="text-xs font-bold text-gray-700 dark:text-gray-300">Khoa Học Tự Nhiên 8</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300">8 Chương • 47 Bài</span>
        </div>
      </div>

      <!-- Quick Search & Actions -->
      <div class="flex items-center gap-2">
        <div class="relative hidden md:block w-48 lg:w-64">
          <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-xs text-gray-400"></i>
          <input type="text" id="lessonSearch" onkeyup="searchLessons()" placeholder="Tìm bài, công thức, thí nghiệm..." class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 transition">
        </div>

        <!-- Mở Modal Sổ tay Công thức -->
        <button onclick="openFormulasModal()" class="px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800 transition flex items-center gap-1.5 shadow-xs">
          <i class="fa-solid fa-book-bookmark text-teal-600"></i>
          <span class="hidden sm:inline">Sổ tay Công thức</span>
        </button>

        <!-- Nút Trạng Nguyên 60:00 -->
        <a href="#exam-section" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-teal-500 hover:from-amber-600 hover:to-teal-600 text-white text-xs font-bold shadow-md shadow-teal-500/20 transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Trạng Nguyên (60p)</span>
        </a>

        <!-- Dark/Light Mode -->
        <button onclick="toggleDarkMode()" class="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center text-xs transition" title="Đổi giao diện sáng/tối">
          <i id="themeIcon" class="fa-solid fa-moon"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex flex-col lg:flex-row gap-8">

      <!-- Sidebar Left Navigation -->
      <aside class="lg:w-80 shrink-0">
        <div class="sticky top-20 bg-white dark:bg-gray-800 rounded-3xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
          
          <div class="flex items-center justify-between mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
            <h3 class="font-extrabold text-sm text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-layer-group text-teal-500"></i> Mục Lục 47 Bài Học
            </h3>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300">SGK Kết Nối</span>
          </div>

          <!-- Lọc nhanh theo Phân môn (Hóa - Lí - Sinh) -->
          <div class="mb-3">
            <div class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">Lọc theo phân môn:</div>
            <div class="grid grid-cols-2 gap-1 sm:grid-cols-4">
              <button onclick="filterBranch('all')" class="branch-filter-btn px-2 py-1 text-xs rounded-lg font-bold bg-teal-600 text-white text-center transition shadow-xs" data-branch="all">Tất cả (47)</button>
              <button onclick="filterBranch('Hóa học')" class="branch-filter-btn px-2 py-1 text-xs rounded-lg font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-center transition" data-branch="Hóa học">Hóa học (11)</button>
              <button onclick="filterBranch('Vật lí')" class="branch-filter-btn px-2 py-1 text-xs rounded-lg font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-center transition" data-branch="Vật lí">Vật lí (17)</button>
              <button onclick="filterBranch('Sinh học')" class="branch-filter-btn px-2 py-1 text-xs rounded-lg font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-center transition" data-branch="Sinh học">Sinh học (18)</button>
            </div>
          </div>

          <!-- Danh sách bài học theo Chương -->
          <div id="sidebarLessonList" class="max-h-[calc(100vh-22rem)] overflow-y-auto pr-1">
            ${sidebarHtml}
          </div>

          <!-- Banner mini thông tin -->
          <div class="mt-4 p-3 rounded-2xl bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950/30 dark:to-blue-950/30 border border-teal-200/60 dark:border-teal-900/60 text-xs">
            <div class="font-bold text-teal-800 dark:text-teal-300 flex items-center gap-1.5 mb-1">
              <i class="fa-solid fa-circle-nodes text-teal-600"></i> Cấu trúc 5 phần chuyên sâu:
            </div>
            <p class="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
              Mục tiêu mở đầu ➔ Kiến thức &amp; Công thức ➔ Quy trình thí nghiệm ➔ Ví dụ &amp; Lời giải chi tiết ➔ Cạm bẫy lỗi sai cần tránh!
            </p>
          </div>

        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 min-w-0">

        <!-- Hero Banner -->
        <div class="mb-8 rounded-3xl bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700 p-6 sm:p-8 text-white shadow-xl shadow-teal-600/15 relative overflow-hidden">
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-extrabold uppercase tracking-wider text-teal-100 mb-3">
              <i class="fa-solid fa-atom text-amber-300"></i> SGK Kết Nối Tri Thức Với Cuộc Sống
            </div>
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3">
              KHOA HỌC TỰ NHIÊN 8
            </h1>
            <p class="text-sm sm:text-base text-teal-100 max-w-2xl font-medium leading-relaxed mb-6">
              Hệ thống học liệu nền tảng trọn bộ <strong>Bài mở đầu</strong> &amp; <strong>8 Chương (47 Bài học toàn diện)</strong>: Khám phá thế giới hóa chất &amp; phản ứng, định luật vật lí về khối lượng riêng - áp suất - đòn bẩy - điện - nhiệt, cùng sinh học cơ thể người và sinh thái học môi trường.
            </p>

            <div class="flex flex-wrap items-center gap-3">
              <a href="#lesson-1" class="px-5 py-2.5 rounded-2xl bg-white text-teal-800 hover:bg-teal-50 font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2">
                <i class="fa-solid fa-play text-teal-600"></i> Bắt đầu học ngay
              </a>
              <button onclick="openFormulasModal()" class="px-5 py-2.5 rounded-2xl bg-teal-700/60 hover:bg-teal-700 border border-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm transition flex items-center gap-2">
                <i class="fa-solid fa-book-bookmark"></i> Sổ tay Công thức
              </button>
              <a href="#exam-section" class="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition flex items-center gap-2">
                <i class="fa-solid fa-trophy"></i> Thi Trạng Nguyên 60:00
              </a>
            </div>
          </div>

          <!-- Decorative vector background -->
          <div class="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div class="absolute right-10 top-6 text-white/15 text-8xl pointer-events-none hidden sm:block">
            <i class="fa-solid fa-flask"></i>
          </div>
        </div>

        <!-- 47 Bài học chi tiết -->
        <div id="lessonsContainer">
          ${lessonCardsHtml}
        </div>

        <!-- Section: Đấu trường Trạng Nguyên KHTN 8 (60:00) -->
        <section id="exam-section" class="mt-12 mb-8 rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 p-6 sm:p-8 text-white border border-teal-800/40 shadow-xl relative overflow-hidden">
          
          <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-2">
                <i class="fa-solid fa-crown text-amber-400"></i> Đấu Trường Vinh Danh Lớp 8
              </div>
              <h2 class="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                ĐẤU TRƯỜNG TRẠNG NGUYÊN KHOA HỌC TỰ NHIÊN 8
              </h2>
              <p class="text-xs sm:text-sm text-gray-300 mt-1">20 câu hỏi trắc nghiệm định lượng &amp; thực hành bao quát 3 phân môn Hóa - Lí - Sinh (Thời gian: 60:00).</p>
            </div>

            <!-- Timer Display -->
            <div class="flex items-center gap-3">
              <div class="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <div class="text-[10px] uppercase font-bold text-gray-400">Thời gian làm bài</div>
                <div id="examTimer" class="font-mono text-xl sm:text-2xl font-black text-amber-400">60:00</div>
              </div>
            </div>
          </div>

          <!-- Intro Screen -->
          <div id="examIntro" class="text-center py-8 max-w-xl mx-auto">
            <div class="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-400 to-teal-500 text-slate-950 text-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
              <i class="fa-solid fa-award"></i>
            </div>
            <h3 class="text-lg font-bold mb-2">Sẵn sàng chinh phục đỉnh cao khoa học?</h3>
            <p class="text-xs text-gray-300 mb-6 leading-relaxed">
              Bộ đề thi chuẩn gồm 20 câu hỏi bao quát trọn vẹn kiến thức Hóa học (mol, nồng độ, acid-base), Vật lí (áp suất, moment lực, mạch điện, nhiệt) và Sinh học (các hệ cơ quan, sinh thái học).
            </p>
            <button onclick="startExam()" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-teal-500 hover:from-amber-500 hover:to-teal-600 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/25 transition transform hover:scale-105">
              Bắt Đầu Làm Bài (60 Phút)
            </button>
          </div>

          <!-- Exam Body Screen -->
          <div id="examBody" class="hidden">
            <div id="examQuestionsList" class="space-y-6 mb-8">
              <!-- Rendered via JS -->
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-white/10">
              <span id="answeredCount" class="text-xs text-gray-300">Đã trả lời: 0/20 câu</span>
              <button onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2">
                <i class="fa-solid fa-paper-plane"></i> Nộp Bài Thi
              </button>
            </div>
          </div>

          <!-- Exam Result Screen -->
          <div id="examResult" class="hidden text-center py-6">
            <div id="resultBadge" class="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 text-slate-950 text-3xl flex items-center justify-center mx-auto mb-3 shadow-xl">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <h3 id="resultTitle" class="text-2xl font-black mb-1 text-amber-400">DANH HIỆU TRẠNG NGUYÊN</h3>
            <p id="resultScore" class="text-lg font-bold text-white mb-2">Điểm số: 20/20 (100%)</p>
            <p id="resultMessage" class="text-xs text-gray-300 max-w-md mx-auto mb-6 leading-relaxed">
              Xuất sắc! Em đã nắm vững toàn diện kiến thức khoa học tự nhiên, tính toán thành thạo và giải quyết các vấn đề thực tiễn rất xuất sắc.
            </p>

            <div class="flex justify-center gap-3">
              <button onclick="reviewExamAnswers()" class="px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition">
                Xem Bảng Đáp Án Chi Tiết
              </button>
              <button onclick="resetExam()" class="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition">
                Làm Lại Đề Thi
              </button>
            </div>

            <!-- Detailed Answers Review -->
            <div id="examReviewContainer" class="hidden mt-8 text-left space-y-4 max-w-3xl mx-auto">
              <!-- Rendered via JS -->
            </div>
          </div>

        </section>

      </main>
    </div>
  </div>

  <!-- Modal: Sổ tay Công thức & Tra cứu KHTN 8 -->
  <div id="formulasModal" class="fixed inset-0 z-50 hidden bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950/40 dark:to-blue-950/40">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="font-bold text-sm text-gray-900 dark:text-white">Sổ Tay Công Thức &amp; Tra Cứu KHTN 8</h3>
            <p class="text-[11px] text-gray-500 dark:text-gray-400">Tổng hợp toàn bộ công thức tính toán và bảng tra cứu chuẩn SGK</p>
          </div>
        </div>
        <button onclick="closeFormulasModal()" class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 flex items-center justify-center text-xs transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        
        <!-- Nhánh Hóa học -->
        <div class="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60">
          <h4 class="font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-atom text-teal-600"></i> Hóa học: Công thức Mol &amp; Nồng độ dung dịch
          </h4>
          <div class="space-y-1.5 text-xs">
            <p>• <strong>Số mol &amp; Khối lượng:</strong> \\[n = \\frac{m}{M} \\iff m = n \\cdot M\\]</p>
            <p>• <strong>Thể tích mol khí (đkc: 25°C, 1 bar):</strong> \\[V = n \\times 24,79 \\text{ (L)} \\iff n = \\frac{V}{24,79}\\]</p>
            <p>• <strong>Tỉ khối chất khí:</strong> \\[d_{A/B} = \\frac{M_A}{M_B} \\quad ; \\quad d_{A/kk} = \\frac{M_A}{29}\\]</p>
            <p>• <strong>Nồng độ phần trăm:</strong> \\[C\\% = \\frac{m_{ct}}{m_{dd}} \\times 100\\% \\quad (m_{dd} = m_{ct} + m_{dm})\\]</p>
            <p>• <strong>Nồng độ mol:</strong> \\[C_M = \\frac{n}{V} \\text{ (mol/L hoặc M, V tính bằng Lít)}\\]</p>
          </div>
        </div>

        <!-- Nhánh Vật lí -->
        <div class="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-scale-balanced text-blue-600"></i> Vật lí: Cơ học, Áp suất, Đòn bẩy &amp; Điện học
          </h4>
          <div class="space-y-1.5 text-xs">
            <p>• <strong>Khối lượng riêng:</strong> \\[D = \\frac{m}{V} \\quad (1 \\text{ g/cm}^3 = 1000 \\text{ kg/m}^3)\\]</p>
            <p>• <strong>Áp suất chất rắn:</strong> \\[p = \\frac{F}{S} \\text{ (Pa hoặc N/m²)}\\]</p>
            <p>• <strong>Áp suất chất lỏng:</strong> \\[p = d \\cdot h \\text{ (d: trọng lượng riêng N/m³, h: độ sâu m)}\\]</p>
            <p>• <strong>Lực đẩy Archimedes:</strong> \\[F_A = d \\cdot V \\text{ (V: thể tích phần chìm m³)}\\]</p>
            <p>• <strong>Moment lực &amp; Cân bằng đòn bẩy:</strong> \\[M = F \\cdot d \\quad ; \\quad F_1 \\cdot d_1 = F_2 \\cdot d_2\\]</p>
            <p>• <strong>Đoạn mạch nối tiếp:</strong> \\[I = I_1 = I_2 \\quad ; \\quad U = U_1 + U_2\\]</p>
            <p>• <strong>Đoạn mạch song song:</strong> \\[U = U_1 = U_2 \\quad ; \\quad I = I_1 + I_2\\]</p>
          </div>
        </div>

        <!-- Nhánh Sinh học -->
        <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-leaf text-emerald-600"></i> Sinh học: Cơ thể người &amp; Hệ sinh thái
          </h4>
          <div class="space-y-1.5 text-xs">
            <p>• <strong>Đường đi máu vòng tuần hoàn nhỏ:</strong> Tâm thất phải ➔ ĐM phổi ➔ Phổi (trao đổi khí) ➔ TM phổi ➔ Tâm nhĩ trái.</p>
            <p>• <strong>Đường đi máu vòng tuần hoàn lớn:</strong> Tâm thất trái ➔ ĐM chủ ➔ Các cơ quan ➔ TM chủ ➔ Tâm nhĩ phải.</p>
            <p>• <strong>3 giai đoạn tạo nước tiểu ở Nephron:</strong> Lọc máu (tại cầu thận) ➔ Tái hấp thu (ở ống thận) ➔ Tiết tiếp (ở ống thận).</p>
            <p>• <strong>Cấu trúc chuỗi thức ăn:</strong> Sinh vật sản xuất (Cây xanh) ➔ SV tiêu thụ bậc 1 (Ăn thực vật) ➔ SV tiêu thụ bậc 2 (Ăn thịt) ➔ SV phân giải (Vi khuẩn, nấm).</p>
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex justify-end">
        <button onclick="closeFormulasModal()" class="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition">
          Đóng Sổ Tay
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-gray-700 dark:text-gray-300">Khóa Học Khoa Học Tự Nhiên Lớp 8 • SGK Kết Nối Tri Thức Với Cuộc Sống</p>
      <p>Nền tảng học tập CodeHub © 2026 • Đầy đủ 8 Chương, 47 Bài học, 47 Sơ đồ SVG &amp; Đấu trường Trạng Nguyên 60:00</p>
    </div>
  </footer>

  <!-- Script Logic -->
  <script>
    // 1. Dark Mode Toggle
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    }

    function updateThemeIcon(isDark) {
      const icon = document.getElementById('themeIcon');
      if (icon) icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      updateThemeIcon(true);
    } else {
      document.documentElement.classList.remove('dark');
      updateThemeIcon(false);
    }

    // 2. Filter by Branch (Tất cả, Hóa học, Vật lí, Sinh học)
    function filterBranch(branchName) {
      const buttons = document.querySelectorAll('.branch-filter-btn');
      buttons.forEach(btn => {
        const val = btn.getAttribute('data-branch');
        if (val === branchName) {
          btn.className = 'branch-filter-btn px-2 py-1 text-xs rounded-lg font-bold bg-teal-600 text-white text-center transition shadow-xs';
        } else {
          btn.className = 'branch-filter-btn px-2 py-1 text-xs rounded-lg font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-center transition';
        }
      });

      const cards = document.querySelectorAll('.lesson-card');
      cards.forEach(card => {
        if (branchName === 'all' || card.getAttribute('data-branch') === branchName) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      const navGroups = document.querySelectorAll('.chapter-nav-group');
      navGroups.forEach(g => {
        if (branchName === 'all' || g.getAttribute('data-branch') === branchName) {
          g.classList.remove('hidden');
        } else {
          g.classList.add('hidden');
        }
      });
    }

    // 3. Search Lessons
    function searchLessons() {
      const val = document.getElementById('lessonSearch').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.lesson-card');
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(val)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // 4. Modal Sổ tay Công thức
    function openFormulasModal() {
      document.getElementById('formulasModal').classList.remove('hidden');
      if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('formulasModal'), {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\\\(', right: '\\\\)', display: false},
            {left: '\\\\[', right: '\\\\]', display: true}
          ],
          throwOnError: false
        });
      }
    }
    function closeFormulasModal() {
      document.getElementById('formulasModal').classList.add('hidden');
    }

    // 5. Mini Quiz Handler
    function checkQuizAnswer(lessonId, questionIdx, selectedIdx, correctIdx, explanation) {
      const btns = document.querySelectorAll('.quiz-btn-' + lessonId + '-' + questionIdx);
      btns.forEach((btn, idx) => {
        btn.disabled = true;
        const icon = btn.querySelector('i');
        if (idx === correctIdx) {
          btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-200');
          if (icon) icon.className = 'fa-solid fa-circle-check text-emerald-600';
        } else if (idx === selectedIdx) {
          btn.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'border-rose-500', 'text-rose-800', 'dark:text-rose-200');
          if (icon) icon.className = 'fa-solid fa-circle-xmark text-rose-600';
        }
      });

      const fb = document.getElementById('feedback-' + lessonId + '-' + questionIdx);
      if (fb) {
        fb.classList.remove('hidden');
        const isRight = selectedIdx === correctIdx;
        fb.className = isRight 
          ? 'mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800'
          : 'mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
        fb.innerHTML = (isRight ? '<strong><i class=\"fa-solid fa-circle-check text-emerald-600\"></i> Chính xác!</strong> ' : '<strong><i class=\"fa-solid fa-circle-xmark text-rose-600\"></i> Chưa chính xác!</strong> ') + explanation;
      }
    }

    // 6. Đấu trường Trạng Nguyên Exam Logic (20 Questions - 60:00)
    const examQuestions = ${JSON.stringify(examQuestions)};
    let examTimeSeconds = 60 * 60;
    let examTimerInterval = null;
    let userExamAnswers = {};

    function startExam() {
      document.getElementById('examIntro').classList.add('hidden');
      document.getElementById('examBody').classList.remove('hidden');
      document.getElementById('examResult').classList.add('hidden');
      userExamAnswers = {};

      // Render Questions
      const listEl = document.getElementById('examQuestionsList');
      listEl.innerHTML = examQuestions.map((q, idx) => {
        const opts = q.options.map((opt, oIdx) => \`
          <label class="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer text-xs transition">
            <input type="radio" name="exam_q_\${idx}" value="\${oIdx}" onchange="selectExamAns(\${idx}, \${oIdx})" class="text-teal-500 focus:ring-0">
            <span>\${opt}</span>
          </label>
        \`).join('');

        return \`
          <div class="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p class="text-xs sm:text-sm font-bold text-white mb-3">
              <span class="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-xs font-black mr-2">Câu \${idx + 1}</span>
              \${q.q}
            </p>
            <div class="space-y-2">
              \${opts}
            </div>
          </div>
        \`;
      }).join('');

      // Start countdown
      examTimeSeconds = 60 * 60;
      updateTimerDisplay();
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        examTimeSeconds--;
        updateTimerDisplay();
        if (examTimeSeconds <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        }
      }, 1000);
    }

    function updateTimerDisplay() {
      const m = Math.floor(examTimeSeconds / 60);
      const s = examTimeSeconds % 60;
      const el = document.getElementById('examTimer');
      if (el) el.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    }

    function selectExamAns(qIdx, oIdx) {
      userExamAnswers[qIdx] = oIdx;
      const count = Object.keys(userExamAnswers).length;
      document.getElementById('answeredCount').innerText = 'Đã trả lời: ' + count + '/' + examQuestions.length + ' câu';
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);

      let correct = 0;
      examQuestions.forEach((q, idx) => {
        if (userExamAnswers[idx] === q.ans) correct++;
      });

      const total = examQuestions.length;
      const pct = Math.round((correct / total) * 100);

      document.getElementById('examBody').classList.add('hidden');
      document.getElementById('examResult').classList.remove('hidden');

      const titleEl = document.getElementById('resultTitle');
      const scoreEl = document.getElementById('resultScore');
      const msgEl = document.getElementById('resultMessage');
      const badgeEl = document.getElementById('resultBadge');

      scoreEl.innerText = 'Điểm số: ' + correct + '/' + total + ' (' + pct + '%)';

      if (correct >= 19) {
        titleEl.innerText = 'DANH HIỆU TRẠNG NGUYÊN KHOA HỌC TỰ NHIÊN 8 🏆';
        msgEl.innerText = 'Tuyệt đối xuất sắc! Em làm chủ toàn diện cả 3 phân môn Hóa học, Vật lí và Sinh học, tư duy logic và tính toán cực kì nhạy bén.';
        badgeEl.className = 'w-20 h-20 rounded-full bg-gradient-to-tr from-amber-300 to-amber-500 text-slate-950 text-3xl flex items-center justify-center mx-auto mb-3 shadow-xl';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-crown\"></i>';
      } else if (correct >= 16) {
        titleEl.innerText = 'DANH HIỆU BẢNG NHÃN (XUẤT SẮC) 🥈';
        msgEl.innerText = 'Rất tốt! Em có nền tảng kiến thức khoa học tự nhiên rất vững vàng, giải quyết tốt hầu hết các câu hỏi thực tế.';
        badgeEl.className = 'w-20 h-20 rounded-full bg-gradient-to-tr from-slate-200 to-slate-400 text-slate-950 text-3xl flex items-center justify-center mx-auto mb-3 shadow-xl';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-medal\"></i>';
      } else if (correct >= 13) {
        titleEl.innerText = 'DANH HIỆU THÁM HOA (KHÁ GIỎI) 🥉';
        msgEl.innerText = 'Khá tốt! Em đã nắm được nhiều công thức và quy luật cốt lõi, hãy tiếp tục rèn luyện thêm bài tập định lượng.';
        badgeEl.className = 'w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600 to-amber-800 text-white text-3xl flex items-center justify-center mx-auto mb-3 shadow-xl';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-award\"></i>';
      } else {
        titleEl.innerText = 'HOÀN THÀNH BÀI THI - CẦN CỐ GẮNG HƠN 🌱';
        msgEl.innerText = 'Em hãy mở sổ tay công thức và xem lại các bài học trọng tâm để củng cố lại kiến thức nhé.';
        badgeEl.className = 'w-20 h-20 rounded-full bg-gradient-to-tr from-teal-500 to-blue-600 text-white text-3xl flex items-center justify-center mx-auto mb-3 shadow-xl';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-book-reader\"></i>';
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
            <p class="text-gray-300 italic">💡 \${q.expl}</p>
          </div>
        \`;
      }).join('');
    }

    function resetExam() {
      startExam();
    }

    // 7. Auto render KaTeX when loaded
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

  // Output to both files
  const p1Path = path.join(__dirname, '../courses/khtn_8.html');
  const p2Path = path.join(__dirname, '../courses/science_8.html');

  fs.writeFileSync(p1Path, fullHtml, 'utf8');
  console.log('Saved:', p1Path, '(size:', fullHtml.length, 'bytes)');

  fs.writeFileSync(p2Path, fullHtml, 'utf8');
  console.log('Saved:', p2Path, '(size:', fullHtml.length, 'bytes)');
}

buildKhtn8Page();
