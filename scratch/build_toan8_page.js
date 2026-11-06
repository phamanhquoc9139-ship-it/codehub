// Builder script for Toán 8 (toan_8.html & math_8.html)
const fs = require('fs');
const path = require('path');

const dataP1 = require('./toan8_data_p1.js');
const dataP2 = require('./toan8_data_p2.js');
const diagrams = require('./toan8_diagrams_full.js');
const examQuestions = require('./toan8_exam.js');

const chapters = [...dataP1.chapters, ...dataP2.chapters];
const formulaSummary = dataP2.formulaSummary;
const commonMistakes = dataP2.commonMistakes;

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
}

function getDiagramForLesson(lessonId) {
  if (diagrams[lessonId]) return diagrams[lessonId];
  if (lessonId === 'bai-31' || lessonId === 'bai-32') return diagrams['bai-30'];
  return null;
}

function renderLesson(lesson, chapter) {
  const diagram = getDiagramForLesson(lesson.id);

  return `
  <article id="${lesson.id}" class="bg-white dark:bg-gray-850 rounded-2xl shadow-sm border border-gray-200/80 dark:border-gray-800 p-6 md:p-8 mb-10 transition-all hover:shadow-md">
    <!-- Header -->
    <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
      <div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-${chapter.color}-100 dark:bg-${chapter.color}-900/40 text-${chapter.color}-700 dark:text-${chapter.color}-300">
            <i class="fa-solid fa-bookmark"></i> ${lesson.lessonNum}
          </span>
          <span class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">${chapter.title}</span>
        </div>
        <h3 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-2">
          ${escapeHtml(lesson.title)}
        </h3>
        <p class="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
          Chương trình SGK Toán 8 Kết nối tri thức với cuộc sống
        </p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="markLessonComplete('${lesson.id}')" id="btn-comp-${lesson.id}" class="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300 transition-all flex items-center gap-1.5">
          <i class="fa-regular fa-circle-check"></i> Đánh dấu đã học
        </button>
      </div>
    </div>

    <!-- Goals Banner -->
    <div class="my-6 p-4 bg-${chapter.color}-50/60 dark:bg-${chapter.color}-950/20 rounded-xl border border-${chapter.color}-100 dark:border-${chapter.color}-900/40 flex items-start gap-3">
      <div class="w-8 h-8 rounded-lg bg-${chapter.color}-500/10 text-${chapter.color}-600 flex items-center justify-center shrink-0 mt-0.5">
        <i class="fa-solid fa-bullseye"></i>
      </div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-sm">Mục tiêu bài học:</h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">${escapeHtml(lesson.goals)}</p>
      </div>
    </div>

    <!-- Section 1: Theory -->
    <div class="mb-8">
      <h4 class="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3 text-${chapter.color}-600 dark:text-${chapter.color}-400">
        <i class="fa-solid fa-book"></i> 1. Kiến thức trọng tâm
      </h4>
      <div class="bg-gray-50/70 dark:bg-gray-800/40 p-5 rounded-xl border border-gray-200/70 dark:border-gray-700/70">
        ${lesson.theory}
      </div>
    </div>

    <!-- Diagram if available -->
    ${diagram ? `
      <div class="my-6 p-4 rounded-xl bg-white dark:bg-gray-900/60 border border-gray-200/70 dark:border-gray-700/70 shadow-xs">
        <div class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <i class="fa-solid fa-bezier-curve text-${chapter.color}-500"></i> Sơ đồ trực quan hình học
        </div>
        ${diagram}
      </div>
    ` : ''}

    <!-- Section 2: Examples -->
    ${lesson.examples && lesson.examples.length ? `
      <div class="mb-8">
        <h4 class="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3 text-${chapter.color}-600 dark:text-${chapter.color}-400">
          <i class="fa-solid fa-laptop-code"></i> 2. Ví dụ minh họa & Phương pháp giải
        </h4>
        <div class="space-y-4">
          ${lesson.examples.map(ex => `
            <div class="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200/80 dark:border-gray-700 shadow-xs">
              <h5 class="font-bold text-sm text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <i class="fa-solid fa-circle-question text-${chapter.color}-500 text-xs"></i> ${escapeHtml(ex.title)}
              </h5>
              <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-lg text-sm text-gray-800 dark:text-gray-200 mb-3 border border-gray-100 dark:border-gray-700">
                <strong>Đề bài:</strong> ${ex.q}
              </div>
              <div class="p-3.5 bg-emerald-50/60 dark:bg-emerald-950/20 rounded-lg text-sm text-emerald-900 dark:text-emerald-200 border border-emerald-100 dark:border-emerald-900/30 leading-relaxed">
                <strong>Lời giải chi tiết:</strong>
                <div class="mt-1">${ex.sol}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Section 3: Interactive Practice Quiz -->
    ${lesson.quiz && lesson.quiz.length ? `
      <div>
        <h4 class="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3 text-${chapter.color}-600 dark:text-${chapter.color}-400">
          <i class="fa-solid fa-pen-clip"></i> 3. Câu hỏi tự kiểm tra
        </h4>
        <div class="space-y-3">
          ${lesson.quiz.map((q, qIdx) => `
            <div class="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200/70 dark:border-gray-700/70">
              <p class="font-bold text-sm text-gray-900 dark:text-white mb-3">
                <span class="text-${chapter.color}-600 font-mono">Câu hỏi:</span> ${q.q}
              </p>
              <div class="grid sm:grid-cols-2 gap-2" id="quiz-${lesson.id}-${qIdx}">
                ${q.opts.map((opt, optIdx) => `
                  <button onclick="checkLessonQuiz('${lesson.id}', ${qIdx}, ${optIdx}, ${q.ans})" class="quiz-opt text-left px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-${chapter.color}-400 text-xs font-medium text-gray-800 dark:text-gray-200 transition-all flex items-center justify-between">
                    <span>${String.fromCharCode(65 + optIdx)}. ${opt}</span>
                    <i class="quiz-icon fa-regular fa-circle text-gray-300"></i>
                  </button>
                `).join('')}
              </div>
              <div id="quiz-exp-${lesson.id}-${qIdx}" class="hidden mt-3 p-3 bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200 text-xs rounded-lg border border-blue-200 dark:border-blue-800/50">
                <i class="fa-solid fa-circle-info mr-1"></i> <strong>Giải thích:</strong> ${q.explain}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  </article>
  `;
}

function buildHtml() {
  const content = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Toán 8 (Toán Lớp 8 - Trọn Bộ 10 Chương &amp; 39 Bài Học SGK Kết Nối Tri Thức: Tập 1 &amp; Tập 2 • Hình Vẽ Trực Quan &amp; Trạng Nguyên 60:00) | CodeHub</title>
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
            gray: {
              850: '#151c2c',
              950: '#070b14'
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

  <!-- Google Fonts & FontAwesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- KaTeX CSS & JS for Authentic Math formulas -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
    .katex { font-size: 1.05em; }
  </style>
</head>
<body class="bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen flex flex-col">

  <!-- Top Sticky Header -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Logo & Breadcrumb -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all">
            <i class="fa-solid fa-infinity text-lg"></i>
          </div>
          <div>
            <h1 class="text-base font-extrabold text-gray-900 dark:text-white flex items-center gap-1.5 leading-none">
              Toán Học 8
              <span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">Tập 1 &amp; Tập 2</span>
            </h1>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Kết nối tri thức với cuộc sống (10 Chương • 39 Bài)</p>
          </div>
        </a>
      </div>

      <!-- Quick Action Badges -->
      <div class="hidden md:flex items-center gap-3">
        <button onclick="openModal('modal-formulas')" class="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold hover:bg-blue-100 transition-all flex items-center gap-1.5">
          <i class="fa-solid fa-square-root-variable"></i> Sổ tay Công thức Toán 8
        </button>
        <button onclick="openModal('modal-mistakes')" class="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-bold hover:bg-amber-100 transition-all flex items-center gap-1.5">
          <i class="fa-solid fa-triangle-exclamation"></i> Lỗi cần tránh
        </button>
        <button onclick="openModal('modal-exam')" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-sm hover:opacity-95 transition-all flex items-center gap-1.5">
          <i class="fa-solid fa-graduation-cap"></i> Trạng Nguyên (60:00)
        </button>
      </div>

      <!-- Search & Controls -->
      <div class="flex items-center gap-2">
        <button onclick="openModal('modal-search')" class="p-2 w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all" title="Tìm kiếm nhanh (⌘K)">
          <i class="fa-solid fa-magnifying-glass text-sm"></i>
        </button>
        <button onclick="toggleDarkMode()" class="p-2 w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all" title="Chuyển chế độ sáng/tối">
          <i id="themeIcon" class="fa-solid fa-moon text-sm"></i>
        </button>
        <a href="../index.html" class="p-2 w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all" title="Trang chủ CodeHub">
          <i class="fa-solid fa-house text-sm"></i>
        </a>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="flex flex-col lg:flex-row gap-8">

      <!-- Left Navigation Sidebar -->
      <aside class="w-full lg:w-72 shrink-0">
        <div class="sticky top-24 bg-white dark:bg-gray-850 rounded-2xl p-5 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-6">
          <div>
            <div class="flex items-center justify-between text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
              <span>Tiến độ học tập</span>
              <span id="progress-text" class="text-blue-600 font-bold">0 / 39 bài</span>
            </div>
            <!-- Progress Bar -->
            <div class="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div id="progress-bar" class="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>

          <!-- Nav Items -->
          <nav class="space-y-4 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
            ${chapters.map(c => `
              <div>
                <a href="#${c.id}" class="flex items-center justify-between py-1.5 px-2 rounded-lg font-bold text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 hover:text-${c.color}-600 dark:hover:text-${c.color}-400">
                  <span class="flex items-center gap-2 truncate">
                    <i class="fa-solid ${c.icon} text-${c.color}-500"></i> ${c.code}: ${c.title}
                  </span>
                  <i class="fa-solid fa-chevron-down text-[10px] shrink-0"></i>
                </a>
                <ul class="mt-1 space-y-1 pl-3 border-l-2 border-gray-100 dark:border-gray-800">
                  ${c.lessons.map(l => `
                    <li>
                      <a href="#${l.id}" class="group flex items-center justify-between py-1 px-2 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 transition-all">
                        <span class="truncate">${l.lessonNum}: ${l.title}</span>
                        <i id="nav-chk-${l.id}" class="fa-regular fa-circle text-[10px] text-gray-300 dark:text-gray-600 group-hover:text-blue-600"></i>
                      </a>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </nav>

          <!-- Quick Sidebar Tools -->
          <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
            <button onclick="openModal('modal-formulas')" class="w-full py-2 px-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-left text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between">
              <span class="flex items-center gap-2"><i class="fa-solid fa-calculator text-blue-500"></i> Sổ tay Công thức</span>
              <i class="fa-solid fa-arrow-right text-[10px] text-gray-400"></i>
            </button>
            <button onclick="openModal('modal-mistakes')" class="w-full py-2 px-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-left text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between">
              <span class="flex items-center gap-2"><i class="fa-solid fa-triangle-exclamation text-amber-500"></i> Lỗi sai thường gặp</span>
              <i class="fa-solid fa-arrow-right text-[10px] text-gray-400"></i>
            </button>
            <button onclick="openModal('modal-exam')" class="w-full py-2 px-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-left text-xs font-bold text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 flex items-center justify-between">
              <span class="flex items-center gap-2"><i class="fa-solid fa-award text-blue-600"></i> Đấu trường Trạng Nguyên</span>
              <i class="fa-solid fa-play text-[10px]"></i>
            </button>
          </div>
        </div>
      </aside>

      <!-- Right Main Content -->
      <main class="flex-1 min-w-0">
        <!-- Hero Banner -->
        <section class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-6 md:p-10 text-white shadow-xl shadow-blue-600/10 mb-10 relative overflow-hidden">
          <div class="absolute -right-8 -bottom-8 opacity-10 select-none pointer-events-none text-white text-[160px] font-mono">
            &sum;
          </div>
          <div class="relative z-10 max-w-2xl">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/20 backdrop-blur-md mb-4">
              <i class="fa-solid fa-graduation-cap"></i> Học liệu số chuẩn Bộ Giáo dục &amp; Đào tạo (GDPT 2018)
            </span>
            <h2 class="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Khám Phá Toán Học 8
            </h2>
            <p class="text-sm md:text-base text-blue-100 mt-2 font-medium leading-relaxed">
              Trọn bộ 10 Chương • Đủ 39 Bài học (Tập một &amp; Tập hai) • Tích hợp KaTeX hiển thị công thức chuẩn đẹp • Sơ đồ hình học trực quan • Bộ đề thi Trạng Nguyên 40 câu bấm giờ 60:00.
            </p>

            <div class="flex flex-wrap items-center gap-3 mt-6">
              <button onclick="document.getElementById('chuong-1').scrollIntoView({behavior: 'smooth'})" class="px-5 py-2.5 rounded-xl bg-white text-blue-600 font-bold text-sm shadow-md hover:bg-blue-50 hover:scale-105 transition-all flex items-center gap-2">
                <i class="fa-solid fa-book-open"></i> Bắt đầu học ngay
              </button>
              <button onclick="openModal('modal-exam')" class="px-5 py-2.5 rounded-xl bg-blue-950/40 border border-white/30 text-white font-bold text-sm hover:bg-white/20 transition-all flex items-center gap-2">
                <i class="fa-solid fa-clock"></i> Thi Trạng Nguyên 60:00
              </button>
            </div>
          </div>
        </section>

        <!-- Dynamic Chapters Content -->
        ${chapters.map(c => `
          <section id="${c.id}" class="mb-14 scroll-mt-24">
            <!-- Chapter Header -->
            <div class="flex items-center gap-3 mb-6 pb-3 border-b-2 border-gray-200 dark:border-gray-800">
              <div class="w-12 h-12 rounded-2xl bg-${c.color}-100 dark:bg-${c.color}-950/60 text-${c.color}-600 dark:text-${c.color}-400 flex items-center justify-center text-xl shadow-sm">
                <i class="fa-solid ${c.icon}"></i>
              </div>
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-${c.color}-600 dark:text-${c.color}-400">${c.badge}</span>
                <h3 class="text-xl md:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2.5">
                  <span>${c.code}:</span>
                  <span>${c.title}</span>
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">${c.desc}</p>
              </div>
            </div>

            <!-- Lessons in Chapter -->
            <div class="space-y-4">
              ${c.lessons.map(l => renderLesson(l, c)).join('')}
            </div>
          </section>
        `).join('')}

      </main>
    </div>
  </div>

  <!-- SỔ TAY CÔNG THỨC TOÁN 8 MODAL -->
  <div id="modal-formulas" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center text-lg">
            <i class="fa-solid fa-square-root-variable"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Sổ Tay 18 Công Thức Toán 8 Trọng Tâm</h3>
            <p class="text-xs text-gray-400">Hệ thống đầy đủ công thức Đại số, Hình học phẳng, Thống kê, Xác suất &amp; Không gian</p>
          </div>
        </div>
        <button onclick="closeModal('modal-formulas')" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="mt-6 overflow-x-auto">
        <table class="w-full text-left text-xs text-gray-600 dark:text-gray-300">
          <thead class="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 uppercase font-bold text-[11px] border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th class="p-3 w-12 text-center">STT</th>
              <th class="p-3 w-48">Nội Dung</th>
              <th class="p-3">Công Thức / Định Lí</th>
              <th class="p-3 w-28 text-center">Chương</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
            ${formulaSummary.map((f, fIdx) => `
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td class="p-3 font-mono text-center font-bold text-blue-600">${fIdx + 1}</td>
                <td class="p-3 font-bold text-gray-900 dark:text-white">${f.name}</td>
                <td class="p-3 font-mono text-xs text-gray-800 dark:text-gray-200">${f.formula}</td>
                <td class="p-3 text-center"><span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold">${f.chap}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- SỔ TAY CẢNH GIÁC LỖI SAI MODAL -->
  <div id="modal-mistakes" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-lg">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Cảnh Giác Các Lỗi Sai Thường Gặp</h3>
            <p class="text-xs text-gray-400">Các bẫy toán học học sinh lớp 8 hay mắc phải trong bài thi</p>
          </div>
        </div>
        <button onclick="closeModal('modal-mistakes')" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="mt-6 space-y-4">
        ${commonMistakes.map(m => `
          <div class="p-4 bg-amber-50/60 dark:bg-amber-950/20 rounded-xl border border-amber-200/70 dark:border-amber-800/60">
            <h4 class="font-bold text-sm text-amber-900 dark:text-amber-200 flex items-center gap-2">
              <i class="fa-solid fa-ban text-amber-600"></i> ${escapeHtml(m.title)}
            </h4>
            <p class="text-xs text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">${m.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- ĐẤU TRƯỜNG TRẠNG NGUYÊN 40 CÂU (60:00) MODAL -->
  <div id="modal-exam" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 shrink-0">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
            <i class="fa-solid fa-trophy"></i> Đấu Trường Trạng Nguyên Toán 8
          </span>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-1">Đề Thi Trắc Nghiệm Toàn Diện 40 Câu</h3>
          <p class="text-xs text-gray-400">Bao quát toàn bộ 10 chương • Bấm giờ chuẩn 60 phút • Tự động chấm điểm &amp; giải thích cặn kẽ</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-600 font-mono font-bold text-lg flex items-center gap-2">
            <i class="fa-solid fa-stopwatch animate-pulse"></i>
            <span id="exam-timer">60:00</span>
          </div>
          <button onclick="closeModal('modal-exam')" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div id="exam-content" class="mt-6 space-y-6 flex-1 overflow-y-auto pr-2">
        ${examQuestions.map((eq, qIdx) => `
          <div class="p-5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200/70 dark:border-gray-700/70" id="exam-card-${qIdx}">
            <div class="flex items-center justify-between text-xs text-gray-400 uppercase font-bold tracking-wider mb-2">
              <span>${eq.part}</span>
              <span>Câu ${qIdx + 1} / 40</span>
            </div>
            <p class="text-base font-bold text-gray-900 dark:text-white mb-4">${eq.q}</p>
            <div class="grid sm:grid-cols-2 gap-2.5">
              ${eq.opts.map((opt, oIdx) => `
                <label class="exam-option-label flex items-start gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-blue-500 cursor-pointer transition-all">
                  <input type="radio" name="exam_q_${qIdx}" value="${oIdx}" class="mt-1 text-blue-600 focus:ring-blue-500">
                  <span class="text-xs font-medium text-gray-800 dark:text-gray-200 leading-relaxed">${String.fromCharCode(65 + oIdx)}. ${opt}</span>
                </label>
              `).join('')}
            </div>
            <div id="exam-explain-${qIdx}" class="hidden mt-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs text-blue-900 dark:text-blue-200">
              <strong>Giải thích:</strong> ${eq.explain}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Exam Result Banner -->
      <div id="exam-result-banner" class="hidden p-6 mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg text-center">
        <h4 class="text-2xl font-black">KẾT QUẢ BÀI THI</h4>
        <p class="text-base mt-1" id="exam-score-text">Bạn đạt: 0 / 40 câu đúng</p>
        <p class="text-xs text-blue-100 mt-0.5" id="exam-rank-text">Danh hiệu: Trạng Nguyên Toán 8</p>
      </div>

      <!-- Exam Footer Controls -->
      <div class="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between shrink-0">
        <button onclick="resetExam()" class="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100">
          Làm lại từ đầu
        </button>
        <button id="btn-submit-exam" onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md hover:opacity-95 transition-all">
          <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp bài chấm điểm
        </button>
      </div>
    </div>
  </div>

  <!-- TÌM KIẾM NHANH MODAL (⌘K) -->
  <div id="modal-search" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="relative">
        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3.5 text-gray-400"></i>
        <input id="searchInput" type="text" placeholder="Tìm kiếm trong 39 bài học (khái niệm, định lí, bài toán)..." oninput="performSearch()" class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm font-medium text-gray-900 dark:text-white focus:outline-none focus:border-blue-500">
      </div>
      <div id="searchResults" class="mt-4 max-h-72 overflow-y-auto space-y-2 text-xs">
        <p class="text-gray-400 text-center py-6">Nhập từ khóa để bắt đầu tra cứu nhanh...</p>
      </div>
      <div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 text-[11px] text-gray-400 flex items-center justify-between">
        <span>Nhấn Esc để đóng</span>
        <button onclick="closeModal('modal-search')" class="text-blue-600 font-bold">Đóng</button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold">
          &int;
        </div>
        <div>
          <p class="text-sm font-bold text-gray-900 dark:text-white">Nền tảng Học số Toán Học 8</p>
          <p class="text-xs text-gray-400">Bộ Kết nối tri thức với cuộc sống • Trọn bộ 10 Chương (39 Bài học)</p>
        </div>
      </div>
      <p class="text-xs text-gray-400 text-center md:text-right">
        CodeHub Learning Platform © 2026. Thiết kế bài giảng số tương tác cao.
      </p>
    </div>
  </footer>

  <!-- Client-side Logic Script -->
  <script>
    // 1. KaTeX Auto-render
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
        if (attempts > 20) clearInterval(interval);
      }, 300);
    }

    document.addEventListener("DOMContentLoaded", ensureMathRendered);
    window.addEventListener("load", ensureMathRendered);
    setTimeout(ensureMathRendered, 500);
    setTimeout(ensureMathRendered, 1500);

    // 2. Dark Mode
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    }
    function updateThemeIcon(isDark) {
      const icon = document.getElementById('themeIcon');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun text-amber-400 text-sm' : 'fa-solid fa-moon text-sm';
      }
    }
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      updateThemeIcon(true);
    } else {
      document.documentElement.classList.remove('dark');
      updateThemeIcon(false);
    }

    // 3. Modals
    function openModal(id) {
      const m = document.getElementById(id);
      if (m) {
        m.classList.remove('hidden');
        m.classList.add('flex');
        if (id === 'modal-search') {
          setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
        }
        if (id === 'modal-exam' && !examTimerInterval) {
          startExamTimer();
        }
        setTimeout(renderMath, 100);
      }
    }
    function closeModal(id) {
      const m = document.getElementById(id);
      if (m) {
        m.classList.add('hidden');
        m.classList.remove('flex');
      }
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        ['modal-formulas', 'modal-mistakes', 'modal-exam', 'modal-search'].forEach(closeModal);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openModal('modal-search');
      }
    });

    // 4. Interactive Practice Check
    function checkLessonQuiz(lessonId, pIdx, chosenIdx, correctIdx) {
      const container = document.getElementById(\`quiz-\${lessonId}-\${pIdx}\`);
      if (!container) return;
      const buttons = container.querySelectorAll('.quiz-opt');
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        const icon = btn.querySelector('.quiz-icon');
        if (idx === correctIdx) {
          btn.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-700', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
          if (icon) icon.className = 'quiz-icon fa-solid fa-circle-check text-emerald-500';
        } else if (idx === chosenIdx) {
          btn.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-700', 'dark:bg-rose-950/40', 'dark:text-rose-300');
          if (icon) icon.className = 'quiz-icon fa-solid fa-circle-xmark text-rose-500';
        }
      });
      const exp = document.getElementById(\`quiz-exp-\${lessonId}-\${pIdx}\`);
      if (exp) {
        exp.classList.remove('hidden');
        renderMath();
      }
    }

    // 5. Progress Tracking (39 lessons)
    const completedLessons = new Set(JSON.parse(localStorage.getItem('toan8_completed') || '[]'));
    function markLessonComplete(lessonId) {
      if (completedLessons.has(lessonId)) {
        completedLessons.delete(lessonId);
      } else {
        completedLessons.add(lessonId);
      }
      localStorage.setItem('toan8_completed', JSON.stringify([...completedLessons]));
      updateProgressUI();
    }
    function updateProgressUI() {
      const totalLessons = 39;
      const count = completedLessons.size;
      const pct = Math.round((count / totalLessons) * 100);
      const bar = document.getElementById('progress-bar');
      const text = document.getElementById('progress-text');
      if (bar) bar.style.width = pct + '%';
      if (text) text.innerText = \`\${count} / \${totalLessons} bài\`;

      document.querySelectorAll('[id^=\"btn-comp-\"]').forEach(btn => {
        const id = btn.id.replace('btn-comp-', '');
        if (completedLessons.has(id)) {
          btn.innerHTML = '<i class=\"fa-solid fa-circle-check text-emerald-500\"></i> Đã hoàn thành';
          btn.classList.add('bg-emerald-50', 'text-emerald-700', 'border-emerald-300', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
        } else {
          btn.innerHTML = '<i class=\"fa-regular fa-circle-check\"></i> Đánh dấu đã học';
          btn.classList.remove('bg-emerald-50', 'text-emerald-700', 'border-emerald-300', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
        }
      });

      document.querySelectorAll('[id^=\"nav-chk-\"]').forEach(icon => {
        const id = icon.id.replace('nav-chk-', '');
        if (completedLessons.has(id)) {
          icon.className = 'fa-solid fa-circle-check text-xs text-emerald-500';
        } else {
          icon.className = 'fa-regular fa-circle text-[10px] text-gray-300 dark:text-gray-600';
        }
      });
    }
    updateProgressUI();

    // 6. Exam Logic (40 questions, 60 mins)
    const examQuestionsData = ${JSON.stringify(examQuestions)};
    let examTimeLeft = 60 * 60; // 3600 seconds
    let examTimerInterval = null;

    function startExamTimer() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        examTimeLeft--;
        const mins = Math.floor(examTimeLeft / 60);
        const secs = examTimeLeft % 60;
        const display = \`\${String(mins).padStart(2, '0')}:\${String(secs).padStart(2, '0')}\`;
        const timerEl = document.getElementById('exam-timer');
        if (timerEl) timerEl.innerText = display;

        if (examTimeLeft <= 0) {
          clearInterval(examTimerInterval);
          alert('Đã hết 60 phút làm bài! Hệ thống tự động nộp bài.');
          submitExam();
        }
      }, 1000);
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let score = 0;

      examQuestionsData.forEach((q, idx) => {
        const radios = document.getElementsByName(\`exam_q_\${idx}\`);
        let selectedVal = null;
        for (const r of radios) {
          if (r.checked) {
            selectedVal = parseInt(r.value, 10);
            break;
          }
        }
        
        // Show explanation
        const exp = document.getElementById(\`exam-explain-\${idx}\`);
        if (exp) exp.classList.remove('hidden');

        // Color labels
        const card = document.getElementById(\`exam-card-\${idx}\`);
        const labels = card ? card.querySelectorAll('.exam-option-label') : [];
        labels.forEach((lbl, oIdx) => {
          if (oIdx === q.ans) {
            lbl.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-800', 'dark:bg-emerald-950/40', 'dark:text-emerald-200');
          } else if (oIdx === selectedVal && selectedVal !== q.ans) {
            lbl.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-800', 'dark:bg-rose-950/40', 'dark:text-rose-200');
          }
        });

        if (selectedVal === q.ans) {
          score++;
        }
      });

      // Show Banner
      const banner = document.getElementById('exam-result-banner');
      const scoreText = document.getElementById('exam-score-text');
      const rankText = document.getElementById('exam-rank-text');
      if (banner && scoreText && rankText) {
        banner.classList.remove('hidden');
        scoreText.innerText = \`Bạn đạt: \${score} / 40 câu đúng (\${Math.round((score / 40) * 100)}%)\`;
        let rank = 'Cần cố gắng thêm';
        if (score >= 36) rank = 'Xuất sắc — Trạng Nguyên Toán 8!';
        else if (score >= 30) rank = 'Giỏi — Bảng Nhãn Toán 8';
        else if (score >= 24) rank = 'Khá — Thám Hoa Toán 8';
        rankText.innerText = \`Danh hiệu: \${rank}\`;
        banner.scrollIntoView({ behavior: 'smooth' });
      }

      const submitBtn = document.getElementById('btn-submit-exam');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
      }
      renderMath();
    }

    function resetExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimeLeft = 60 * 60;
      examQuestionsData.forEach((q, idx) => {
        const radios = document.getElementsByName(\`exam_q_\${idx}\`);
        for (const r of radios) r.checked = false;
        const exp = document.getElementById(\`exam-explain-\${idx}\`);
        if (exp) exp.classList.add('hidden');
        const card = document.getElementById(\`exam-card-\${idx}\`);
        const labels = card ? card.querySelectorAll('.exam-option-label') : [];
        labels.forEach(lbl => {
          lbl.classList.remove('bg-emerald-50', 'border-emerald-500', 'text-emerald-800', 'dark:bg-emerald-950/40', 'dark:text-emerald-200', 'bg-rose-50', 'border-rose-500', 'text-rose-800', 'dark:bg-rose-950/40', 'dark:text-rose-200');
        });
      });
      const banner = document.getElementById('exam-result-banner');
      if (banner) banner.classList.add('hidden');
      const submitBtn = document.getElementById('btn-submit-exam');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }
      startExamTimer();
      renderMath();
    }

    // 7. Search Engine
    const searchData = [
      ${chapters.flatMap(c => c.lessons.flatMap(l => [
        { type: 'Bài học', title: `${l.lessonNum}: ${l.title}`, url: `#${l.id}`, sub: l.goals }
      ])).map(item => JSON.stringify(item)).join(',\n      ')}
    ];

    function performSearch() {
      const q = document.getElementById('searchInput').value.trim().toLowerCase();
      const resContainer = document.getElementById('searchResults');
      if (!resContainer) return;

      if (!q) {
        resContainer.innerHTML = '<p class="text-gray-400 text-center py-6">Nhập từ khóa để bắt đầu tra cứu nhanh...</p>';
        return;
      }

      const matches = searchData.filter(item => 
        item.title.toLowerCase().includes(q) || 
        (item.sub && item.sub.toLowerCase().includes(q))
      ).slice(0, 15);

      if (!matches.length) {
        resContainer.innerHTML = '<p class="text-gray-400 text-center py-6">Không tìm thấy kết quả nào phù hợp.</p>';
        return;
      }

      resContainer.innerHTML = matches.map(m => \`
        <a href="\${m.url}" onclick="closeModal('modal-search')" class="block p-3 rounded-xl bg-gray-50 dark:bg-gray-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-gray-100 dark:border-gray-700/60 transition-all">
          <div class="flex items-center justify-between">
            <span class="font-bold text-gray-900 dark:text-white text-xs">\${m.title}</span>
            <span class="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">\${m.type}</span>
          </div>
          <p class="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 truncate">\${m.sub || ''}</p>
        </a>
      \`).join('');
    }
  </script>
</body>
</html>`;

  const outPath1 = path.resolve(__dirname, '../courses/toan_8.html');
  const outPath2 = path.resolve(__dirname, '../courses/math_8.html');

  fs.writeFileSync(outPath1, content, 'utf8');
  fs.writeFileSync(outPath2, content, 'utf8');

  console.log('Successfully generated Toán 8 courses:');
  console.log('1.', outPath1, 'Size:', (fs.statSync(outPath1).size / 1024).toFixed(2), 'KB');
  console.log('2.', outPath2, 'Size:', (fs.statSync(outPath2).size / 1024).toFixed(2), 'KB');
}

buildHtml();
