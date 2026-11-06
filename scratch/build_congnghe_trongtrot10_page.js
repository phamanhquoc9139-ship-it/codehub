// Script tạo trang hoàn chỉnh môn Công Nghệ 10: Công Nghệ Trồng Trọt
// Đầy đủ 8 Chương, 28 Bài học, Sơ đồ SVG, Mini-Quiz và Thi Trạng Nguyên 25 câu

const fs = require('fs');
const path = require('path');

const { chapters1_2 } = require('./data_chapter1_2.js');
const { chapters3_4 } = require('./data_chapter3_4.js');
const { chapters5_6 } = require('./data_chapter5_6.js');
const { chapters7_8 } = require('./data_chapter7_8.js');
const { diagrams } = require('./congnghe_trongtrot10_diagrams.js');
const { quickLookupTable, editorialNotes, trangNguyenExamQuestions } = require('./data_terms_exam.js');

const allChapters = [...chapters1_2, ...chapters3_4, ...chapters5_6, ...chapters7_8];

function renderSidebar() {
  let html = '<nav class="space-y-6 text-xs">';
  allChapters.forEach(chap => {
    html += `
      <div>
        <div class="text-[11px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 px-3 py-1.5 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/60 rounded-xl mb-2">
          <span>${chap.chapterNumber}: ${chap.chapterTitle}</span>
          <span class="text-[10px] text-emerald-600 font-bold">${chap.lessons.length} bài</span>
        </div>
        <div class="space-y-0.5">
          ${chap.lessons.map(lesson => `
            <a href="#${lesson.id}" class="nav-link flex items-center justify-between px-3 py-1.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/40 transition">
              <span class="truncate"><span class="font-bold text-slate-400 mr-1">${lesson.number}:</span> ${lesson.title}</span>
              <span class="text-[10px] font-semibold text-slate-400 shrink-0 ml-1.5">${lesson.badge}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  html += `
    <div>
      <div class="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 px-3 py-1.5 flex items-center justify-between bg-amber-50 dark:bg-amber-950/60 rounded-xl mb-2">
        <span>Tra cứu & An toàn</span>
        <span class="text-[10px] text-amber-600 font-bold">2 mục</span>
      </div>
      <div class="space-y-0.5">
        <a href="#bang-tra-cuu" class="nav-link flex items-center justify-between px-3 py-1.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-amber-600 transition truncate">
          Bảng tra cứu nhanh từ khoá
        </a>
        <a href="#ghi-chu-an-toan" class="nav-link flex items-center justify-between px-3 py-1.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-amber-600 transition truncate">
          Ghi chú quy chuẩn & An toàn
        </a>
      </div>
    </div>
  </nav>`;
  return html;
}

function renderLessonCard(lesson) {
  // Gắn sơ đồ minh họa phù hợp
  let diagramHTML = '';
  if (lesson.id === 'bai-3') {
    diagramHTML = diagrams.soil_components + diagrams.soil_colloid;
  } else if (lesson.id === 'bai-14') {
    diagramHTML = diagrams.grafting_techniques;
  } else if (lesson.id === 'bai-25') {
    diagramHTML = diagrams.soilless_systems;
  } else if (lesson.id === 'bai-27') {
    diagramHTML = diagrams.circular_agriculture;
  }

  // Render Mini-Quiz
  const quizHTML = lesson.quiz && lesson.quiz.length ? `
    <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
      <div class="flex items-center justify-between gap-2 mb-4">
        <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-circle-question text-emerald-500"></i>
          <span>Mini-Quiz củng cố bài học (${lesson.quiz.length} câu)</span>
        </h5>
        <span class="text-[11px] text-slate-400">Chọn đáp án đúng nhất</span>
      </div>
      <div class="space-y-4">
        ${lesson.quiz.map((q, qIdx) => `
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-xs">
            <p class="font-bold text-slate-800 dark:text-slate-200 mb-2.5">
              <span class="text-emerald-600 dark:text-emerald-400">Câu ${qIdx + 1}:</span> ${q.q}
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${q.options.map((opt, optIdx) => `
                <button onclick="checkLessonQuiz(this, ${optIdx === q.ans}, '${q.exp.replace(/'/g, "\\'")}')" class="quiz-btn text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-300 transition flex items-start gap-2">
                  <span class="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ${String.fromCharCode(65 + optIdx)}
                  </span>
                  <span class="font-medium">${opt}</span>
                </button>
              `).join('')}
            </div>
            <div class="quiz-feedback hidden"></div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  return `
    <article id="${lesson.id}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition mb-10">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div class="flex items-center gap-2.5">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-xs sm:text-sm shadow-sm shadow-emerald-500/20 tracking-wide">
            <i class="${lesson.icon || 'fa-solid fa-seedling'}"></i> ${lesson.number}
          </span>
          <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
            ${lesson.badge}
          </span>
        </div>
        <button onclick="toggleBookmark('${lesson.id}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
          <i class="fa-regular fa-bookmark"></i>
        </button>
      </div>

      <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
        ${lesson.number}: ${lesson.title}
      </h3>

      <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 flex items-start gap-3">
        <i class="fa-solid fa-lightbulb text-emerald-500 text-base mt-0.5 shrink-0"></i>
        <div>${lesson.overview}</div>
      </div>

      ${diagramHTML}

      <div class="space-y-6">
        ${lesson.sections.map(sec => `
          <div class="space-y-2">
            <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>${sec.title}</span>
            </h4>
            <div class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              ${sec.content}
            </div>
          </div>
        `).join('')}
      </div>

      ${quizHTML}
    </article>
  `;
}

function renderLookupTable() {
  return `
    <div id="bang-tra-cuu" class="scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-10">
      <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div class="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl shrink-0">
          <i class="fa-solid fa-table-list"></i>
        </div>
        <div>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Học phần tra cứu nhanh</span>
          <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Bảng tra cứu nhanh từ khoá cốt lõi</h3>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-xs border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
          <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
            <tr>
              <th class="p-3 text-left w-1/3 border-b border-slate-200 dark:border-slate-700">Chủ đề then chốt</th>
              <th class="p-3 text-left border-b border-slate-200 dark:border-slate-700">Từ khoá khoa học cần ghi nhớ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            ${quickLookupTable.map(row => `
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <td class="p-3 font-bold text-emerald-700 dark:text-emerald-400">${row.topic}</td>
                <td class="p-3 text-slate-700 dark:text-slate-300">${row.keywords}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderEditorialNotes() {
  return `
    <div id="ghi-chu-an-toan" class="scroll-mt-28 mb-10">
      ${editorialNotes}
    </div>
  `;
}

function generateFullHTML() {
  const sidebarHTML = renderSidebar();
  const lookupHTML = renderLookupTable();
  const notesHTML = renderEditorialNotes();

  // Render chapters
  const chaptersHTML = allChapters.map(chap => `
    <section id="${chap.chapterId}" class="scroll-mt-28 space-y-8 mb-12">
      <div class="p-5 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white shadow-lg flex items-center justify-between">
        <div class="flex items-center gap-3.5">
          <span class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur text-white flex items-center justify-center text-xl shrink-0">
            <i class="${chap.icon}"></i>
          </span>
          <div>
            <span class="text-xs font-bold text-emerald-100 uppercase tracking-wider">${chap.chapterNumber}</span>
            <h2 class="text-xl sm:text-2xl font-black">${chap.chapterTitle}</h2>
          </div>
        </div>
        <span class="hidden sm:inline-block text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur">
          ${chap.badge}
        </span>
      </div>
      <div>
        ${chap.lessons.map(l => renderLessonCard(l)).join('')}
      </div>
    </section>
  `).join('');

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Công Nghệ 10: Công Nghệ Trồng Trọt — Kết Nối Tri Thức | CodeHub</title>
  <meta name="description" content="Khóa học Công nghệ 10 Công nghệ Trồng trọt chuẩn SGK Kết nối tri thức. 8 chương, 28 bài học toàn diện, đầy đủ sơ đồ kĩ thuật SVG, mini-quiz và đề thi Trạng Nguyên 25 câu.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#059669',
            'primary-dark': '#047857',
            'slate-850': '#151f32'
          }
        }
      }
    };
  </script>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col antialiased transition-colors duration-200">

  <!-- Top Navigation Header -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Logo & Back Button -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Trở về Trang chủ">
          <i class="fa-solid fa-arrow-left text-base"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-black text-xl">
          <i class="fa-solid fa-graduation-cap"></i>
          <span>CodeHub</span>
        </a>
        <span class="hidden sm:inline-block text-slate-300 dark:text-slate-700">|</span>
        <span class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
          <i class="fa-solid fa-seedling"></i> Công Nghệ 10 — Trồng Trọt
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <button onclick="openExamModal()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs transition shadow-sm shadow-emerald-500/20">
          <i class="fa-solid fa-award"></i>
          <span class="hidden md:inline">Thi Trạng Nguyên</span> (25 câu)
        </button>

        <!-- Dark Mode Toggle -->
        <button id="themeToggleBtn" class="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline"></i>
        </button>

        <!-- Mobile Drawer Toggle -->
        <button onclick="toggleMobileDrawer()" class="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <i class="fa-solid fa-bars text-base"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Drawer -->
  <div id="mobileDrawer" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden lg:hidden">
    <div class="fixed top-0 bottom-0 left-0 w-80 bg-white dark:bg-slate-900 shadow-2xl p-6 overflow-y-auto custom-scrollbar">
      <div class="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-slate-800">
        <span class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-list-ul text-emerald-500"></i> Mục lục môn học
        </span>
        <button onclick="toggleMobileDrawer()" class="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      ${sidebarHTML}
    </div>
  </div>

  <!-- Main Hero Banner -->
  <div class="bg-gradient-to-b from-emerald-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-4">
          <i class="fa-solid fa-graduation-cap"></i> CHƯƠNG TRÌNH CHUẨN SGK GDPT 2018 — KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
        </div>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Công Nghệ 10: Công Nghệ Trồng Trọt
        </h1>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          Hệ thống hóa toàn bộ kiến thức <strong>8 chương, 28 bài học</strong> theo SGK chuẩn, tích hợp đầy đủ sơ đồ kĩ thuật SVG, quy trình thực hành thực tế, an toàn lao động, mini-quiz từng bài và đề thi Trạng Nguyên 25 câu hỏi.
        </p>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="p-3 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm text-center">
            <span class="block text-2xl font-black text-emerald-600 dark:text-emerald-400">8</span>
            <span class="text-xs text-slate-500 font-medium">Chương kiến thức</span>
          </div>
          <div class="p-3 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm text-center">
            <span class="block text-2xl font-black text-teal-600 dark:text-teal-400">28</span>
            <span class="text-xs text-slate-500 font-medium">Bài học đầy đủ</span>
          </div>
          <div class="p-3 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm text-center">
            <span class="block text-2xl font-black text-cyan-600 dark:text-cyan-400">5+</span>
            <span class="text-xs text-slate-500 font-medium">Sơ đồ kĩ thuật SVG</span>
          </div>
          <div class="p-3 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm text-center">
            <span class="block text-2xl font-black text-amber-600 dark:text-amber-400">25</span>
            <span class="text-xs text-slate-500 font-medium">Câu Trạng Nguyên</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Content Section with Sidebar -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- Desktop Sidebar Sticky -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar p-5 bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
            <i class="fa-solid fa-bars-staggered text-emerald-500"></i> Mục lục bài học
          </div>
          ${sidebarHTML}
        </div>
      </aside>

      <!-- Main Content Articles -->
      <main class="lg:col-span-3 space-y-6">

        <!-- Sticky Quick Section Jump Navigation -->
        <div class="sticky top-20 z-20 flex flex-wrap items-center gap-1.5 p-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm mb-6">
          <a href="#chuong-1" class="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-900/50 hover:bg-emerald-100 transition">
            Chương I
          </a>
          <a href="#chuong-2" class="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/50 hover:bg-amber-100 transition">
            Chương II
          </a>
          <a href="#chuong-3" class="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200/80 dark:border-rose-900/50 hover:bg-rose-100 transition">
            Chương III
          </a>
          <a href="#chuong-4" class="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-900/50 hover:bg-purple-100 transition">
            Chương IV
          </a>
          <a href="#chuong-5" class="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200/80 dark:border-red-900/50 hover:bg-red-100 transition">
            Chương V
          </a>
          <a href="#chuong-6" class="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/50 hover:bg-blue-100 transition">
            Chương VI
          </a>
          <a href="#chuong-7" class="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-900/50 hover:bg-indigo-100 transition">
            Chương VII
          </a>
          <a href="#chuong-8" class="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-green-50 dark:bg-green-950/60 text-green-700 dark:text-green-300 border border-green-200/80 dark:border-green-900/50 hover:bg-green-100 transition">
            Chương VIII
          </a>
          <a href="#bang-tra-cuu" class="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-yellow-50 dark:bg-yellow-950/60 text-yellow-700 dark:text-yellow-300 border border-yellow-200/80 dark:border-yellow-900/50 hover:bg-yellow-100 transition">
            <i class="fa-solid fa-book"></i> Tra cứu
          </a>
        </div>

        ${chaptersHTML}
        ${lookupHTML}
        ${notesHTML}

      </main>
    </div>
  </div>

  <!-- Trạng Nguyên Exam Modal (25 câu hỏi) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800">
      
      <!-- Modal Header -->
      <div class="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-center text-lg">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="text-lg font-black text-slate-900 dark:text-white">Thi Trạng Nguyên: Công Nghệ Trồng Trọt 10</h3>
            <p class="text-xs text-slate-500">25 câu hỏi trắc nghiệm khách quan toàn diện chuẩn SGK Kết nối tri thức</p>
          </div>
        </div>
        <button onclick="closeExamModal()" class="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <!-- Modal Body (Questions) -->
      <div id="examContainer" class="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
        <!-- Rendered by JS -->
      </div>

      <!-- Exam Result Box (Hidden by default) -->
      <div id="examResultBox" class="p-6 overflow-y-auto custom-scrollbar flex-1 hidden text-center space-y-4">
        <div class="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl mx-auto">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 id="examScoreTitle" class="text-2xl font-black text-slate-900 dark:text-white"></h4>
        <p id="examScoreDesc" class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto"></p>
        <button onclick="resetExam()" class="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs hover:opacity-90 transition">
          Làm lại bài thi
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4">
      <p class="font-bold text-slate-700 dark:text-slate-300 mb-1">CodeHub — Nền Tảng Học Trực Tuyến GDPT 2018</p>
      <p>Hệ thống học liệu chuẩn SGK Công nghệ 10: Công nghệ trồng trọt — Bộ sách Kết nối tri thức với cuộc sống.</p>
    </div>
  </footer>

  <!-- Client-side Scripts -->
  <script>
    // Theme toggle
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    function applyTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    applyTheme();

    themeToggleBtn?.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    });

    // Mobile Drawer
    function toggleMobileDrawer() {
      const drawer = document.getElementById('mobileDrawer');
      drawer.classList.toggle('hidden');
    }

    // Auto scroll to hash and active sidebar highlighting
    function handleHashScroll() {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
    window.addEventListener('load', handleHashScroll);
    window.addEventListener('hashchange', handleHashScroll);

    // Sidebar active link highlighting
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        document.querySelectorAll('.nav-link').forEach(l => {
          l.classList.remove('bg-emerald-50', 'dark:bg-emerald-950/60', 'text-emerald-700', 'dark:text-emerald-400', 'font-bold');
        });
        this.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'text-emerald-700', 'dark:text-emerald-400', 'font-bold');
      });
    });

    // Bookmark Toggle
    function toggleBookmark(lessonId) {
      const card = document.getElementById(lessonId);
      const icon = card.querySelector('.bookmark-btn i');
      if (icon.classList.contains('fa-regular')) {
        icon.className = 'fa-solid fa-bookmark text-amber-500';
      } else {
        icon.className = 'fa-regular fa-bookmark';
      }
    }

    // Mini-Quiz Checker
    function checkLessonQuiz(btn, isCorrect, explanation) {
      const questionCard = btn.closest('.p-4');
      const allBtns = questionCard.querySelectorAll('.quiz-btn');
      const feedback = questionCard.querySelector('.quiz-feedback');

      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:border-emerald-400', 'hover:bg-emerald-50/50');
      });

      if (isCorrect) {
        btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-300');
        feedback.className = 'quiz-feedback p-3 rounded-xl text-xs mt-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-start gap-2';
        feedback.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-600 mt-0.5"></i> <div><strong>Chính xác!</strong> ' + explanation + '</div>';
      } else {
        btn.classList.add('bg-rose-100', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-800', 'dark:text-rose-300');
        feedback.className = 'quiz-feedback p-3 rounded-xl text-xs mt-2.5 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 flex items-start gap-2';
        feedback.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-600 mt-0.5"></i> <div><strong>Chưa chính xác!</strong> ' + explanation + '</div>';
      }
      feedback.classList.remove('hidden');
    }

    // Trạng Nguyên Exam Logic
    const examQuestions = ${JSON.stringify(trangNguyenExamQuestions)};
    let userAnswers = {};

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      renderExamQuestions();
    }

    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
    }

    function renderExamQuestions() {
      const container = document.getElementById('examContainer');
      document.getElementById('examResultBox').classList.add('hidden');
      userAnswers = {};

      let html = '<div class="space-y-6">';
      examQuestions.forEach((q, idx) => {
        html += \`
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs">
            <p class="font-bold text-slate-900 dark:text-white mb-3 text-sm">
              <span class="text-emerald-600 dark:text-emerald-400">Câu \${idx + 1}:</span> \${q.q}
            </p>
            <div class="space-y-2">
              \${q.options.map((opt, optIdx) => \`
                <label class="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700/50 cursor-pointer transition">
                  <input type="radio" name="exam_q_\${idx}" value="\${optIdx}" onchange="recordExamAnswer(\${idx}, \${optIdx})" class="text-emerald-600 focus:ring-emerald-500">
                  <span class="font-medium text-slate-700 dark:text-slate-300">\${opt}</span>
                </label>
              \`).join('')}
            </div>
          </div>
        \`;
      });
      html += \`
        <div class="text-center pt-4">
          <button onclick="submitExam()" class="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm shadow-lg shadow-emerald-500/25 transition">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </div>\`;
      container.innerHTML = html;
    }

    function recordExamAnswer(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
    }

    function submitExam() {
      let score = 0;
      examQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.ans) {
          score++;
        }
      });

      const container = document.getElementById('examContainer');
      const resultBox = document.getElementById('examResultBox');
      const scoreTitle = document.getElementById('examScoreTitle');
      const scoreDesc = document.getElementById('examScoreDesc');

      container.classList.add('hidden');
      resultBox.classList.remove('hidden');

      const percent = Math.round((score / examQuestions.length) * 100);
      let rank = 'Cần ôn tập thêm';
      if (percent >= 90) rank = 'Trạng Nguyên Trồng Trọt 10 — Xuất Sắc!';
      else if (percent >= 75) rank = 'Bảng Nhãn Trồng Trọt 10 — Rất Tốt!';
      else if (percent >= 50) rank = 'Đạt Yêu Cầu Chuẩn Năng Lực SGK';

      scoreTitle.innerHTML = \`<span class="text-emerald-600">\${score} / \${examQuestions.length}</span> (\${percent}%)\`;
      scoreDesc.innerHTML = \`<strong class="text-base text-slate-900 dark:text-white block mb-1">\${rank}</strong>Bạn đã hoàn thành bài kiểm tra chuẩn 25 câu hỏi môn Công nghệ 10: Công nghệ trồng trọt SGK Kết nối tri thức.\`;
    }

    function resetExam() {
      document.getElementById('examContainer').classList.remove('hidden');
      renderExamQuestions();
    }
  </script>
</body>
</html>`;
}

// Generate and write file
const fullHTML = generateFullHTML();
const targetPath = path.join(__dirname, '../courses/congnghe_trongtrot_10.html');
fs.writeFileSync(targetPath, fullHTML, 'utf8');
console.log('Successfully generated courses/congnghe_trongtrot_10.html! File size:', fullHTML.length);
