// build_chebienthucpham9_page.js - Tạo giao diện học tập Công nghệ 9 Chế biến thực phẩm

const fs = require('fs');
const path = require('path');

const { chebienChapters } = require('./chebienthucpham9_data.js');
const chebienTerms = require('./chebienthucpham9_terms.js');
const chebienDiagrams = require('./chebienthucpham9_diagrams.js');
const { mealCalculatorWidget } = require('./chebienthucpham9_calculator.js');
const { chebienExamQuestions } = require('./chebienthucpham9_exam.js');

function escapeHtml(str) {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateHtml(titleLang = 'vi') {
  const isEn = titleLang === 'en';
  const pageTitle = isEn
    ? "Grade 9 Technology: Food Processing Module | KNTT System"
    : "Công Nghệ 9 — Mô đun: Chế Biến Thực Phẩm | Hệ Thống Kết Nối Tri Thức";

  const bannerTitle = isEn
    ? "TECHNOLOGY 9 — FOOD PROCESSING"
    : "CÔNG NGHỆ 9 — TRẢI NGHIỆM NGHỀ NGHIỆP";
  
  const bannerSub = isEn
    ? "Module: Food Processing • Nutrition, Food Preservation, Kitchen Safety & Cooking Arts"
    : "Mô đun: Chế Biến Thực Phẩm • 2 Chương — 7 Bài học toàn diện chuẩn SGK Kết nối tri thức";

  // Build Table of Contents list for sidebar
  let tocHtml = '';
  chebienChapters.forEach(chap => {
    tocHtml += `
      <div class="mb-4">
        <div class="text-[11px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 px-3 py-1 bg-amber-50 dark:bg-amber-950/50 rounded-lg mb-1.5 flex items-center justify-between">
          <span>${chap.title}</span>
          <span class="text-[9px] px-1.5 py-0.2 rounded bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200">${chap.badge}</span>
        </div>
        <ul class="space-y-0.5 text-xs">
    `;
    chap.lessons.forEach(l => {
      tocHtml += `
        <li>
          <a href="#${l.id}" class="toc-link block px-3 py-1.5 rounded-lg text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-slate-800 transition flex items-center justify-between group">
            <span class="truncate font-medium">${l.number}: ${l.title}</span>
            <span class="text-[10px] text-gray-400 dark:text-gray-500 font-normal shrink-0 ml-1">${l.duration}</span>
          </a>
        </li>
      `;
    });
    tocHtml += `</ul></div>`;
  });

  // Build main content for all 7 lessons
  let mainContentHtml = '';
  chebienChapters.forEach(chap => {
    mainContentHtml += `
      <div class="mb-10" id="${chap.id}">
        <div class="flex items-center gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md mb-6">
          <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl font-bold shrink-0">
            <i class="fa-solid fa-utensils"></i>
          </div>
          <div>
            <span class="text-xs font-semibold tracking-wider uppercase text-amber-200 block">${chap.badge}</span>
            <h2 class="text-lg sm:text-xl font-black">${chap.title}</h2>
            <p class="text-xs sm:text-sm text-amber-100 mt-0.5 leading-relaxed">${chap.desc}</p>
          </div>
        </div>

        <div class="space-y-8">
    `;

    chap.lessons.forEach(l => {
      mainContentHtml += `
        <article id="${l.id}" class="lesson-card p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-amber-100 dark:border-slate-700 shadow-sm transition hover:shadow-md">
          <!-- Lesson Header -->
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-slate-700">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                ${l.number}
              </span>
              <h3 class="text-base sm:text-lg font-black text-gray-900 dark:text-white mt-1">
                ${l.title}
              </h3>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                ${l.sub}
              </p>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 flex items-center gap-1">
                <i class="fa-regular fa-clock"></i> ${l.duration}
              </span>
            </div>
          </div>

          <!-- Mục tiêu cần đạt -->
          <div class="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border border-amber-100 dark:border-amber-900/40">
            <h4 class="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-bullseye text-amber-600"></i> Mục tiêu trọng tâm bài học
            </h4>
            <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">${l.objectives}</p>
          </div>

          <!-- Dẫn nhập cảm xúc -->
          <div class="mb-4 text-xs sm:text-sm italic text-gray-600 dark:text-gray-400 pl-3 border-l-2 border-amber-500">
            "${l.quote}"
          </div>
      `;

      // Embed SVG diagram if available
      if (l.diagramKey && chebienDiagrams[l.diagramKey]) {
        mainContentHtml += chebienDiagrams[l.diagramKey];
      }

      // If Lesson 5, embed interactive Meal Cost Calculator Widget!
      if (l.id === 'bai-5') {
        mainContentHtml += mealCalculatorWidget;
      }

      // Embed theoretical sections
      mainContentHtml += `<div class="space-y-4 mb-6">`;
      l.sections.forEach(sec => {
        mainContentHtml += `
          <div class="p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-700/80">
            <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs shrink-0">
                <i class="fa-solid fa-book-open"></i>
              </span>
              ${sec.title}
            </h4>
            <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              ${sec.content}
            </div>
          </div>
        `;
      });
      mainContentHtml += `</div>`;

      // Practice list
      mainContentHtml += `
        <div class="mb-6 p-4 rounded-2xl bg-orange-50/60 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/60">
          <h4 class="text-xs font-bold text-orange-800 dark:text-orange-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-kitchen-set text-orange-600"></i> Yêu cầu Luyện tập &amp; Thực hành sáng tạo
          </h4>
          <ul class="space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
      `;
      l.practiceList.forEach(pr => {
        mainContentHtml += `
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-circle-check text-amber-500 mt-1 shrink-0 text-xs"></i>
            <span>${pr}</span>
          </li>
        `;
      });
      mainContentHtml += `</ul></div>`;

      // 4 Quizzes per lesson
      mainContentHtml += `
        <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/40 dark:bg-slate-900/60 border border-amber-200/70 dark:border-slate-700">
          <h4 class="text-xs font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wider mb-3 flex items-center justify-between">
            <span class="flex items-center gap-1.5">
              <i class="fa-solid fa-clipboard-question text-amber-600"></i> Câu hỏi củng cố nhanh (${l.quizzes.length} câu)
            </span>
            <span class="text-[10px] text-gray-500 font-normal">Tự chấm điểm ngay</span>
          </h4>
          <div class="space-y-4">
      `;

      l.quizzes.forEach((quiz, qIdx) => {
        const quizId = `${l.id}-q${qIdx}`;
        mainContentHtml += `
          <div class="quiz-item p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-gray-200/80 dark:border-slate-700 text-xs" data-correct="${quiz.correct}">
            <p class="font-bold text-gray-900 dark:text-white mb-2 flex items-start gap-1.5">
              <span class="text-amber-600 font-black">C${qIdx + 1}.</span>
              <span>${quiz.question}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
        `;

        quiz.options.forEach((opt, oIdx) => {
          mainContentHtml += `
            <label class="quiz-option-label flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-amber-50/50 dark:hover:bg-slate-700/50 cursor-pointer transition">
              <input type="radio" name="${quizId}" value="${oIdx}" onchange="checkQuizAnswer(this, '${quizId}')" class="text-amber-600 focus:ring-amber-500">
              <span class="text-gray-700 dark:text-gray-300 font-medium">${opt}</span>
            </label>
          `;
        });

        mainContentHtml += `
            </div>
            <div id="${quizId}-fb" class="hidden p-2.5 rounded-lg text-xs mt-2">
              <span class="quiz-fb-text block font-semibold mb-0.5"></span>
              <p class="text-gray-600 dark:text-gray-400"><i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i> <strong>Giải thích:</strong> ${quiz.explain}</p>
            </div>
          </div>
        `;
      });

      mainContentHtml += `</div></div></article>`;
    });

    mainContentHtml += `</div></div>`;
  });

  // Build Terms List for Modal
  let termsListHtml = '';
  chebienTerms.forEach(t => {
    termsListHtml += `
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
        <div class="flex items-center justify-between gap-2">
          <strong class="text-gray-900 dark:text-white font-bold flex items-center gap-1.5">
            <i class="fa-solid ${t.icon} text-${t.color}-500"></i> ${t.term}
          </strong>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-${t.color}-100 dark:bg-${t.color}-950/60 text-${t.color}-800 dark:text-${t.color}-300 font-semibold shrink-0">
            ${t.badge}
          </span>
        </div>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">${t.desc}</p>
      </div>
    `;
  });

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- KaTeX for math formulas -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body);"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#fffbeb',
              100: '#fef3c7',
              200: '#fde68a',
              500: '#f59e0b',
              600: '#d97706',
              700: '#b45309',
              800: '#92400e',
              900: '#78350f'
            }
          }
        }
      }
    }
  </script>
  <style>
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #475569; }
  </style>
