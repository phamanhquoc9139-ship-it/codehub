// Bộ sinh trang hoàn chỉnh môn Địa Lí 10: Hệ Thống Kiến Thức Đầy Đủ
// 13 Chương, 40 Bài học đầy đủ, Sơ đồ SVG, Mini-Quiz và Thi Trạng Nguyên 25 câu chuẩn SGK Kết nối tri thức

const fs = require('fs');
const path = require('path');

const { chaptersPart1 } = require('./diali10_data_part1.js');
const { chaptersPart2 } = require('./diali10_data_part2.js');
const { chaptersPart3 } = require('./diali10_data_part3.js');
const { diagrams } = require('./diali10_diagrams.js');
const { formulaTable, skillsGuide, editorialNotes, trangNguyenExamQuestions } = require('./diali10_terms_exam.js');

const allChapters = [...chaptersPart1, ...chaptersPart2, ...chaptersPart3];

function renderSidebar() {
  let html = '<nav class="space-y-6 text-xs">';
  
  // Group by parts
  const parts = [
    { title: "PHẦN 1: MỘT SỐ VẤN ĐỀ CHUNG", color: "emerald", chapters: allChapters.filter(c => c.partId === "phan-1") },
    { title: "PHẦN 2: ĐỊA LÍ TỰ NHIÊN", color: "blue", chapters: allChapters.filter(c => c.partId === "phan-2") },
    { title: "PHẦN 3: ĐỊA LÍ KINH TẾ – XÃ HỘI", color: "teal", chapters: allChapters.filter(c => c.partId === "phan-3") }
  ];

  parts.forEach(part => {
    html += `
      <div class="space-y-3">
        <div class="text-[11px] font-black uppercase tracking-wider text-${part.color}-700 dark:text-${part.color}-400 px-3 py-1.5 flex items-center justify-between bg-${part.color}-50 dark:bg-${part.color}-950/60 rounded-xl">
          <span>${part.title}</span>
          <span class="text-[10px] font-bold">${part.chapters.length} chương</span>
        </div>
    `;

    part.chapters.forEach(chap => {
      html += `
        <div class="pl-1 space-y-1">
          <div class="text-[11px] font-bold text-slate-500 dark:text-slate-400 px-2 py-1 flex items-center justify-between">
            <span><i class="${chap.icon || 'fa-solid fa-folder'} mr-1 text-emerald-600"></i> ${chap.chapterNumber}: ${chap.chapterTitle}</span>
            <span class="text-[10px] text-slate-400">${chap.lessons.length} bài</span>
          </div>
          <div class="space-y-0.5">
            ${chap.lessons.map(lesson => `
              <a href="#${lesson.id}" class="nav-link group block px-2.5 py-1.5 rounded-xl border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800/60 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/50 transition">
                <div class="flex items-center justify-between gap-1 text-[11px] mb-0.5">
                  <span class="font-bold text-xs text-emerald-600 dark:text-emerald-400">${lesson.number}</span>
                  <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium truncate max-w-[120px] text-right group-hover:text-emerald-500 transition">${lesson.badge}</span>
                </div>
                <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug">
                  ${lesson.title}
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      `;
    });

    html += `</div>`;
  });

  html += `
    <div class="pt-2 border-t border-slate-100 dark:border-slate-800">
      <div class="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 px-3 py-1.5 flex items-center justify-between bg-amber-50 dark:bg-amber-950/60 rounded-xl mb-2">
        <span>Tra cứu &amp; Kỹ năng</span>
        <span class="text-[10px] text-amber-600 font-bold">3 mục</span>
      </div>
      <div class="space-y-1">
        <a href="#cong-thuc" class="nav-link block px-3 py-1.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-amber-600 hover:bg-amber-50/70 dark:hover:bg-amber-950/50 transition border border-transparent hover:border-amber-200 dark:hover:border-amber-800/60">
          <div class="font-bold text-xs text-amber-600 dark:text-amber-400 mb-0.5">Công thức tính toán</div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 leading-snug">Bảng công thức thường dùng</div>
        </a>
        <a href="#quy-trinh-ky-nang" class="nav-link block px-3 py-1.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-amber-600 hover:bg-amber-50/70 dark:hover:bg-amber-950/50 transition border border-transparent hover:border-amber-200 dark:hover:border-amber-800/60">
          <div class="font-bold text-xs text-amber-600 dark:text-amber-400 mb-0.5">Quy trình kỹ năng</div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 leading-snug">Rèn kỹ năng biểu đồ, bản đồ</div>
        </a>
        <a href="#ghi-chu-hoc-lieu" class="nav-link block px-3 py-1.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-amber-600 hover:bg-amber-50/70 dark:hover:bg-amber-950/50 transition border border-transparent hover:border-amber-200 dark:hover:border-amber-800/60">
          <div class="font-bold text-xs text-amber-600 dark:text-amber-400 mb-0.5">Thông tin tài liệu</div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 leading-snug">Ghi chú &amp; Nguồn học liệu</div>
        </a>
      </div>
    </div>
  </nav>`;
  return html;
}

function renderLessonCard(lesson) {
  // Gắn sơ đồ đồ họa minh họa phù hợp
  let diagramHTML = '';
  if (lesson.id === 'bai-4') {
    diagramHTML = diagrams.earth_structure;
  } else if (lesson.id === 'bai-5') {
    diagramHTML = diagrams.earth_revolution_seasons;
  } else if (lesson.id === 'bai-9') {
    diagramHTML = diagrams.pressure_wind_belts;
  } else if (lesson.id === 'bai-11') {
    diagramHTML = diagrams.water_cycle;
  } else if (lesson.id === 'bai-19') {
    diagramHTML = diagrams.population_pyramids;
  } else if (lesson.id === 'bai-40') {
    diagramHTML = diagrams.sustainable_pillars;
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
            <i class="${lesson.icon || 'fa-solid fa-book'}"></i> ${lesson.number}
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

function generateFullHTML() {
  const sidebarHTML = renderSidebar();
  
  let contentHTML = '';
  allChapters.forEach(chap => {
    contentHTML += `
      <section id="${chap.chapterId}" class="scroll-mt-28 mb-12">
        <div class="p-6 rounded-3xl bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-transparent dark:from-emerald-950/40 dark:via-teal-950/30 border border-emerald-200/60 dark:border-emerald-800/50 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
              <span>${chap.partTitle}</span>
              <span>•</span>
              <span>${chap.badge}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <i class="${chap.icon || 'fa-solid fa-layer-group'} text-emerald-600 dark:text-emerald-400"></i>
              <span>${chap.chapterNumber}: ${chap.chapterTitle}</span>
            </h2>
          </div>
          <span class="px-3 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold shadow-sm border border-slate-200/60 dark:border-slate-700">
            ${chap.lessons.length} bài học
          </span>
        </div>

        <div class="space-y-2">
          ${chap.lessons.map(lesson => renderLessonCard(lesson)).join('')}
        </div>
      </section>
    `;
  });

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Địa Lí 10 — Hệ Thống Kiến Thức Đầy Đủ | CodeHub</title>
  <meta name="description" content="Trọn bộ kiến thức Địa Lí 10 SGK Kết nối tri thức với cuộc sống. Đầy đủ 13 chương, 40 bài học, sơ đồ SVG kĩ thuật, công thức tính toán và bài thi trắc nghiệm Trạng Nguyên 25 câu.">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            slate: {
              850: '#151f32',
              900: '#0f172a',
              950: '#080d1a',
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
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
    .nav-link.active { background-color: rgba(16, 185, 129, 0.1); color: #059669; font-weight: 700; border-color: #10b981; }
    .dark .nav-link.active { background-color: rgba(16, 185, 129, 0.2); color: #34d399; border-color: #059669; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen flex flex-col transition-colors duration-200">

  <!-- Top Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo & Breadcrumb -->
        <div class="flex items-center gap-3">
          <a href="../index.html" class="flex items-center gap-2 group">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-sm shadow-emerald-500/30 group-hover:scale-105 transition">
              <i class="fa-solid fa-graduation-cap text-lg"></i>
            </div>
            <span class="font-black text-xl text-slate-900 dark:text-white tracking-tight">CodeHub</span>
          </a>
          <span class="text-slate-300 dark:text-slate-700">/</span>
          <div class="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
            <i class="fa-solid fa-earth-americas"></i>
            <span>Địa Lí 10 (KNTT)</span>
          </div>
        </div>

        <!-- Action Tools -->
        <div class="flex items-center gap-2 sm:gap-3">
          
          <!-- Exam Modal Button -->
          <button onclick="openExamModal()" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs shadow-sm shadow-amber-500/20 transition transform active:scale-95">
            <i class="fa-solid fa-award"></i>
            <span class="hidden sm:inline">Thi Trạng Nguyên</span>
            <span class="sm:hidden">Thi</span>
            <span class="px-1.5 py-0.5 rounded-md bg-white/20 text-[10px]">25 câu</span>
          </button>

          <!-- Dark/Light Theme Toggle -->
          <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition">
            <i class="fa-solid fa-moon dark:hidden"></i>
            <i class="fa-solid fa-sun hidden dark:block text-amber-400"></i>
          </button>

          <!-- Mobile Sidebar Toggle -->
          <button onclick="toggleMobileDrawer()" class="lg:hidden w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>

      </div>
    </div>
  </header>

  <!-- Hero Banner -->
  <div class="bg-gradient-to-b from-emerald-600/10 via-transparent to-transparent border-b border-slate-200/60 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div class="max-w-4xl">
        <div class="flex flex-wrap items-center gap-2 mb-3">
          <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-600 text-white tracking-wide">
            CHUẨN GDPT 2018
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            13 CHƯƠNG • 40 BÀI ĐẦY ĐỦ
          </span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Địa Lí 10 — Hệ Thống Kiến Thức Toàn Diện
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Tài liệu học tập chuẩn hóa và số hóa toàn bộ chương trình Địa lí 10: Phần một (Sử dụng bản đồ), Phần hai (Địa lí tự nhiên: Thạch quyển, Khí quyển, Thủy quyển, Sinh quyển, Quy luật vỏ địa lí), Phần ba (Địa lí kinh tế – xã hội: Dân cư, Đô thị hóa, Nông – Lâm – Thủy sản, Công nghiệp, Dịch vụ, Phát triển bền vững) và Cẩm nang công thức, quy trình kĩ năng.
        </p>

        <!-- Search Bar -->
        <div class="mt-6 relative max-w-xl">
          <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
          <input type="text" id="searchInput" onkeyup="filterLessons()" placeholder="Tìm kiếm nhanh bài học, khái niệm, từ khóa (Ví dụ: Thạch quyển, Coriolis, GDP, Nông nghiệp 4.0...)" class="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm transition">
        </div>
      </div>
    </div>
  </div>

  <!-- Content Section with Sidebar -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- Desktop Sidebar Sticky -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar p-4 bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
            <i class="fa-solid fa-bars-staggered text-emerald-500"></i> Mục lục bài học (40 bài)
          </div>
          ${sidebarHTML}
        </div>
      </aside>

      <!-- Main Content Articles -->
      <main class="lg:col-span-3 space-y-6">

        <!-- Sticky Quick Section Jump Navigation -->
        <div class="sticky top-20 z-20 flex flex-wrap items-center gap-2 p-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm mb-6 overflow-x-auto">
          <a href="#chuong-1" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 hover:bg-emerald-100 transition whitespace-nowrap">
            <i class="fa-solid fa-map"></i> Bản đồ (C1)
          </a>
          <a href="#chuong-2" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 hover:bg-blue-100 transition whitespace-nowrap">
            <i class="fa-solid fa-earth-americas"></i> Trái Đất (C2)
          </a>
          <a href="#chuong-3" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/80 hover:bg-amber-100 transition whitespace-nowrap">
            <i class="fa-solid fa-mountain"></i> Thạch quyển (C3)
          </a>
          <a href="#chuong-4" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/80 hover:bg-sky-100 transition whitespace-nowrap">
            <i class="fa-solid fa-cloud"></i> Khí quyển (C4)
          </a>
          <a href="#chuong-5" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200/80 hover:bg-cyan-100 transition whitespace-nowrap">
            <i class="fa-solid fa-water"></i> Thủy quyển (C5)
          </a>
          <a href="#chuong-6" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 hover:bg-emerald-100 transition whitespace-nowrap">
            <i class="fa-solid fa-tree"></i> Sinh quyển (C6)
          </a>
          <a href="#chuong-8" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/80 hover:bg-purple-100 transition whitespace-nowrap">
            <i class="fa-solid fa-users"></i> Dân cư (C8)
          </a>
          <a href="#chuong-10" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-lime-50 dark:bg-lime-950/60 text-lime-700 dark:text-lime-300 border border-lime-200/80 hover:bg-lime-100 transition whitespace-nowrap">
            <i class="fa-solid fa-wheat-awn"></i> Nông nghiệp (C10)
          </a>
          <a href="#chuong-11" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-200/80 hover:bg-orange-100 transition whitespace-nowrap">
            <i class="fa-solid fa-industry"></i> Công nghiệp (C11)
          </a>
          <a href="#chuong-12" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 border border-pink-200/80 hover:bg-pink-100 transition whitespace-nowrap">
            <i class="fa-solid fa-plane"></i> Dịch vụ (C12)
          </a>
          <a href="#chuong-13" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/80 hover:bg-teal-100 transition whitespace-nowrap">
            <i class="fa-solid fa-leaf"></i> Bền vững (C13)
          </a>
          <a href="#cong-thuc" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/80 hover:bg-amber-100 transition whitespace-nowrap">
            <i class="fa-solid fa-calculator"></i> Công thức
          </a>
        </div>

        <!-- Render All 13 Chapters & 40 Lessons -->
        ${contentHTML}

        <!-- Formula Table Section -->
        ${formulaTable}

        <!-- Skills & Terms Guide Section -->
        ${skillsGuide}

        <!-- Editorial Notes Section -->
        ${editorialNotes}

      </main>
    </div>
  </div>

  <!-- Mobile Drawer Backdrop & Drawer -->
  <div id="mobileDrawer" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden lg:hidden">
    <div class="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white dark:bg-slate-900 p-5 shadow-2xl flex flex-col">
      <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
        <div class="flex items-center gap-2 font-black text-slate-900 dark:text-white">
          <i class="fa-solid fa-earth-americas text-emerald-600"></i>
          <span>Mục lục Địa Lí 10</span>
        </div>
        <button onclick="toggleMobileDrawer()" class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="overflow-y-auto custom-scrollbar flex-grow py-4" onclick="toggleMobileDrawer()">
        ${sidebarHTML}
      </div>
    </div>
  </div>

  <!-- Thi Trạng Nguyên 25 Câu Modal -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-850 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200/80 dark:border-slate-700">
      
      <!-- Modal Header -->
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-lg shadow-sm">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h4 class="font-black text-slate-900 dark:text-white text-base">Đề Thi Trạng Nguyên Địa Lí 10</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400">Bộ đề chuẩn 25 câu hỏi trắc nghiệm bao quát toàn bộ 13 chương SGK</p>
          </div>
        </div>
        <button onclick="closeExamModal()" class="w-8 h-8 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body Question List -->
      <div class="p-6 overflow-y-auto custom-scrollbar flex-grow space-y-6 text-xs sm:text-sm" id="examQuestionsContainer">
        <!-- Injected via JavaScript -->
      </div>

      <!-- Modal Footer -->
      <div class="p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/60 rounded-b-3xl">
        <div class="text-xs font-semibold text-slate-600 dark:text-slate-400" id="examProgress">
          Đã trả lời: <span id="answeredCount" class="text-emerald-600 font-bold">0</span>/25 câu
        </div>
        <div class="flex items-center gap-2">
          <button onclick="submitExam()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-sm transition">
            Nộp bài &amp; Xem kết quả
          </button>
        </div>
      </div>

      <!-- Exam Result Overlay -->
      <div id="examResultBox" class="p-6 text-center hidden">
        <div class="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 text-2xl mx-auto flex items-center justify-center mb-3">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 class="text-xl font-black text-slate-900 dark:text-white mb-1" id="examScoreTitle">Kết quả thi</h4>
        <p class="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6" id="examScoreDesc"></p>
        <button onclick="resetExam()" class="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition">
          Làm lại bài thi
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-auto bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-center gap-2 font-bold text-slate-800 dark:text-slate-200 mb-2">
        <i class="fa-solid fa-earth-americas text-emerald-600"></i>
        <span>Địa Lí 10 — Bộ sách Kết nối tri thức với cuộc sống (13 chương, 40 bài)</span>
      </div>
      <p>© 2026 CodeHub Learning Platform. Học liệu trực quan, chuẩn năng lực GDPT 2018.</p>
    </div>
  </footer>

  <!-- Core Interactive Script -->
  <script>
    // Theme Mode
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

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
          l.classList.remove('active');
        });
        this.classList.add('active');
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
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs';
        feedback.innerHTML = '<strong class="block mb-0.5"><i class="fa-solid fa-circle-check mr-1 text-emerald-500"></i> Chính xác!</strong>' + explanation;
      } else {
        btn.classList.add('bg-rose-100', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-800', 'dark:text-rose-300');
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs';
        feedback.innerHTML = '<strong class="block mb-0.5"><i class="fa-solid fa-circle-xmark mr-1 text-rose-500"></i> Chưa chính xác!</strong>' + explanation;
      }
      feedback.classList.remove('hidden');
    }

    // Filter Lessons by Search Input
    function filterLessons() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.lesson-card');
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (!query || text.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // Trang Nguyen Exam Data
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
      const container = document.getElementById('examQuestionsContainer');
      document.getElementById('examResultBox').classList.add('hidden');
      container.classList.remove('hidden');

      container.innerHTML = examQuestions.map((q, idx) => \`
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700">
          <p class="font-bold text-slate-900 dark:text-white mb-3">
            <span class="text-emerald-600 dark:text-emerald-400">Câu \${idx + 1}:</span> \${q.q}
          </p>
          <div class="space-y-2">
            \${q.options.map((opt, optIdx) => \`
              <label class="flex items-start gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition">
                <input type="radio" name="exam_q_\${idx}" value="\${optIdx}" onchange="recordExamAnswer(\${idx}, \${optIdx})" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span class="font-medium text-slate-700 dark:text-slate-300">\${opt}</span>
              </label>
            \`).join('')}
          </div>
        </div>
      \`).join('');
      updateExamProgress();
    }

    function recordExamAnswer(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
      updateExamProgress();
    }

    function updateExamProgress() {
      const count = Object.keys(userAnswers).length;
      document.getElementById('answeredCount').innerText = count;
    }

    function submitExam() {
      const container = document.getElementById('examQuestionsContainer');
      const resultBox = document.getElementById('examResultBox');
      const scoreTitle = document.getElementById('examScoreTitle');
      const scoreDesc = document.getElementById('examScoreDesc');

      let score = 0;
      examQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.ans) score++;
      });

      container.classList.add('hidden');
      resultBox.classList.remove('hidden');

      const percent = Math.round((score / examQuestions.length) * 100);
      let rank = 'Cần ôn tập thêm';
      if (percent >= 90) rank = 'Trạng Nguyên Địa Lí 10 — Xuất Sắc!';
      else if (percent >= 75) rank = 'Bảng Nhãn Địa Lí 10 — Rất Tốt!';
      else if (percent >= 50) rank = 'Đạt Chuẩn Kiến Thức Năng Lực SGK';

      scoreTitle.innerHTML = \`<span class="text-emerald-600">\${score} / \${examQuestions.length}</span> (\${percent}%)\`;
      scoreDesc.innerHTML = \`<strong class="text-base text-slate-900 dark:text-white block mb-1">\${rank}</strong>Bạn đã hoàn thành bài kiểm tra chuẩn 25 câu hỏi môn Địa Lí 10 SGK Kết nối tri thức với cuộc sống.\`;
    }

    function resetExam() {
      userAnswers = {};
      document.getElementById('examContainer').classList.remove('hidden');
      renderExamQuestions();
    }
  </script>
</body>
</html>`;
}

// Generate and write file to courses/diali_10.html
const fullHTML = generateFullHTML();
const targetPath = path.join(__dirname, '../courses/diali_10.html');

fs.writeFileSync(targetPath, fullHTML, 'utf8');
console.log('Successfully generated courses/diali_10.html! File size:', fullHTML.length);
