const fs = require('fs');
const path = require('path');
const { toan6Data } = require('./generate_toan6_data.js');
const { chapterSVGs } = require('./generate_toan6_svgs.js');

function buildToan6HTML() {
  const navItems = toan6Data.map(ch => `
    <a href="#chapter-${ch.id}" class="chapter-nav-link flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/40 text-gray-700 dark:text-gray-300 transition group text-xs font-semibold" data-id="${ch.id}">
      <span class="truncate flex items-center gap-2">
        <span class="w-5 h-5 rounded-full ${ch.volume === 1 ? 'bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400' : 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400'} flex items-center justify-center text-[10px] font-bold">${ch.id}</span>
        ${ch.chapterNum}: ${ch.title}
      </span>
      <span class="text-[10px] px-1.5 py-0.5 rounded ${ch.volume === 1 ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300' : 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300'} font-normal">T${ch.volume}</span>
    </a>
  `).join('\n');

  const chapterSections = toan6Data.map(ch => {
    const svgCode = chapterSVGs[ch.id] || '';

    const sectionsHTML = ch.sections.map(sec => `
      <div class="mb-5 p-4 rounded-2xl bg-white dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition">
        <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full ${ch.volume === 1 ? 'bg-blue-500' : 'bg-emerald-500'}"></span>
          ${sec.title}
        </h4>
        <div class="prose dark:prose-invert max-w-none text-xs sm:text-sm">
          ${sec.content}
        </div>
      </div>
    `).join('\n');

    const quizCards = ch.quizzes.map((q, qIdx) => `
      <div class="quiz-item p-4 rounded-xl bg-gray-50/80 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700" data-chapter="${ch.id}" data-q="${qIdx}">
        <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-start gap-2">
          <span class="px-2 py-0.5 rounded ${ch.volume === 1 ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300' : 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'} text-xs font-bold">Q${qIdx + 1}</span>
          <span>${q.q}</span>
        </p>
        <div class="space-y-2">
          ${q.options.map((opt, optIdx) => `
            <button onclick="checkMathQuiz(this, ${ch.id}, ${qIdx}, ${optIdx}, ${q.ans})" class="quiz-opt-btn w-full text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 text-xs sm:text-sm text-gray-800 dark:text-gray-200 transition flex items-center justify-between group">
              <span>${opt.replace('(Recommended) ', '')}</span>
              <i class="fa-regular fa-circle text-gray-400 group-hover:text-blue-500 text-xs"></i>
            </button>
          `).join('\n')}
        </div>
        <div class="quiz-feedback hidden mt-3 p-2.5 rounded-lg text-xs leading-relaxed"></div>
      </div>
    `).join('\n');

    return `
      <!-- CHAPTER ${ch.id}: ${ch.title} -->
      <section id="chapter-${ch.id}" class="chapter-card scroll-mt-20 mb-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 shadow-md hover:shadow-xl transition relative overflow-hidden">
        <div class="absolute top-0 right-0 w-48 h-48 ${ch.volume === 1 ? 'bg-blue-500/5 dark:bg-blue-500/10' : 'bg-emerald-500/5 dark:bg-emerald-500/10'} rounded-full blur-3xl pointer-events-none"></div>

        <!-- Chapter Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${ch.volume === 1 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300'}">
                TOÁN 6 • TẬP ${ch.volume === 1 ? 'MỘT' : 'HAI'}
              </span>
              <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                ${ch.tag}
              </span>
            </div>
            <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
              ${ch.chapterNum}: ${ch.title}
            </h2>
          </div>
          <button onclick="scrollToExam()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm">
            <i class="fa-solid fa-trophy text-[11px]"></i> <span>Thi Trạng Nguyên</span>
          </button>
        </div>

        <!-- SVG Illustration -->
        <div class="mb-6 p-4 rounded-2xl bg-gray-50/70 dark:bg-gray-900/50 border border-gray-200/60 dark:border-gray-700/60">
          <div class="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-draw-polygon text-blue-500"></i> Sơ đồ trực quan toán học minh họa
          </div>
          ${svgCode}
        </div>

        <!-- Core Knowledge Sections -->
        <div class="mb-8">
          <h3 class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <i class="fa-solid fa-book-open text-blue-500"></i> Nội dung kiến thức cốt lõi SGK
          </h3>
          ${sectionsHTML}
        </div>

        <!-- Interactive Quizzes -->
        <div class="pt-6 border-t border-gray-100 dark:border-gray-700">
          <h3 class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <i class="fa-solid fa-circle-question text-purple-500"></i> Luyện tập trắc nghiệm tự chấm điểm (${ch.quizzes.length} câu)
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${quizCards}
          </div>
        </div>
      </section>
    `;
  }).join('\n');

  const fullHTML = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Toán 6 (Toán Lớp 6 - CTGDPT 2018 Kết Nối Tri Thức: 2 Tập • 9 Chương • Sơ Đồ Trực Quan &amp; Trạng Nguyên 60:00) | CodeHub</title>
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
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- KaTeX CSS & JS for Math formulas -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

  <style>
    .glass-header {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .katex-display {
      margin: 0.5em 0 !important;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 4px 0;
    }
  </style>
</head>
<body class="bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans antialiased min-h-screen">

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 glass-header transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group" title="Về trang chủ CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-calculator text-base"></i>
          </div>
          <div>
            <span class="font-black text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">CodeHub</span>
            <span class="text-xs text-gray-500 dark:text-gray-400 block -mt-1 font-medium">Toán Học 6 • KNTT</span>
          </div>
        </a>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <button onclick="toggleFormulaModal()" class="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold transition flex items-center gap-1.5 border border-blue-200 dark:border-blue-800">
          <i class="fa-solid fa-square-root-variable text-blue-600 dark:text-blue-400"></i>
          <span class="hidden sm:inline">Sổ tay Công thức 6</span>
        </button>

        <button onclick="scrollToExam()" class="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/60 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 text-xs font-bold transition flex items-center gap-1.5 border border-amber-200 dark:border-amber-800">
          <i class="fa-solid fa-award text-amber-500"></i>
          <span class="hidden sm:inline">Trạng Nguyên (60:00)</span>
        </button>

        <!-- Dark Mode Toggle -->
        <button id="themeToggleBtn" onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition">
          <i id="themeIcon" class="fa-solid fa-moon"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Banner -->
  <section class="bg-gradient-to-b from-blue-600 to-indigo-800 text-white py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-xs font-semibold mb-3">
            <i class="fa-solid fa-graduation-cap text-amber-300"></i> 
            <span>Toán Học Lớp 6 • Kết Nối Tri Thức Với Cuộc Sống (Tập 1 &amp; Tập 2)</span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Khóa Học Kiến Thức Cốt Lõi Toán Lớp 6
          </h1>
          <p class="mt-2 text-sm sm:text-base text-blue-100 leading-relaxed">
            Hệ thống hóa toàn bộ 9 Chương của cả 2 tập sách: Số tự nhiên, Tính chia hết, Số nguyên, Hình học thực tiễn &amp; Đối xứng, Phân số, Số thập phân, Hình học phẳng cơ bản, Thống kê và Xác suất thực nghiệm. Tích hợp sơ đồ trực quan và ngân hàng trắc nghiệm tự chấm điểm.
          </p>
          <div class="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span class="px-2.5 py-1 rounded-lg bg-black/25 backdrop-blur font-medium">
              <i class="fa-solid fa-book-open text-blue-300"></i> 2 Tập • 9 Chương
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-black/25 backdrop-blur font-medium">
              <i class="fa-solid fa-draw-polygon text-emerald-300"></i> 9 Sơ đồ SVG Trực quan
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-black/25 backdrop-blur font-medium">
              <i class="fa-solid fa-circle-check text-purple-300"></i> 18 Trắc nghiệm tự chấm
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-black/25 backdrop-blur font-medium">
              <i class="fa-solid fa-stopwatch text-amber-300"></i> Đấu trường 60:00
            </span>
          </div>
        </div>

        <!-- Quick Jump to Volume -->
        <div class="w-full lg:w-auto flex flex-row lg:flex-col gap-2 shrink-0">
          <a href="#chapter-1" class="flex-1 lg:flex-initial px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 transition text-left">
            <div class="text-[11px] font-semibold text-blue-200">TẬP MỘT (Học kì 1)</div>
            <div class="text-sm font-bold text-white">Chương I – V: Số &amp; Hình học</div>
          </a>
          <a href="#chapter-6" class="flex-1 lg:flex-initial px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 transition text-left">
            <div class="text-[11px] font-semibold text-emerald-200">TẬP HAI (Học kì 2)</div>
            <div class="text-sm font-bold text-white">Chương VI – IX: Phân số &amp; Thống kê</div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

      <!-- Sidebar Sticky Menu (1 col) -->
      <aside class="lg:col-span-1 sticky top-20 bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm max-h-[calc(100vh-6rem)] overflow-y-auto">
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-700">
          <span class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mục lục 9 Chương</span>
          <span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">Toán 6</span>
        </div>
        
        <div class="space-y-1">
          <div class="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-2 py-1">Tập Một (Học kì 1)</div>
          ${navItems.slice(0, 5)}
          
          <div class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-2 pt-3 pb-1">Tập Hai (Học kì 2)</div>
          ${navItems.slice(5)}
        </div>

        <div class="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 space-y-2">
          <button onclick="toggleFormulaModal()" class="w-full text-left p-2.5 rounded-xl bg-blue-50/70 hover:bg-blue-100 dark:bg-blue-950/40 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold transition flex items-center justify-between">
            <span class="flex items-center gap-2">
              <i class="fa-solid fa-square-root-variable"></i> Sổ tay Công thức 6
            </span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
          <button onclick="scrollToExam()" class="w-full text-left p-2.5 rounded-xl bg-amber-50/70 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 text-xs font-bold transition flex items-center justify-between">
            <span class="flex items-center gap-2">
              <i class="fa-solid fa-trophy text-amber-500"></i> Thi Trạng Nguyên (60p)
            </span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
        </div>
      </aside>

      <!-- Main Course Content (3 cols) -->
      <main class="lg:col-span-3 space-y-8">
        ${chapterSections}

        <!-- ĐẤU TRƯỜNG TRẠNG NGUYÊN TOÁN HỌC 6 -->
        <section id="math-exam-section" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white shadow-xl relative overflow-hidden border border-blue-500/30">
          <div class="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <span class="px-3 py-1 rounded-full bg-amber-400 text-gray-950 text-xs font-black tracking-wide uppercase inline-flex items-center gap-1.5 shadow">
                <i class="fa-solid fa-trophy"></i> Đấu Trường Trạng Nguyên
              </span>
              <h3 class="text-xl sm:text-3xl font-black mt-2 tracking-tight">Hội Thi Trạng Nguyên Toán Học 6</h3>
              <p class="text-xs sm:text-sm text-blue-200 mt-1">Đề thi tổng hợp 9 chương Toán 6 • 18 câu trắc nghiệm • Thời gian 60 phút</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="text-center px-4 py-2 rounded-2xl bg-black/40 backdrop-blur border border-white/10">
                <div class="text-2xl sm:text-3xl font-mono font-black text-amber-400" id="examTimer">60:00</div>
                <div class="text-[10px] text-blue-200 uppercase font-semibold">Thời gian còn lại</div>
              </div>
            </div>
          </div>

          <div id="examIntro" class="text-center py-8 space-y-4">
            <p class="text-sm text-blue-100 max-w-lg mx-auto">
              Thử thách kiến thức toàn diện Toán 6 (Tập 1 &amp; Tập 2). Hệ thống tự động chấm điểm và xếp hạng Trạng Nguyên Toán Học ngay khi nộp bài.
            </p>
            <button onclick="startExam()" class="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-950 font-black text-sm transition transform hover:scale-105 shadow-lg shadow-amber-500/25 inline-flex items-center gap-2">
              <i class="fa-solid fa-play"></i> Bắt đầu làm bài thi (60:00)
            </button>
          </div>

          <div id="examQuestions" class="hidden space-y-6 pt-2">
            <!-- Questions rendered by JS -->
          </div>

          <div id="examResult" class="hidden mt-6 p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-center space-y-3">
            <h4 class="text-2xl font-black text-amber-400" id="resultTitle">Hoàn Thành Bài Thi!</h4>
            <div class="text-4xl font-black text-white" id="resultScore">0 / 18</div>
            <p class="text-xs sm:text-sm text-blue-100" id="resultFeedback"></p>
            <button onclick="resetExam()" class="px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition inline-flex items-center gap-2">
              <i class="fa-solid fa-rotate-left"></i> Làm lại đề thi
            </button>
          </div>
        </section>
      </main>

    </div>
  </div>

  <!-- SỔ TAY CÔNG THỨC MODAL -->
  <div id="formulaModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-2xl relative">
      <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-gray-700">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-square-root-variable text-blue-600"></i>
          Sổ Tay Công Thức Trọng Tâm Toán 6 (KNTT)
        </h3>
        <button onclick="toggleFormulaModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-800 dark:text-blue-300 mb-1">1. Lũy thừa số tự nhiên:</h4>
          <p>• \\(a^m \\cdot a^n = a^{m+n}\\)<br>• \\(a^m : a^n = a^{m-n}\\) (\\(a \\ne 0, m \\ge n\\))<br>• Quy ước: \\(a^1 = a\\); \\(a^0 = 1\\) (\\(a \\ne 0\\)).</p>
        </div>

        <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-800 dark:text-emerald-300 mb-1">2. Chu vi &amp; Diện tích các hình phẳng:</h4>
          <p>• <strong>Hình chữ nhật:</strong> \\(C = 2(a + b)\\); \\(S = a \\cdot b\\)<br>• <strong>Hình vuông:</strong> \\(C = 4a\\); \\(S = a^2\\)<br>• <strong>Hình bình hành:</strong> \\(S = a \\cdot h\\)<br>• <strong>Hình thoi:</strong> \\(S = \\frac{1}{2} a \\cdot b\\)<br>• <strong>Hình thang cân:</strong> \\(S = \\frac{1}{2}(a + b) \\cdot h\\)</p>
        </div>

        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-800 dark:text-purple-300 mb-1">3. Phân số &amp; Tỉ số phần trăm:</h4>
          <p>• Hai phân số bằng nhau: \\(\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c\\)<br>• Tìm \\(\\frac{m}{n}\\) của số \\(a\\): Tính \\(a \\cdot \\frac{m}{n}\\)<br>• Tìm một số biết \\(\\frac{m}{n}\\) của nó là \\(b\\): Tính \\(b : \\frac{m}{n}\\)<br>• Tỉ số phần trăm: \\(\\frac{a}{b} \\cdot 100\\%\\)</p>
        </div>

        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-800 dark:text-amber-300 mb-1">4. Xác suất thực nghiệm:</h4>
          <p>• \\(\\text{Xác suất thực nghiệm} = \\frac{k}{n} = \\frac{\\text{Số lần sự kiện xảy ra}}{\\text{Tổng số lần thực hiện thí nghiệm}}\\)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- JavaScript Interaction -->
  <script>
    // KaTeX Auto-render configuration
    document.addEventListener("DOMContentLoaded", function() {
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
    });

    // Dark Mode Toggle
    function toggleDarkMode() {
      const html = document.documentElement;
      const icon = document.getElementById('themeIcon');
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        icon.className = 'fa-solid fa-moon';
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        icon.className = 'fa-solid fa-sun';
        localStorage.setItem('theme', 'dark');
      }
    }
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      const icon = document.getElementById('themeIcon');
      if (icon) icon.className = 'fa-solid fa-sun';
    }

    // Modal Sổ tay công thức
    function toggleFormulaModal() {
      const modal = document.getElementById('formulaModal');
      modal.classList.toggle('hidden');
    }

    // Cuộn tới phần thi
    function scrollToExam() {
      const sec = document.getElementById('math-exam-section');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    }

    // Dữ liệu trắc nghiệm từng chương
    const chaptersData = ${JSON.stringify(toan6Data)};

    // Chấm trắc nghiệm từng bài
    function checkMathQuiz(btn, chapterId, qIdx, selectedOptIdx, correctAnsIdx) {
      const parent = btn.closest('.quiz-item');
      const buttons = parent.querySelectorAll('.quiz-opt-btn');
      const feedback = parent.querySelector('.quiz-feedback');
      const qData = chaptersData.find(c => c.id === chapterId).quizzes[qIdx];

      buttons.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:border-blue-400', 'group');
      });

      if (selectedOptIdx === correctAnsIdx) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/50', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300', 'font-bold');
        btn.querySelector('i').className = 'fa-solid fa-circle-check text-emerald-500 text-xs';
        feedback.className = 'quiz-feedback mt-3 p-2.5 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800';
        feedback.innerHTML = '<span class="font-bold">Chính xác! 🎉</span> ' + qData.expl;
      } else {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/50', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300', 'font-bold');
        btn.querySelector('i').className = 'fa-solid fa-circle-xmark text-rose-500 text-xs';
        
        const correctBtn = buttons[correctAnsIdx];
        if (correctBtn) {
          correctBtn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/50', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300', 'font-bold');
          correctBtn.querySelector('i').className = 'fa-solid fa-circle-check text-emerald-500 text-xs';
        }

        feedback.className = 'quiz-feedback mt-3 p-2.5 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
        feedback.innerHTML = '<span class="font-bold">Chưa đúng!</span> ' + qData.expl;
      }
      feedback.classList.remove('hidden');
    }

    // Thi Trạng Nguyên 60 phút
    let examTimeLeft = 60 * 60;
    let examTimerInterval = null;
    let userAnswers = {};

    function startExam() {
      document.getElementById('examIntro').classList.add('hidden');
      const qContainer = document.getElementById('examQuestions');
      qContainer.classList.remove('hidden');

      // Gom toàn bộ 18 câu hỏi của 9 chương
      let allQuestions = [];
      chaptersData.forEach(ch => {
        ch.quizzes.forEach((q, idx) => {
          allQuestions.push({
            chapterId: ch.id,
            chapterTitle: ch.chapterNum + ': ' + ch.title,
            qIdx: idx,
            ...q
          });
        });
      });

      let html = '';
      allQuestions.forEach((q, index) => {
        html += \`
          <div class="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/15 text-left space-y-3">
            <div class="flex items-center justify-between text-xs text-blue-200 font-semibold">
              <span>Câu \${index + 1} / 18</span>
              <span class="text-amber-300">\${q.chapterTitle}</span>
            </div>
            <p class="text-sm font-bold text-white">\${q.q}</p>
            <div class="space-y-2">
              \${q.options.map((opt, optIdx) => \`
                <label class="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer transition text-xs sm:text-sm">
                  <input type="radio" name="exam_q_\${index}" value="\${optIdx}" onchange="recordExamAnswer(\${index}, \${optIdx})" class="text-amber-500 focus:ring-amber-400">
                  <span>\${opt.replace('(Recommended) ', '')}</span>
                </label>
              \`).join('')}
            </div>
          </div>
        \`;
      });

      html += \`
        <div class="text-center pt-4">
          <button onclick="submitExam()" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-black text-sm shadow-lg transition transform hover:scale-105">
            <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp bài thi Trạng Nguyên
          </button>
        </div>
      \`;

      qContainer.innerHTML = html;

      // Start timer
      clearInterval(examTimerInterval);
      examTimeLeft = 60 * 60;
      examTimerInterval = setInterval(() => {
        examTimeLeft--;
        const mins = Math.floor(examTimeLeft / 60);
        const secs = examTimeLeft % 60;
        document.getElementById('examTimer').innerText = 
          (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;

        if (examTimeLeft <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        }
      }, 1000);
    }

    function recordExamAnswer(qIndex, optIndex) {
      userAnswers[qIndex] = optIndex;
    }

    function submitExam() {
      clearInterval(examTimerInterval);
      let allQuestions = [];
      chaptersData.forEach(ch => {
        ch.quizzes.forEach(q => allQuestions.push(q));
      });

      let score = 0;
      allQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.ans) {
          score++;
        }
      });

      document.getElementById('examQuestions').classList.add('hidden');
      const resContainer = document.getElementById('examResult');
      resContainer.classList.remove('hidden');

      document.getElementById('resultScore').innerText = score + ' / ' + allQuestions.length;
      let title = '';
      let feedback = '';

      if (score === 18) {
        title = 'Xuất Sắc! Danh Hiệu Trạng Nguyên Toán 6 🏆';
        feedback = 'Tuyệt đối 100%! Em đã nắm vững trọn vẹn toàn bộ 9 chương của cả 2 tập sách Toán 6!';
      } else if (score >= 14) {
        title = 'Bảng Nhãn Toán Học 🌟';
        feedback = 'Kết quả rất ấn tượng! Em có tư duy toán học rất tốt và nắm chắc hầu hết kiến thức cốt lõi.';
      } else if (score >= 10) {
        title = 'Thám Hoa Toán Học 👍';
        feedback = 'Đạt yêu cầu chuẩn! Em hãy xem lại một số chương mình chưa tự tin để đạt điểm cao hơn nhé.';
      } else {
        title = 'Cần Ôn Tập Thêm 💡';
        feedback = 'Em hãy ôn lại các định nghĩa và công thức trong các chương phía trên và thi lại nhé!';
      }

      document.getElementById('resultTitle').innerText = title;
      document.getElementById('resultFeedback').innerText = feedback;
    }

    function resetExam() {
      userAnswers = {};
      document.getElementById('examResult').classList.add('hidden');
      document.getElementById('examIntro').classList.remove('hidden');
      document.getElementById('examTimer').innerText = '60:00';
    }
  </script>
</body>
</html>`;

  const outputPath1 = path.join(__dirname, 'courses', 'toan_6.html');
  const outputPath2 = path.join(__dirname, 'courses', 'math_6.html');

  fs.writeFileSync(outputPath1, fullHTML, 'utf8');
  fs.writeFileSync(outputPath2, fullHTML, 'utf8');

  console.log(`Successfully generated ${outputPath1} and ${outputPath2}! File size: ${fullHTML.length} bytes`);
}

buildToan6HTML();