</head>
<body class="bg-amber-50/20 dark:bg-slate-950 text-gray-800 dark:text-gray-200 font-sans antialiased selection:bg-amber-500 selection:text-white transition-colors duration-200">

  <!-- Header Sticky Navigation -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-amber-200/80 dark:border-slate-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Left Branding -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl bg-amber-100 hover:bg-amber-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-amber-800 dark:text-amber-300 transition" title="Về trang chủ">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 text-white flex items-center justify-center text-lg font-bold shadow-sm shrink-0">
          <i class="fa-solid fa-kitchen-set"></i>
        </div>
        <div>
          <span class="text-[10px] uppercase font-black tracking-widest text-amber-700 dark:text-amber-400 block">Lớp 9 • Trải Nghiệm Nghề Nghiệp</span>
          <h1 class="text-sm sm:text-base font-black text-gray-900 dark:text-white truncate">Chế Biến Thực Phẩm (KNTT)</h1>
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Handbook Modal Trigger -->
        <button type="button" onclick="openModal('terms-modal')" class="px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-amber-200 dark:border-slate-700 text-xs font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1.5 transition">
          <i class="fa-solid fa-book-bookmark text-amber-600"></i>
          <span class="hidden sm:inline">Sổ tay</span> 12 Thuật ngữ
        </button>

        <!-- Exam Modal Trigger -->
        <button type="button" onclick="openExamModal()" class="px-2.5 sm:px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition">
          <i class="fa-solid fa-trophy"></i>
          <span>Trạng Nguyên (25C)</span>
        </button>

        <!-- Dark mode toggle -->
        <button type="button" onclick="toggleDarkMode()" class="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-300 transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>

        <!-- Mobile TOC toggle -->
        <button type="button" onclick="toggleMobileSidebar()" class="lg:hidden p-2 rounded-xl bg-amber-100 dark:bg-slate-800 text-amber-800 dark:text-amber-300">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Header Banner -->
  <section class="bg-gradient-to-b from-amber-100/50 via-orange-50/20 to-transparent dark:from-slate-900/80 dark:to-transparent border-b border-amber-200/50 dark:border-slate-800 py-6 sm:py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/60 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs font-bold mb-2">
            <i class="fa-solid fa-carrot"></i> SGK Kết nối tri thức với cuộc sống • GDPT 2018
          </div>
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            ${bannerTitle}
          </h2>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl leading-relaxed">
            ${bannerSub}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <span class="block text-lg font-black text-amber-600 dark:text-amber-400">2</span>
            <span class="text-[10px] text-gray-500 uppercase font-bold">Chương lớn</span>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <span class="block text-lg font-black text-orange-600 dark:text-orange-400">7</span>
            <span class="text-[10px] text-gray-500 uppercase font-bold">Bài học</span>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <span class="block text-lg font-black text-emerald-600 dark:text-emerald-400">28</span>
            <span class="text-[10px] text-gray-500 uppercase font-bold">Câu củng cố</span>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <span class="block text-lg font-black text-red-600 dark:text-red-400">70 °C</span>
            <span class="text-[10px] text-gray-500 uppercase font-bold">Nhiệt độ tâm</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Layout Container: Left Sidebar TOC + Right Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex flex-col lg:flex-row gap-8">
      
      <!-- Left Sticky Sidebar: Navigation TOC -->
      <aside id="sidebar-toc" class="hidden lg:block w-72 shrink-0">
        <div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar p-4 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-amber-100 dark:border-slate-800 shadow-sm">
          <div class="text-xs font-black uppercase tracking-wider text-gray-400 mb-3 flex items-center justify-between">
            <span><i class="fa-solid fa-list-ul text-amber-600 mr-1.5"></i> Mục lục bài học</span>
            <span class="text-[10px] font-normal text-amber-600">7 Bài</span>
          </div>
          ${tocHtml}

          <!-- Career Quick Card -->
          <div class="mt-4 p-3 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs">
            <strong class="text-amber-800 dark:text-amber-300 font-bold block mb-1">
              <i class="fa-solid fa-briefcase"></i> 4 Nghề trọng điểm
            </strong>
            <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              • Thợ chế biến thực phẩm<br/>
              • Thợ vận hành máy sản xuất<br/>
              • Bếp trưởng (Chef)<br/>
              • Nhân viên chuẩn bị fast food
            </p>
          </div>
        </div>
      </aside>

      <!-- Right Main Content -->
      <main class="flex-1 min-w-0">
        ${mainContentHtml}
      </main>
    </div>
  </div>

  <!-- Mobile Drawer TOC -->
  <div id="mobile-sidebar" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden" onclick="toggleMobileSidebar()">
    <div class="fixed top-0 bottom-0 left-0 w-80 max-w-[85%] bg-white dark:bg-slate-900 p-5 overflow-y-auto custom-scrollbar shadow-2xl" onclick="event.stopPropagation()">
      <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-slate-800 mb-4">
        <span class="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-kitchen-set text-amber-600"></i> Mục lục Chế biến thực phẩm
        </span>
        <button type="button" onclick="toggleMobileSidebar()" class="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      ${tocHtml}
    </div>
  </div>

  <!-- Modal 1: Sổ tay 12 Thuật ngữ & Quy tắc vàng -->
  <div id="terms-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4" onclick="closeModal('terms-modal')">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-amber-200 dark:border-slate-800 overflow-hidden" onclick="event.stopPropagation()">
      <div class="p-4 sm:p-5 border-b border-amber-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 flex items-center justify-center text-base font-bold">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white">Sổ Tay 12 Thuật Ngữ &amp; Quy Tắc Vàng</h3>
            <p class="text-xs text-gray-500">Mô đun Chế biến thực phẩm — Công nghệ 9</p>
          </div>
        </div>
        <button type="button" onclick="closeModal('terms-modal')" class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-4 sm:p-5 overflow-y-auto custom-scrollbar space-y-3">
        ${termsListHtml}
      </div>
      <div class="p-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50 flex justify-end">
        <button type="button" onclick="closeModal('terms-modal')" class="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition">
          Đóng Sổ Tay
        </button>
      </div>
    </div>
  </div>

  <!-- Modal 2: Trạng Nguyên Ẩm Thực (25 Câu hỏi) -->
  <div id="exam-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4" onclick="closeModal('exam-modal')">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-amber-200 dark:border-slate-800 overflow-hidden" onclick="event.stopPropagation()">
      <div class="p-4 sm:p-5 border-b border-amber-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-xl font-bold">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-bold">Hội Thi Trạng Nguyên Ẩm Thực &amp; Chế Biến Thực Phẩm 9</h3>
            <p class="text-xs text-amber-100">Đề thi trắc nghiệm toàn diện 25 câu hỏi chuẩn SGK Kết nối tri thức</p>
          </div>
        </div>
        <button type="button" onclick="closeModal('exam-modal')" class="p-2 text-white/80 hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <!-- Exam Body -->
      <div class="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1" id="exam-container">
        <!-- Questions will be dynamically rendered here -->
      </div>

      <!-- Exam Footer -->
      <div class="p-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50 flex flex-wrap items-center justify-between gap-3">
        <div class="text-xs font-semibold text-gray-600 dark:text-gray-300" id="exam-status">
          Đã trả lời: <span id="answered-count" class="text-amber-600 font-bold">0</span>/25 câu
        </div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="resetExam()" class="px-3.5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-200 text-xs font-semibold transition">
            Làm lại từ đầu
          </button>
          <button type="button" onclick="submitExam()" id="submit-exam-btn" class="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xs font-bold transition shadow-sm">
            Nộp Bài Chấm Điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <script>
    // Theme toggle
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // Modal controls
    function openModal(id) {
      document.getElementById(id).classList.remove('hidden');
    }
    function closeModal(id) {
      document.getElementById(id).classList.add('hidden');
    }
    function toggleMobileSidebar() {
      document.getElementById('mobile-sidebar').classList.toggle('hidden');
    }

    // Interactive Quiz Answer Checker
    function checkQuizAnswer(radioInput, quizId) {
      const parentItem = radioInput.closest('.quiz-item');
      const correctIdx = parseInt(parentItem.dataset.correct);
      const chosenIdx = parseInt(radioInput.value);
      const fbBox = document.getElementById(quizId + '-fb');
      const fbText = fbBox.querySelector('.quiz-fb-text');

      fbBox.classList.remove('hidden', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-200', 'text-emerald-800', 'dark:text-emerald-300', 'bg-rose-50', 'dark:bg-rose-950/40', 'border-rose-200', 'text-rose-800', 'dark:text-rose-300');

      if (chosenIdx === correctIdx) {
        fbBox.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border', 'border-emerald-200', 'dark:border-emerald-800', 'text-emerald-800', 'dark:text-emerald-300');
        fbText.innerHTML = '<i class=\"fa-solid fa-circle-check text-emerald-600 mr-1\"></i> Chính xác! Chúc mừng bạn.';
      } else {
        fbBox.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'border', 'border-rose-200', 'dark:border-rose-800', 'text-rose-800', 'dark:text-rose-300');
        fbText.innerHTML = '<i class=\"fa-solid fa-circle-xmark text-rose-600 mr-1\"></i> Chưa chính xác. Hãy xem lại lời giải thích bên dưới nhé!';
      }
    }

    // Interactive Meal Cost Calculator Logic (Lesson 5)
    function adjustDiners(delta) {
      const input = document.getElementById('calc-diners');
      let val = parseInt(input.value) || 4;
      val = Math.max(1, Math.min(30, val + delta));
      input.value = val;
      calculateMealCost();
    }

    function calculateMealCost() {
      const tbody = document.getElementById('calc-tbody');
      const rows = tbody.querySelectorAll('tr');
      let grandTotal = 0;

      rows.forEach(row => {
        const qty = parseFloat(row.querySelector('.row-qty').value) || 0;
        const unit = row.querySelector('.row-unit').value;
        const price = parseFloat(row.querySelector('.row-price').value) || 0;
        let rowCost = 0;

        if (unit === 'g') {
          rowCost = (qty / 1000) * price;
        } else {
          rowCost = qty * price;
        }

        grandTotal += rowCost;
        row.querySelector('.row-total').textContent = Math.round(rowCost).toLocaleString('vi-VN') + ' đ';
      });

      const diners = parseInt(document.getElementById('calc-diners').value) || 1;
      const perPerson = grandTotal / diners;

      document.getElementById('calc-grand-total').textContent = Math.round(grandTotal).toLocaleString('vi-VN') + ' VNĐ';
      document.getElementById('calc-per-person').textContent = Math.round(perPerson).toLocaleString('vi-VN') + ' VNĐ/người';
    }

    function removeCalcRow(btn) {
      const row = btn.closest('tr');
      const tbody = document.getElementById('calc-tbody');
      if (tbody.querySelectorAll('tr').length > 1) {
        row.remove();
        calculateMealCost();
      } else {
        alert('Cần giữ lại ít nhất một nguyên liệu!');
      }
    }

    function addCalcRow() {
      const tbody = document.getElementById('calc-tbody');
      const newTr = document.createElement('tr');
      newTr.innerHTML = \`
        <td class="p-2"><input type="text" value="Nguyên liệu mới" class="w-full bg-transparent border-b border-dashed border-gray-300 dark:border-slate-600 outline-none text-xs font-medium" /></td>
        <td class="p-2"><input type="number" value="200" min="1" step="10" oninput="calculateMealCost()" class="row-qty w-16 px-1.5 py-0.5 border rounded bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-center text-xs font-semibold" /></td>
        <td class="p-2">
          <select onchange="calculateMealCost()" class="row-unit bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded text-[11px] p-0.5">
            <option value="g" selected>gam (g)</option>
            <option value="kg">kg</option>
            <option value="item">quả/mớ</option>
          </select>
        </td>
        <td class="p-2"><input type="number" value="30000" step="1000" oninput="calculateMealCost()" class="row-price w-24 px-1.5 py-0.5 border rounded bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-right text-xs" /></td>
        <td class="p-2 text-right font-bold text-amber-700 dark:text-amber-300 row-total">6,000 đ</td>
        <td class="p-2 text-center"><button type="button" onclick="removeCalcRow(this)" class="text-rose-500 hover:text-rose-700 text-xs"><i class="fa-solid fa-trash-can"></i></button></td>
      \`;
      tbody.appendChild(newTr);
      calculateMealCost();
    }

    // 25 Questions Trạng Nguyên Exam Engine
    const examQuestions = ${JSON.stringify(chebienExamQuestions)};
    let userAnswers = {};

    function openExamModal() {
      renderExamQuestions();
      openModal('exam-modal');
    }

    function renderExamQuestions() {
      const container = document.getElementById('exam-container');
      let html = '<div class="space-y-5">';

      examQuestions.forEach((item, idx) => {
        const isAnswered = userAnswers[idx] !== undefined;
        html += \`
          <div class="exam-card p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs transition" id="exam-q-\${idx}">
            <div class="font-bold text-gray-900 dark:text-white mb-2 flex items-start gap-2">
              <span class="w-5 h-5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">\${idx + 1}</span>
              <p class="leading-relaxed">\${item.q}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
        \`;

        item.options.forEach((opt, optIdx) => {
          const checked = userAnswers[idx] === optIdx ? 'checked' : '';
          html += \`
            <label class="exam-opt flex items-center gap-2 p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-amber-50/50 dark:hover:bg-slate-700/50 cursor-pointer transition">
              <input type="radio" name="exam_q_\${idx}" value="\${optIdx}" \${checked} onchange="recordExamAnswer(\${idx}, \${optIdx})" class="text-amber-600 focus:ring-amber-500">
              <span class="text-gray-700 dark:text-gray-300">\${opt}</span>
            </label>
          \`;
        });

        html += \`
            </div>
            <div id="exam-fb-\${idx}" class="hidden p-3 rounded-xl mt-3 text-xs"></div>
          </div>
        \`;
      });

      html += '</div>';
      container.innerHTML = html;
      updateAnsweredCount();
    }

    function recordExamAnswer(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
      updateAnsweredCount();
    }

    function updateAnsweredCount() {
      const count = Object.keys(userAnswers).length;
      document.getElementById('answered-count').textContent = count;
    }

    function resetExam() {
      if (confirm('Em có chắc chắn muốn làm lại bài thi từ đầu không?')) {
        userAnswers = {};
        renderExamQuestions();
      }
    }

    function submitExam() {
      const answeredCount = Object.keys(userAnswers).length;
      if (answeredCount < examQuestions.length) {
        if (!confirm(\`Em mới hoàn thành \${answeredCount}/\${examQuestions.length} câu. Em có muốn nộp bài luôn không?\`)) {
          return;
        }
      }

      let score = 0;
      examQuestions.forEach((item, idx) => {
        const userOpt = userAnswers[idx];
        const isCorrect = userOpt === item.answer;
        if (isCorrect) score++;

        const fbBox = document.getElementById(\`exam-fb-\${idx}\`);
        fbBox.classList.remove('hidden', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-200', 'text-emerald-800', 'bg-rose-50', 'dark:bg-rose-950/40', 'border-rose-200', 'text-rose-800');

        if (isCorrect) {
          fbBox.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border', 'border-emerald-200', 'dark:border-emerald-800', 'text-emerald-800', 'dark:text-emerald-300');
          fbBox.innerHTML = \`<i class="fa-solid fa-circle-check text-emerald-600 mr-1"></i> <strong>Đúng!</strong> \${item.explain}\`;
        } else {
          fbBox.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'border', 'border-rose-200', 'dark:border-rose-800', 'text-rose-800', 'dark:text-rose-300');
          const correctText = item.options[item.answer];
          fbBox.innerHTML = \`<i class="fa-solid fa-circle-xmark text-rose-600 mr-1"></i> <strong>Sai!</strong> Đáp án đúng là: <strong>\${correctText}</strong>. <br/>\${item.explain}\`;
        }
      });

      // Display Final Certificate / Result Banner
      const pct = Math.round((score / examQuestions.length) * 100);
      let title = '';
      let badgeColor = '';
      if (score >= 23) {
        title = 'Trạng Nguyên Ẩm Thực Xuất Sắc 🏆';
        badgeColor = 'from-amber-500 to-yellow-400';
      } else if (score >= 18) {
        title = 'Bảng Nhãn Ẩm Thực Tài Ba 🥈';
        badgeColor = 'from-emerald-500 to-teal-400';
      } else if (score >= 13) {
        title = 'Thám Hoa Ẩm Thực Vững Vàng 🥉';
        badgeColor = 'from-blue-500 to-indigo-400';
      } else {
        title = 'Học Đi Đôi Với Hành — Cố Lên Nhé! 📖';
        badgeColor = 'from-slate-500 to-gray-400';
      }

      alert(\`KẾT QUẢ THI TRẠNG NGUYÊN:\\n- Điểm số: \${score}/\${examQuestions.length} câu (\${pct}%)\\n- Danh hiệu: \${title}\\n\\nHãy xem lại đáp án và giải thích chi tiết trong đề thi!\`);
    }

    // Initialize calculator on load
    document.addEventListener('DOMContentLoaded', () => {
      calculateMealCost();
    });
  </script>
</body>
</html>
  `;
}

// Generate files
const outDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses';
const files = [
  { p: path.join(outDir, 'congnghe_chebienthucpham_9.html'), lang: 'vi' },
  { p: path.join(outDir, 'technology_foodprocessing_9.html'), lang: 'vi' }
];

files.forEach(f => {
  const html = generateHtml(f.lang);
  fs.writeFileSync(f.p, html, 'utf8');
  console.log(`Generated: ${f.p} (${html.length} bytes)`);
});

console.log('Build completed successfully!');
