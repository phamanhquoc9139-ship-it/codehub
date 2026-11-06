// Bộ sinh trang hoàn chỉnh môn Công Nghệ 10: Thiết Kế và Công Nghệ
// 3 Chương, 22 Bài học đầy đủ, 6 Sơ đồ SVG thuần túy, Mini-Quiz và Thi Trạng Nguyên 25 câu

const fs = require('fs');
const path = require('path');

const { chapter1 } = require('./thietke10_data_chap1.js');
const { chapter2 } = require('./thietke10_data_chap2.js');
const { chapter3 } = require('./thietke10_data_chap3.js');
const { diagrams } = require('./thietke10_diagrams.js');
const { quickLookupTable, editorialNotes, trangNguyenExamQuestions } = require('./thietke10_terms_exam.js');

const allChapters = [chapter1, chapter2, chapter3];

function renderSidebar() {
  let html = '<nav class="space-y-6 text-xs">';
  allChapters.forEach(chap => {
    html += `
      <div>
        <div class="text-[11px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400 px-3 py-1.5 flex items-center justify-between bg-indigo-50 dark:bg-indigo-950/60 rounded-xl mb-2">
          <span>${chap.chapterNumber}: ${chap.chapterTitle}</span>
          <span class="text-[10px] text-indigo-600 font-bold">${chap.lessons.length} bài</span>
        </div>
        <div class="space-y-1">
          ${chap.lessons.map(lesson => `
            <a href="#${lesson.id}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800/60 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/50 transition">
              <div class="flex items-center justify-between gap-1.5 mb-0.5">
                <span class="font-bold text-xs text-indigo-600 dark:text-indigo-400">${lesson.number}</span>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0 group-hover:text-indigo-500 transition">${chap.chapterNumber}</span>
              </div>
              <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition leading-snug">
                ${lesson.title}
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  html += `
    <div>
      <div class="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 px-3 py-1.5 flex items-center justify-between bg-amber-50 dark:bg-amber-950/60 rounded-xl mb-2">
        <span>Tra cứu & Quy chuẩn</span>
        <span class="text-[10px] text-amber-600 font-bold">2 mục</span>
      </div>
      <div class="space-y-1">
        <a href="#bang-tra-cuu" class="nav-link block px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-amber-600 hover:bg-amber-50/70 dark:hover:bg-amber-950/50 transition border border-transparent hover:border-amber-200 dark:hover:border-amber-800/60">
          <div class="font-bold text-xs text-amber-600 dark:text-amber-400 mb-0.5">Tra cứu nhanh</div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 leading-snug">Sơ đồ tra cứu nhanh cốt lõi</div>
        </a>
        <a href="#ghi-chu-an-toan" class="nav-link block px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-amber-600 hover:bg-amber-50/70 dark:hover:bg-amber-950/50 transition border border-transparent hover:border-amber-200 dark:hover:border-amber-800/60">
          <div class="font-bold text-xs text-amber-600 dark:text-amber-400 mb-0.5">Quy chuẩn</div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 leading-snug">Ghi chú quy chuẩn & An toàn</div>
        </a>
      </div>
    </div>
  </nav>`;
  return html;
}

function renderLessonCard(lesson) {
  // Gắn sơ đồ đồ họa minh họa trực quan chuyên sâu cho từng bài học
  let diagramHTML = '';
  if (lesson.id === 'bai-1') {
    diagramHTML = diagrams.sci_tech_eng;
  } else if (lesson.id === 'bai-2') {
    diagramHTML = diagrams.tech_system;
  } else if (lesson.id === 'bai-3') {
    diagramHTML = diagrams.manufacturing_tech;
  } else if (lesson.id === 'bai-4') {
    diagramHTML = diagrams.cad_cam_cnc;
  } else if (lesson.id === 'bai-5') {
    diagramHTML = diagrams.tech_evaluation;
  } else if (lesson.id === 'bai-6') {
    diagramHTML = diagrams.industrial_revolutions;
  } else if (lesson.id === 'bai-7') {
    diagramHTML = diagrams.engineering_careers;
  } else if (lesson.id === 'bai-8') {
    diagramHTML = diagrams.paper_sizes_layout;
  } else if (lesson.id === 'bai-9') {
    diagramHTML = diagrams.orthogonal_projection;
  } else if (lesson.id === 'bai-10') {
    diagramHTML = diagrams.section_views;
  } else if (lesson.id === 'bai-11') {
    diagramHTML = diagrams.axonometric_projection;
  } else if (lesson.id === 'bai-12') {
    diagramHTML = diagrams.perspective_projection;
  } else if (lesson.id === 'bai-13') {
    diagramHTML = diagrams.thread_convention;
  } else if (lesson.id === 'bai-14') {
    diagramHTML = diagrams.drawing_types;
  } else if (lesson.id === 'bai-15') {
    diagramHTML = diagrams.building_drawings;
  } else if (lesson.id === 'bai-16') {
    diagramHTML = diagrams.cad_workflow;
  } else if (lesson.id === 'bai-17') {
    diagramHTML = diagrams.engineering_design_overview;
  } else if (lesson.id === 'bai-18') {
    diagramHTML = diagrams.design_process;
  } else if (lesson.id === 'bai-19') {
    diagramHTML = diagrams.design_influences;
  } else if (lesson.id === 'bai-20') {
    diagramHTML = diagrams.design_principles;
  } else if (lesson.id === 'bai-21') {
    diagramHTML = diagrams.design_tools_matrix;
  } else if (lesson.id === 'bai-22') {
    diagramHTML = diagrams.water_filter_stem;
  }

  // Render Mini-Quiz
  const quizHTML = lesson.quiz && lesson.quiz.length ? `
    <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
      <div class="flex items-center justify-between gap-2 mb-4">
        <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-circle-question text-indigo-500"></i>
          <span>Mini-Quiz củng cố bài học (${lesson.quiz.length} câu)</span>
        </h5>
        <span class="text-[11px] text-slate-400">Chọn đáp án đúng nhất</span>
      </div>
      <div class="space-y-4">
        ${lesson.quiz.map((q, qIdx) => `
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-xs">
            <p class="font-bold text-slate-800 dark:text-slate-200 mb-2.5">
              <span class="text-indigo-600 dark:text-indigo-400">Câu ${qIdx + 1}:</span> ${q.q}
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${q.options.map((opt, optIdx) => `
                <button onclick="checkLessonQuiz(this, ${optIdx === q.ans}, '${q.exp.replace(/'/g, "\\'")}')" class="quiz-btn text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-300 transition flex items-start gap-2">
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
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-black text-xs sm:text-sm shadow-sm shadow-indigo-500/20 tracking-wide">
            <i class="${lesson.icon || 'fa-solid fa-cube'}"></i> ${lesson.number}
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
        <i class="fa-solid fa-lightbulb text-indigo-500 text-base mt-0.5 shrink-0"></i>
        <div>${lesson.overview}</div>
      </div>

      ${diagramHTML}

      <div class="space-y-6">
        ${lesson.sections.map(sec => `
          <div class="space-y-2">
            <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
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
          <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Sơ đồ tra cứu nhanh từ khoá cốt lõi</h3>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-xs border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
          <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
            <tr>
              <th class="p-3 text-left w-1/3 border-b border-slate-200 dark:border-slate-700">Chủ đề</th>
              <th class="p-3 text-left border-b border-slate-200 dark:border-slate-700">Trình tự / Nhóm cốt lõi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            ${quickLookupTable.map(row => `
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <td class="p-3 font-bold text-indigo-700 dark:text-indigo-400">${row.topic}</td>
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

  const chaptersHTML = allChapters.map(chap => `
    <section id="${chap.chapterId}" class="scroll-mt-28 space-y-8 mb-12">
      <div class="p-5 rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-700 text-white shadow-lg flex items-center justify-between">
        <div class="flex items-center gap-3.5">
          <span class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur text-white flex items-center justify-center text-xl shrink-0">
            <i class="${chap.icon}"></i>
          </span>
          <div>
            <span class="text-xs font-bold text-indigo-100 uppercase tracking-wider">${chap.chapterNumber}</span>
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
  <title>Công Nghệ 10: Thiết Kế và Công Nghệ — Kết Nối Tri Thức | CodeHub</title>
  <meta name="description" content="Khóa học Công nghệ 10 Thiết kế và Công nghệ chuẩn SGK Kết nối tri thức. 3 chương, 22 bài học toàn diện, đầy đủ sơ đồ kĩ thuật SVG, mini-quiz và đề thi Trạng Nguyên 25 câu.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#4f46e5',
            'primary-dark': '#4338ca',
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
        <a href="../index.html" class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-black text-xl">
          <i class="fa-solid fa-graduation-cap"></i>
          <span>CodeHub</span>
        </a>
        <span class="hidden sm:inline-block text-slate-300 dark:text-slate-700">|</span>
        <span class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 font-bold text-xs">
          <i class="fa-solid fa-compass-drafting"></i> Công Nghệ 10 — Thiết Kế
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <button onclick="openExamModal()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-xs transition shadow-sm shadow-indigo-500/20">
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
          <i class="fa-solid fa-list-ul text-indigo-500"></i> Mục lục môn học
        </span>
        <button onclick="toggleMobileDrawer()" class="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      ${sidebarHTML}
    </div>
  </div>

  <!-- Main Hero Banner -->
  <div class="bg-gradient-to-b from-indigo-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 text-xs font-bold mb-4">
          <i class="fa-solid fa-graduation-cap"></i> CHƯƠNG TRÌNH CHUẨN SGK GDPT 2018 — KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
        </div>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Công Nghệ 10: Thiết Kế và Công Nghệ
        </h1>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          Hệ thống hóa toàn bộ kiến thức <strong>3 chương, 22 bài học</strong> theo SGK chuẩn, tích hợp đầy đủ sơ đồ kĩ thuật SVG, quy chuẩn bản vẽ TCVN/ISO, quy trình thiết kế 7 bước, dự án cột lọc nước STEM, mini-quiz từng bài và đề thi Trạng Nguyên 25 câu hỏi.
        </p>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="p-3 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm text-center">
            <span class="block text-2xl font-black text-indigo-600 dark:text-indigo-400">3</span>
            <span class="text-xs text-slate-500 font-medium">Chương kiến thức</span>
          </div>
          <div class="p-3 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm text-center">
            <span class="block text-2xl font-black text-blue-600 dark:text-blue-400">22</span>
            <span class="text-xs text-slate-500 font-medium">Bài học đầy đủ</span>
          </div>
          <div class="p-3 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm text-center">
            <span class="block text-2xl font-black text-teal-600 dark:text-teal-400">6</span>
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
            <i class="fa-solid fa-bars-staggered text-indigo-500"></i> Mục lục bài học
          </div>
          ${sidebarHTML}
        </div>
      </aside>

      <!-- Main Content Articles -->
      <main class="lg:col-span-3 space-y-6">

        <!-- Sticky Quick Section Jump Navigation -->
        <div class="sticky top-20 z-20 flex flex-wrap items-center gap-2 p-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm mb-6">
          <a href="#chuong-1" class="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-900/50 hover:bg-indigo-100 transition flex items-center gap-1.5">
            <i class="fa-solid fa-microchip"></i> <span>Chương I: Đại cương</span>
          </a>
          <a href="#chuong-2" class="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/50 hover:bg-blue-100 transition flex items-center gap-1.5">
            <i class="fa-solid fa-compass-drafting"></i> <span>Chương II: Vẽ kĩ thuật</span>
          </a>
          <a href="#chuong-3" class="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-900/50 hover:bg-purple-100 transition flex items-center gap-1.5">
            <i class="fa-solid fa-lightbulb"></i> <span>Chương III: Thiết kế</span>
          </a>
          <a href="#bang-tra-cuu" class="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/50 hover:bg-amber-100 transition flex items-center gap-1.5">
            <i class="fa-solid fa-book"></i> <span>Tra cứu nhanh</span>
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
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white flex items-center justify-center text-lg">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="text-lg font-black text-slate-900 dark:text-white">Thi Trạng Nguyên: Thiết Kế và Công Nghệ 10</h3>
            <p class="text-xs text-slate-500">25 câu hỏi trắc nghiệm khách quan toàn diện chuẩn SGK Kết nối tri thức</p>
          </div>
        </div>
        <button onclick="closeExamModal()" class="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <!-- Modal Body (Questions) -->
      <div id="examContainer" class="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
        <!-- Rendered by JS -->
      </div>

      <!-- Exam Result Box (Hidden by default) -->
      <div id="examResultBox" class="p-6 overflow-y-auto custom-scrollbar flex-1 hidden text-center space-y-4">
        <div class="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-3xl mx-auto">
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
      <p>Hệ thống học liệu chuẩn SGK Công nghệ 10: Thiết kế và Công nghệ — Bộ sách Kết nối tri thức với cuộc sống.</p>
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
          l.classList.remove('bg-indigo-50', 'dark:bg-indigo-950/60', 'text-indigo-700', 'dark:text-indigo-400', 'font-bold');
        });
        this.classList.add('bg-indigo-50', 'dark:bg-indigo-950/60', 'text-indigo-700', 'dark:text-indigo-400', 'font-bold');
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
        b.classList.remove('hover:border-indigo-400', 'hover:bg-indigo-50/50');
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
              <span class="text-indigo-600 dark:text-indigo-400">Câu \${idx + 1}:</span> \${q.q}
            </p>
            <div class="space-y-2">
              \${q.options.map((opt, optIdx) => \`
                <label class="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700/50 cursor-pointer transition">
                  <input type="radio" name="exam_q_\${idx}" value="\${optIdx}" onchange="recordExamAnswer(\${idx}, \${optIdx})" class="text-indigo-600 focus:ring-indigo-500">
                  <span class="font-medium text-slate-700 dark:text-slate-300">\${opt}</span>
                </label>
              \`).join('')}
            </div>
          </div>
        \`;
      });
      html += \`
        <div class="text-center pt-4">
          <button onclick="submitExam()" class="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-black text-sm shadow-lg shadow-indigo-500/25 transition">
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
      if (percent >= 90) rank = 'Trạng Nguyên Thiết Kế & Công Nghệ 10 — Xuất Sắc!';
      else if (percent >= 75) rank = 'Bảng Nhãn Thiết Kế & Công Nghệ 10 — Rất Tốt!';
      else if (percent >= 50) rank = 'Đạt Yêu Cầu Chuẩn Năng Lực SGK';

      scoreTitle.innerHTML = \`<span class="text-indigo-600">\${score} / \${examQuestions.length}</span> (\${percent}%)\`;
      scoreDesc.innerHTML = \`<strong class="text-base text-slate-900 dark:text-white block mb-1">\${rank}</strong>Bạn đã hoàn thành bài kiểm tra chuẩn 25 câu hỏi môn Công nghệ 10: Thiết kế và Công nghệ SGK Kết nối tri thức.\`;
    }

    function resetExam() {
      document.getElementById('examContainer').classList.remove('hidden');
      renderExamQuestions();
    }
  </script>
</body>
</html>`;
}

// Generate and write file to BOTH congnghe_10.html and congnghe_thietke_10.html
const fullHTML = generateFullHTML();
const path1 = path.join(__dirname, '../courses/congnghe_10.html');
const path2 = path.join(__dirname, '../courses/congnghe_thietke_10.html');

fs.writeFileSync(path1, fullHTML, 'utf8');
fs.writeFileSync(path2, fullHTML, 'utf8');
console.log('Successfully generated courses/congnghe_10.html! File size:', fullHTML.length);
console.log('Successfully synchronized courses/congnghe_thietke_10.html! File size:', fullHTML.length);
