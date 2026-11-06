const fs = require('fs');
const path = require('path');
const data = require('./gdtc_6_data.js');

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderMarkdown(md) {
  if (!md) return '';

  const rawLines = md.trim().split('\n');
  const blocks = [];
  let currentTable = null;
  let currentUl = null;
  let currentOl = null;
  let currentPara = [];

  function flushPara() {
    if (currentPara.length > 0) {
      const text = currentPara.join(' ').trim();
      if (text) {
        blocks.push(`<p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed my-2">${text}</p>`);
      }
      currentPara = [];
    }
  }

  function flushList() {
    if (currentUl) {
      blocks.push(`<ul class="list-disc pl-5 space-y-1.5 my-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">${currentUl.join('')}</ul>`);
      currentUl = null;
    }
    if (currentOl) {
      blocks.push(`<ol class="list-decimal pl-5 space-y-1.5 my-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">${currentOl.join('')}</ol>`);
      currentOl = null;
    }
  }

  function flushTable() {
    if (currentTable) {
      let tableHtml = '<div class="overflow-x-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"><table class="w-full text-left border-collapse text-xs">';
      let isFirstRow = true;
      currentTable.forEach(row => {
        if (row.every(c => /^:?-+:?$/.test(c.trim()))) {
          return;
        }
        tableHtml += '<tr class="border-b border-slate-200 dark:border-slate-700/60 transition hover:bg-slate-50/50 dark:hover:bg-slate-800/40">';
        row.forEach(cell => {
          if (isFirstRow) {
            tableHtml += `<th class="py-2.5 px-3.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">${formatInline(cell)}</th>`;
          } else {
            tableHtml += `<td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300">${formatInline(cell)}</td>`;
          }
        });
        tableHtml += '</tr>';
        isFirstRow = false;
      });
      tableHtml += '</table></div>';
      blocks.push(tableHtml);
      currentTable = null;
    }
  }

  function formatInline(str) {
    if (!str) return '';
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-slate-100">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');
  }

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushPara();
      flushList();
      flushTable();
      continue;
    }

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushPara();
      flushList();
      if (!currentTable) currentTable = [];
      const cells = trimmed.split('|').slice(1, -1);
      currentTable.push(cells);
      continue;
    } else {
      flushTable();
    }

    if (trimmed.startsWith('### ')) {
      flushPara();
      flushList();
      const title = formatInline(trimmed.replace(/^###\s+/, ''));
      blocks.push(`<h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-5 mb-2.5 flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shrink-0"></span>${title}</h4>`);
      continue;
    }
    if (trimmed.startsWith('#### ')) {
      flushPara();
      flushList();
      const title = formatInline(trimmed.replace(/^####\s+/, ''));
      blocks.push(`<h5 class="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 mt-3.5 mb-1.5">${title}</h5>`);
      continue;
    }

    if (trimmed.startsWith('> ')) {
      flushPara();
      flushList();
      const quote = formatInline(trimmed.replace(/^>\s+/, ''));
      blocks.push(`<blockquote class="p-3 my-2.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border-l-4 border-emerald-500 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed italic">${quote}</blockquote>`);
      continue;
    }

    const ulMatch = line.match(/^(\s*)([-+*])\s+(.*)$/);
    if (ulMatch) {
      flushPara();
      if (currentOl) flushList();
      if (!currentUl) currentUl = [];
      const indent = ulMatch[1].length;
      const content = formatInline(ulMatch[3]);
      if (indent >= 2) {
        currentUl.push(`<li class="ml-4 list-[circle] leading-relaxed">${content}</li>`);
      } else {
        currentUl.push(`<li class="leading-relaxed">${content}</li>`);
      }
      continue;
    }

    const olMatch = line.match(/^(\s*)(\d+)\.\s+(.*)$/);
    if (olMatch) {
      flushPara();
      if (currentUl) flushList();
      if (!currentOl) currentOl = [];
      const content = formatInline(olMatch[3]);
      currentOl.push(`<li class="leading-relaxed">${content}</li>`);
      continue;
    }

    if (/^[a-d]\)\s+/.test(trimmed)) {
      flushPara();
      flushList();
      const content = formatInline(trimmed);
      blocks.push(`<h5 class="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 mt-3.5 mb-1.5">${content}</h5>`);
      continue;
    }

    currentPara.push(formatInline(trimmed));
  }

  flushPara();
  flushList();
  flushTable();

  return blocks.join('\n');
}

// Flatten all lessons
const allLessons = [];
data.sections.forEach(sec => {
  sec.lessons.forEach(l => {
    allLessons.push({ ...l, sectionId: sec.id, sectionTitle: sec.title });
  });
});

console.log(`Total lessons in GDTC 6: ${allLessons.length}`);

let html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Giáo Dục Thể Chất Lớp 6 (KNTT - GDPT 2018: 3 Phần • 25 Bài Học • Máy Đếm Nhịp &amp; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            dark: {
              bg: '#0A0B14',
              surface: '#121422',
              card: '#1B1E34'
            },
            sport: {
              emerald: '#059669',
              teal: '#0D9488',
              amber: '#D97706',
              blue: '#2563EB',
              rose: '#E11D48'
            }
          }
        }
      }
    };
  </script>

  <!-- Immediate Dark Mode Init in Head -->
  <script>
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>

  <!-- FontAwesome 6 & Canvas Confetti -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

  <meta name="codehub-activity-name" content="Khóa Học Giáo Dục Thể Chất Lớp 6">
  <meta name="description" content="Chương trình GDTC Lớp 6 GDPT 2018 (SGK Kết nối tri thức với cuộc sống): Trọn vẹn 3 Phần, 25 Bài học chuẩn mực; Máy đếm nhịp 30 nhịp thể dục, Đồng hồ bấm giờ thể thao và Hội thi Trạng Nguyên 60 phút.">

  <style>
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.05); }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(5,150,105,0.3); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(5,150,105,0.6); }
    .lesson-content { scroll-margin-top: 85px; }
  </style>
</head>
<body class="bg-slate-100 dark:bg-dark-bg text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white">

  <!-- TOP NAVBAR -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-dark-surface/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 p-2 rounded-xl text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Trở về Trang Chủ CodeHub">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 font-black text-lg">
            <i class="fa-solid fa-person-running"></i>
          </div>
          <span class="font-black text-lg tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hidden sm:inline">
            CodeHub
          </span>
        </a>
        <span class="text-xs px-2.5 py-1 rounded-full font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
          GDTC 6
        </span>
      </div>

      <!-- Quick Search Bar -->
      <div class="flex-1 max-w-md hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
          <input type="text" id="lessonSearchInput" onkeyup="filterLessons(this.value)" placeholder="Tìm bài học (vd: Chạy 60m, Ném bóng, 30 nhịp, Cầu lông, Bóng đá...)"
            class="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition">
        </div>
      </div>

      <!-- Actions: Tools & DarkMode -->
      <div class="flex items-center gap-2 sm:gap-3">
        <button onclick="openMetronomeModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-200 dark:border-teal-900/50 transition" title="Máy đếm 30 nhịp thể dục liên hoàn">
          <i class="fa-solid fa-stopwatch text-teal-500"></i>
          <span class="hidden sm:inline">Đếm 30 Nhịp</span>
        </button>

        <button onclick="openCourtModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs border border-blue-200 dark:border-blue-900/50 transition" title="Tra cứu Kích thước sân bãi &amp; Dụng cụ">
          <i class="fa-solid fa-ruler-combined text-blue-500"></i>
          <span class="hidden sm:inline">Sân Bãi &amp; Dụng Cụ</span>
        </button>

        <button onclick="openTrangNguyenModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs shadow-md shadow-orange-500/20 hover:opacity-95 transition" title="Tham gia Hội thi Trạng Nguyên 60 phút">
          <i class="fa-solid fa-award"></i>
          <span class="hidden sm:inline">Trạng Nguyên (60:00)</span>
        </button>

        <!-- Standard CodeHub Dark Mode Button -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" aria-label="Đổi giao diện Sáng / Tối">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-yellow-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- MAIN WRAPPER -->
  <div class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">

    <!-- SIDEBAR NAVIGATION -->
    <aside class="w-full lg:w-80 shrink-0 space-y-4">
      
      <!-- Progress Card -->
      <div class="p-4 rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Tiến Độ Rèn Luyện</span>
          <span id="progressText" class="text-xs font-black text-emerald-600 dark:text-emerald-400">0 / 25 Bài</span>
        </div>
        <div class="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div id="progressBar" class="h-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500 rounded-full" style="width: 0%"></div>
        </div>
        <div class="flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <span>Khởi đầu</span>
          <span id="percentBadge">0%</span>
          <span>Khỏe đẹp</span>
        </div>
      </div>

      <!-- Table of Contents -->
      <nav class="p-4 rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
          <h2 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-list-check text-emerald-600"></i>
            <span>25 Bài Học SGK</span>
          </h2>
          <span class="text-[11px] px-2 py-0.5 rounded-full font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            KNTT
          </span>
        </div>

        <div id="sidebarLessonList" class="space-y-4 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 custom-scrollbar text-xs">
          ${data.sections.map(sec => `
            <div class="space-y-1">
              <div class="px-2 py-1 font-black text-[11px] text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center justify-between">
                <span>${escapeHtml(sec.title)}</span>
                <span class="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.2 rounded font-bold">${sec.lessons.length} bài</span>
              </div>
              ${sec.lessons.map(l => `
                <a href="#lesson-${l.id}" onclick="selectLesson(${l.id})" id="nav-item-${l.id}"
                  class="lesson-nav-btn block p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium flex items-center justify-between group">
                  <span class="truncate">${escapeHtml(l.title)}</span>
                  <i id="check-icon-${l.id}" class="fa-regular fa-circle-check text-slate-300 dark:text-slate-700 text-xs shrink-0 group-hover:text-emerald-500"></i>
                </a>
              `).join('')}
            </div>
          `).join('')}
        </div>

        <!-- Banner thi thử Trạng Nguyên -->
        <div class="pt-2">
          <div onclick="openTrangNguyenModal()" class="cursor-pointer p-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center shadow-md shadow-emerald-500/20 hover:brightness-105 transition">
            <div class="text-[10px] uppercase font-bold tracking-widest text-emerald-200">Đấu Trường Thể Thao</div>
            <div class="font-black text-xs flex items-center justify-center gap-1.5 mt-0.5">
              <i class="fa-solid fa-trophy text-amber-300"></i>
              <span>Trạng Nguyên Thể Chất 6</span>
            </div>
          </div>
        </div>

      </nav>
    </aside>

    <!-- MAIN LESSON CONTENT AREA -->
    <main class="flex-1 min-w-0 space-y-8">
      
      <!-- HERO HEADER -->
      <section class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 text-white shadow-xl shadow-emerald-600/10 relative overflow-hidden">
        <div class="relative z-10 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-bold text-white">
            <i class="fa-solid fa-medal"></i>
            <span>GDPT 2018 • Bộ Sách Kết Nối Tri Thức Với Cuộc Sống</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
            Khóa Học Giáo Dục Thể Chất Lớp 6
          </h1>
          <p class="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
            Học tập trọn vẹn 3 Phần, 25 Bài học: Chế độ dinh dưỡng khoa học; Vận động cơ bản (Chạy ngắn 60m, Ném bóng 150g, Chạy cự li trung bình, Bài thể dục 30 nhịp liên hoàn); Thể thao tự chọn (Cầu lông, Bóng đá 7 người, Bóng rổ). Tích hợp máy đếm nhịp và đồng hồ bấm giờ thể thao.
          </p>
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <button onclick="scrollToFirstLesson()" class="px-4 py-2 rounded-xl bg-white text-emerald-700 font-bold text-xs shadow-md hover:bg-emerald-50 transition flex items-center gap-2">
              <i class="fa-solid fa-play text-emerald-600"></i>
              <span>Bắt Đầu Luyện Tập</span>
            </button>
            <button onclick="openMetronomeModal()" class="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs backdrop-blur transition flex items-center gap-2">
              <i class="fa-solid fa-stopwatch text-amber-300"></i>
              <span>Tập 30 Nhịp Thể Dục</span>
            </button>
          </div>
        </div>
        <div class="absolute -right-6 -bottom-6 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      </section>

      <!-- 25 LESSONS LIST -->
      <div class="space-y-10" id="allLessonsContainer">
        ${allLessons.map(l => `
          <article id="lesson-${l.id}" class="lesson-content p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition hover:shadow-md">
            
            <!-- Lesson Header Bar -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div class="space-y-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    Bài ${l.id} / 25
                  </span>
                  <span class="text-xs px-2 py-0.5 rounded-full font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    ${escapeHtml(l.topic)}
                  </span>
                  <span class="text-xs text-slate-500 font-medium">
                    <i class="fa-solid fa-book-open text-slate-400 mr-1"></i>${escapeHtml(l.pages)}
                  </span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  ${escapeHtml(l.title)}
                </h3>
              </div>
              <button onclick="toggleLessonComplete(${l.id})" id="btnComplete-${l.id}"
                class="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 hover:border-emerald-300 transition flex items-center gap-1.5 self-start sm:self-auto shrink-0">
                <i class="fa-regular fa-circle-check"></i>
                <span>Đánh dấu đã tập</span>
              </button>
            </div>

            <!-- 1. Mục tiêu và yêu cầu cần đạt -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-bullseye text-emerald-600"></i>
                <span>1. Mục tiêu và yêu cầu cần đạt</span>
              </h4>
              <div class="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <ul class="list-disc pl-5 space-y-1">
                  ${l.objectives.map(obj => `<li>${escapeHtml(obj)}</li>`).join('')}
                </ul>
              </div>
            </div>

            <!-- 2. Khởi động chung & Chuyên môn -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-heart-pulse text-rose-500"></i>
                <span>2. Khởi động chung và chuyên môn</span>
              </h4>
              <div class="p-3.5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-center gap-2.5">
                <i class="fa-solid fa-fire text-rose-500 text-base shrink-0"></i>
                <span>${escapeHtml(l.warmup)}</span>
              </div>
            </div>

            <!-- 3. Kiến thức, tư thế & Kĩ thuật động tác -->
            <div class="space-y-3">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-dumbbell text-teal-600"></i>
                <span>3. Kiến thức, tư thế và kĩ thuật động tác</span>
              </h4>
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3">
                ${renderMarkdown(l.technique)}
              </div>
            </div>

            <!-- 4. Minh họa theo từng bước -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-shoe-prints text-indigo-600"></i>
                <span>4. Trình tự thực hiện kĩ thuật theo bước</span>
              </h4>
              <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 text-xs font-mono text-indigo-900 dark:text-indigo-200 leading-relaxed font-bold">
                ${escapeHtml(l.stepsVisual)}
              </div>
            </div>

            <!-- 5. Luyện tập cá nhân, cặp đôi & Nhóm -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-people-group text-blue-600"></i>
                <span>5. Phương pháp luyện tập &amp; Trò chơi vận động</span>
              </h4>
              <div class="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-1">
                ${renderMarkdown(l.practice)}
              </div>
            </div>

            <!-- 6. Luật cơ bản & Lưu ý an toàn -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-shield-halved text-amber-500"></i>
                <span>6. Luật cơ bản và những lưu ý an toàn</span>
              </h4>
              <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
                ${renderMarkdown(l.rulesSafety)}
              </div>
            </div>

            <!-- 7. Câu hỏi củng cố & Luyện tập tương tác -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-circle-question text-rose-500"></i>
                <span>7. Câu hỏi củng cố tương tác</span>
              </h4>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3">
                <p class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">${escapeHtml(l.quiz.q)}</p>
                <div class="space-y-2" id="quiz-opt-group-${l.id}">
                  ${l.quiz.options.map((opt, oIdx) => `
                    <label class="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-surface hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition text-xs">
                      <input type="radio" name="lessonQuiz-${l.id}" value="${oIdx}" class="text-emerald-600 focus:ring-emerald-500">
                      <span class="text-slate-800 dark:text-slate-200">${escapeHtml(opt)}</span>
                    </label>
                  `).join('')}
                </div>
                <div class="flex items-center gap-3 pt-2">
                  <button onclick="checkPracticeQuiz(${l.id}, ${l.quiz.ans}, '${escapeHtml(l.quiz.exp).replace(/'/g, "\\'")}')" class="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition">
                    Kiểm tra đáp án
                  </button>
                  <span id="quiz-feedback-${l.id}" class="text-xs font-bold hidden"></span>
                </div>
                <div id="quiz-explanation-${l.id}" class="hidden p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed"></div>
              </div>
            </div>

            <!-- 8. Nhiệm vụ vận dụng -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-flag-checkered text-emerald-600"></i>
                <span>8. Nhiệm vụ rèn luyện vận dụng</span>
              </h4>
              <div class="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-3">
                <i class="fa-solid fa-dumbbell text-emerald-600 mt-0.5"></i>
                <div>
                  <p class="font-bold text-emerald-900 dark:text-emerald-300">Rèn luyện thể lực hằng ngày:</p>
                  <p class="mt-1">${escapeHtml(l.application)}</p>
                </div>
              </div>
            </div>

          </article>
        `).join('')}
      </div>

    </main>
  </div>

  <!-- MODAL: MÁY ĐẾM NHỊP 30 NHỊP THỂ DỤC -->
  <div id="metronomeModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-lg bg-white dark:bg-dark-surface rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
      <div class="p-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-stopwatch text-lg"></i>
          <div>
            <h3 class="font-black text-sm">Máy Đếm Nhịp Thể Dục Ảo</h3>
            <p class="text-[10px] text-teal-100">Bài Thể Dục Liên Hoàn 30 Nhịp Lớp 6</p>
          </div>
        </div>
        <button onclick="closeMetronomeModal()" class="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-sm transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 space-y-5 text-center">
        <!-- Big Beat Number -->
        <div class="p-6 rounded-3xl bg-slate-900 text-white space-y-2">
          <div class="text-[11px] text-teal-400 font-bold uppercase tracking-widest">Đang thực hiện</div>
          <div id="metronomeBeatNumber" class="text-6xl font-black font-mono text-emerald-400">TTCB</div>
          <div id="metronomeBeatDesc" class="text-xs font-medium text-slate-300 min-h-[2.5rem] flex items-center justify-center px-4">
            Đứng nghiêm (Tư thế chuẩn bị), hai tay áp sát đùi, mắt nhìn thẳng.
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center justify-center gap-3">
          <button id="btnStartMetro" onclick="startMetronome()" class="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs shadow-lg shadow-emerald-500/30 transition flex items-center gap-2">
            <i class="fa-solid fa-play"></i>
            <span>Bắt Đầu Đếm (1 ➔ 30)</span>
          </button>
          <button onclick="resetMetronome()" class="px-5 py-2.5 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-700 dark:text-slate-200 font-bold text-xs transition">
            Làm lại
          </button>
        </div>

        <!-- Speed Selector -->
        <div class="flex items-center justify-center gap-2 text-xs">
          <span class="text-slate-500">Tốc độ nhịp:</span>
          <button onclick="setMetroSpeed(1500)" id="spdSlow" class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">Chậm (1.5s)</button>
          <button onclick="setMetroSpeed(1200)" id="spdNormal" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Vừa (1.2s)</button>
          <button onclick="setMetroSpeed(900)" id="spdFast" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Nhanh (0.9s)</button>
        </div>

      </div>
    </div>
  </div>

  <!-- MODAL: SÂN BÃI & DỤNG CỤ THỂ THAO -->
  <div id="courtModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-2xl bg-white dark:bg-dark-surface rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      <div class="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-ruler-combined text-lg"></i>
          <div>
            <h3 class="font-black text-sm">Kích Thước Sân Bãi &amp; Dụng Cụ Thể Thao</h3>
            <p class="text-[10px] text-blue-100">Tra Cứu Nhanh Các Môn Thể Thao Lớp 6</p>
          </div>
        </div>
        <button onclick="closeCourtModal()" class="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-sm transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar space-y-4 text-xs">
        
        <!-- Cầu lông -->
        <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-1.5">
          <div class="font-black text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
            <i class="fa-solid fa-feather"></i>
            <span>Sân Cầu Lông Tiêu Chuẩn</span>
          </div>
          <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            <li><strong>Chiều dài sân:</strong> 13,40 m</li>
            <li><strong>Chiều rộng đánh đơn:</strong> 5,18 m | <strong>Đánh đôi:</strong> 6,10 m</li>
            <li><strong>Chiều cao lưới:</strong> 1,55 m ở hai cột biên và 1,524 m ở giữa sân</li>
          </ul>
        </div>

        <!-- Bóng đá 7 người -->
        <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-1.5">
          <div class="font-black text-sm text-blue-600 dark:text-blue-400 flex items-center gap-2">
            <i class="fa-solid fa-futbol"></i>
            <span>Bóng Đá 7 Người (THCS)</span>
          </div>
          <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            <li><strong>Bóng thi đấu:</strong> Bóng số 4 (Chu vi 63.5–66 cm, nặng 350–390 g)</li>
            <li><strong>Số cầu thủ trên sân:</strong> Tối đa 7 cầu thủ (gồm 1 thủ môn); tối thiểu 6 cầu thủ để thi đấu</li>
            <li><strong>Khung thành:</strong> Rộng 6,00 m x Cao 2,10 m</li>
          </ul>
        </div>

        <!-- Bóng rổ -->
        <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-1.5">
          <div class="font-black text-sm text-amber-600 dark:text-amber-400 flex items-center gap-2">
            <i class="fa-solid fa-basketball"></i>
            <span>Sân Bóng Rổ Tiêu Chuẩn (FIBA)</span>
          </div>
          <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            <li><strong>Chiều dài sân:</strong> 28 m | <strong>Chiều rộng sân:</strong> 15 m</li>
            <li><strong>Chiều cao vành rổ:</strong> 3,05 m so với mặt sân (học sinh THCS có thể hạ xuống 2,60–2,80 m)</li>
          </ul>
        </div>

        <!-- Ném bóng & Chạy ngắn -->
        <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-1.5">
          <div class="font-black text-sm text-rose-600 dark:text-rose-400 flex items-center gap-2">
            <i class="fa-solid fa-baseball"></i>
            <span>Ném Bóng 150g &amp; Chạy 60m</span>
          </div>
          <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            <li><strong>Bóng ném:</strong> Khối lượng 150 g</li>
            <li><strong>Đường chạy đà ném bóng:</strong> Rộng 4 m, dài tối thiểu 25 m</li>
            <li><strong>Khu vực bóng rơi:</strong> Góc giới hạn rẻ quạt 29°</li>
            <li><strong>Đường chạy 60m:</strong> Chiều rộng ô chạy 1,22 m, đường chạy phẳng, có khoảng hãm đà an toàn sau đích 20m</li>
          </ul>
        </div>

      </div>
    </div>
  </div>

  <!-- MODAL: HỘI THI TRẠNG NGUYÊN GDTC (60:00) -->
  <div id="trangNguyenModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-3xl bg-white dark:bg-dark-surface rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
      
      <!-- Contest Header -->
      <div class="p-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white text-lg font-black">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="font-black text-sm">Hội Thi Trạng Nguyên Giáo Dục Thể Chất 6</h3>
            <p class="text-[10px] text-amber-100">Thời gian làm bài: 60:00 • 25 Câu Trắc Nghiệm Thể Lực &amp; Kĩ Thuật</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1 rounded-full bg-white/20 font-mono font-black text-sm flex items-center gap-1.5" id="contestTimer">
            <i class="fa-solid fa-stopwatch text-amber-200"></i>
            <span>60:00</span>
          </div>
          <button onclick="closeTrangNguyenModal()" class="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-sm transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Contest Content -->
      <div class="p-5 overflow-y-auto custom-scrollbar space-y-6 text-xs flex-1" id="contestQuizBody">
        <div class="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-amber-950 dark:text-amber-200 flex items-center gap-3">
          <i class="fa-solid fa-medal text-amber-600 text-xl"></i>
          <p class="leading-relaxed font-medium">Chào mừng Vận động viên đến với Hội thi Trạng Nguyên GDTC 6! Hãy vận dụng kiến thức dinh dưỡng thể thao và kĩ thuật động tác để vượt qua 25 thử thách nhé!</p>
        </div>

        <div class="space-y-6" id="contestQuestionsList">
          ${data.trangNguyenQuestions.map((tq, qIdx) => `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3" id="contest-q-card-${qIdx}">
              <div class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm flex items-start gap-2">
                <span class="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-xs shrink-0 font-black">Câu ${qIdx + 1}</span>
                <span class="leading-relaxed">${escapeHtml(tq.q)}</span>
              </div>
              <div class="space-y-2">
                ${tq.options.map((opt, oIdx) => `
                  <label class="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-surface hover:bg-amber-50/50 dark:hover:bg-slate-800 cursor-pointer transition">
                    <input type="radio" name="contestAns_${qIdx}" value="${oIdx}" class="text-amber-500 focus:ring-amber-400">
                    <span class="text-slate-800 dark:text-slate-200">${escapeHtml(opt)}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Contest Result Box -->
        <div id="contestResultArea" class="hidden p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-dark-card dark:to-dark-surface border-2 border-amber-400 text-center space-y-4">
          <div id="contestBadge" class="w-16 h-16 mx-auto rounded-3xl bg-amber-400 text-slate-900 flex items-center justify-center text-3xl shadow-lg ring-4 ring-amber-200">
            <i class="fa-solid fa-crown"></i>
          </div>
          <div>
            <h4 id="contestRank" class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">Đang chấm bài...</h4>
            <p id="contestScore" class="text-sm font-bold text-amber-600 dark:text-amber-400 mt-1">Đạt 0/25 câu (0%)</p>
          </div>
          <p id="contestComment" class="text-xs text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed"></p>
          <div class="flex items-center justify-center gap-3 pt-2">
            <button onclick="resetContest()" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md transition">
              <i class="fa-solid fa-rotate-right mr-1.5"></i>Làm Lại Bài Thi
            </button>
            <button onclick="closeTrangNguyenModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition">
              Đóng Bảng Điểm
            </button>
          </div>
        </div>

      </div>

      <!-- Contest Footer Submit Bar -->
      <div class="p-4 bg-slate-50 dark:bg-dark-surface border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <span class="text-[11px] text-slate-500 font-medium">Hệ thống chấm điểm tự động &amp; Xếp hạng thể thao tức thì</span>
        <button id="btnSubmitContest" onclick="submitContest()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs shadow-md transition flex items-center gap-2">
          <i class="fa-solid fa-paper-plane"></i>
          <span>Nộp Bài Thi Trạng Nguyên</span>
        </button>
      </div>

    </div>
  </div>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // Standard Dark mode toggle
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    }

    // Scroll to first lesson
    function scrollToFirstLesson() {
      const el = document.getElementById('lesson-1');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    // Active lesson selection
    function selectLesson(id) {
      document.querySelectorAll('.lesson-nav-btn').forEach(btn => {
        btn.classList.remove('bg-emerald-50', 'dark:bg-emerald-950/60', 'text-emerald-600', 'font-black');
      });
      const activeBtn = document.getElementById('nav-item-' + id);
      if (activeBtn) {
        activeBtn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'text-emerald-600', 'font-black');
      }
    }

    // Filter lessons in sidebar & page
    function filterLessons(q) {
      q = (q || '').toLowerCase().trim();
      document.querySelectorAll('.lesson-content').forEach(card => {
        const title = (card.querySelector('h3')?.innerText || '').toLowerCase();
        const text = card.innerText.toLowerCase();
        if (!q || title.includes(q) || text.includes(q)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // Progress Tracking
    const completedLessons = new Set(JSON.parse(localStorage.getItem('codehub_gdtc6_completed') || '[]'));
    function updateProgressUI() {
      const total = 25;
      const count = completedLessons.size;
      const pct = Math.round((count / total) * 100);

      const bar = document.getElementById('progressBar');
      const text = document.getElementById('progressText');
      const badge = document.getElementById('percentBadge');

      if (bar) bar.style.width = pct + '%';
      if (text) text.innerText = count + ' / ' + total + ' Bài';
      if (badge) badge.innerText = pct + '%';

      for (let i = 1; i <= total; i++) {
        const icon = document.getElementById('check-icon-' + i);
        const btn = document.getElementById('btnComplete-' + i);
        if (completedLessons.has(i)) {
          if (icon) icon.className = 'fa-solid fa-circle-check text-emerald-500 text-xs shrink-0';
          if (btn) {
            btn.className = 'px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs font-bold text-emerald-600 dark:text-emerald-400 transition flex items-center gap-1.5 self-start sm:self-auto shrink-0';
            btn.innerHTML = '<i class="fa-solid fa-circle-check"></i><span>Đã tập luyện</span>';
          }
        } else {
          if (icon) icon.className = 'fa-regular fa-circle-check text-slate-300 dark:text-slate-700 text-xs shrink-0';
          if (btn) {
            btn.className = 'px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 hover:border-emerald-300 transition flex items-center gap-1.5 self-start sm:self-auto shrink-0';
            btn.innerHTML = '<i class="fa-regular fa-circle-check"></i><span>Đánh dấu đã tập</span>';
          }
        }
      }
    }
    function toggleLessonComplete(id) {
      if (completedLessons.has(id)) {
        completedLessons.delete(id);
      } else {
        completedLessons.add(id);
        confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
      }
      localStorage.setItem('codehub_gdtc6_completed', JSON.stringify(Array.from(completedLessons)));
      updateProgressUI();
    }
    setTimeout(updateProgressUI, 50);

    // Check practice quiz in lesson
    function checkPracticeQuiz(lessonId, correctAns, explanation) {
      const selected = document.querySelector('input[name="lessonQuiz-' + lessonId + '"]:checked');
      const fb = document.getElementById('quiz-feedback-' + lessonId);
      const expBox = document.getElementById('quiz-explanation-' + lessonId);

      if (!selected) {
        fb.classList.remove('hidden');
        fb.className = 'text-xs font-bold text-amber-500';
        fb.innerText = 'Vui lòng chọn 1 đáp án!';
        return;
      }

      fb.classList.remove('hidden');
      expBox.classList.remove('hidden');
      const val = parseInt(selected.value, 10);

      if (val === correctAns) {
        fb.className = 'text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1';
        fb.innerHTML = '<i class="fa-solid fa-circle-check"></i> Chính xác tuyệt vời!';
        expBox.innerHTML = '<strong>Giải thích:</strong> ' + explanation;
        confetti({ particleCount: 20, spread: 50, origin: { y: 0.7 } });
      } else {
        fb.className = 'text-xs font-bold text-rose-500 flex items-center gap-1';
        fb.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Chưa đúng rồi, em hãy thử lại nhé!';
        expBox.innerHTML = '<strong>Gợi ý:</strong> ' + explanation;
      }
    }

    // METRONOME LOGIC (30 Nhịp Thể Dục)
    const exercise30Moves = [
      "TTCB: Đứng nghiêm, hai chân chụm hình chữ V, hai tay khép đùi.",
      "Nhịp 1: Đưa hai tay ra trước song song, lòng bàn tay hướng vào nhau.",
      "Nhịp 2: Đưa hai tay lên cao chếch chữ V, ngửa đầu, mắt nhìn theo tay.",
      "Nhịp 3: Hai tay dang ngang, lòng bàn tay úp.",
      "Nhịp 4: Khuỵu gối, hai tay đưa xuống dưới ra sau, thân hơi ngả trước.",
      "Nhịp 5: Đứng thẳng, hai tay dang ngang rồi đưa lên cao chữ V, ưỡn ngực.",
      "Nhịp 6: Bước chân trái sang ngang rộng bằng vai, hai tay dang ngang lòng bàn tay úp.",
      "Nhịp 7: Xoay thân người sang trái 90 độ, hai tay giữ ngang vai.",
      "Nhịp 8: Về tư thế như nhịp 6 (thân thẳng, hai tay dang ngang).",
      "Nhịp 9: Xoay thân người sang phải 90 độ, hai tay giữ ngang vai.",
      "Nhịp 10: Về tư thế như nhịp 6.",
      "Nhịp 11: Thu chân trái về đứng nghiêm (TTCB).",
      "Nhịp 12: Bước chân trái sang ngang, hai tay dang ngang lòng bàn tay ngửa.",
      "Nhịp 13: Nghiêng thân sang trái, tay phải giơ cao ép sát tai, tay trái chống hông.",
      "Nhịp 14: Về tư thế như nhịp 12.",
      "Nhịp 15: Nghiêng thân sang phải, tay trái giơ cao ép sát tai, tay phải chống hông.",
      "Nhịp 16: Về tư thế như nhịp 12.",
      "Nhịp 17: Thu chân trái về đứng thẳng, hai tay đưa lên cao song song lòng bàn tay hướng nhau.",
      "Nhịp 18: Gập thân sâu về trước, hai chân thẳng, tay chạm mũi chân, cúi đầu.",
      "Nhịp 19: Ngồi xổm kiễng gót, hai tay chống đất phía trước rộng bằng vai.",
      "Nhịp 20: Duỗi thẳng chân trái sang ngang, chân phải ngồi xổm, hai tay chống đất.",
      "Nhịp 21: Thu chân trái về tư thế ngồi xổm chống đất (như nhịp 19).",
      "Nhịp 22: Duỗi thẳng chân phải sang ngang, chân trái ngồi xổm, hai tay chống đất.",
      "Nhịp 23: Thu chân phải về tư thế ngồi xổm chống đất (như nhịp 19).",
      "Nhịp 24: Bật đẩy người đứng thẳng dậy, hai tay dang ngang lòng bàn tay úp.",
      "Nhịp 25: Đưa hai tay ra trước song song, lòng bàn tay hướng vào nhau.",
      "Nhịp 26: Đưa hai tay lên cao chếch chữ V, ngửa đầu ưỡn ngực hít sâu.",
      "Nhịp 27: Khuỵu gối hạ thấp trọng tâm, hai tay đưa xuống dưới ra sau (như nhịp 4).",
      "Nhịp 28: Đứng thẳng dậy, hai tay dang ngang lòng bàn tay ngửa.",
      "Nhịp 29: Bật nhảy nhẹ khép chân, hai tay đưa lên cao vỗ vào nhau một tiếng.",
      "Nhịp 30: Hạ tay xuống áp sát đùi, trở về tư thế đứng nghiêm (TTCB) hoàn thành xuất sắc!"
    ];

    let metroInterval = null;
    let metroCurrentBeat = 0;
    let metroSpeedMs = 1500;

    function openMetronomeModal() {
      document.getElementById('metronomeModal').classList.remove('hidden');
    }
    function closeMetronomeModal() {
      stopMetronome();
      document.getElementById('metronomeModal').classList.add('hidden');
    }
    function playBeepSound(freq = 800) {
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.12);
      } catch (e) {}
    }
    function setMetroSpeed(ms) {
      metroSpeedMs = ms;
      ['spdSlow', 'spdNormal', 'spdFast'].forEach(id => {
        document.getElementById(id).className = 'px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300';
      });
      if (ms === 1500) document.getElementById('spdSlow').className = 'px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold';
      if (ms === 1200) document.getElementById('spdNormal').className = 'px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold';
      if (ms === 900) document.getElementById('spdFast').className = 'px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold';
      if (metroInterval) {
        stopMetronome();
        startMetronome();
      }
    }
    function startMetronome() {
      const btn = document.getElementById('btnStartMetro');
      if (metroInterval) {
        stopMetronome();
        return;
      }
      btn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>Tạm Dừng</span>';
      btn.className = 'px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-black text-xs shadow-lg transition flex items-center gap-2';

      metroInterval = setInterval(() => {
        metroCurrentBeat++;
        if (metroCurrentBeat > 30) {
          stopMetronome();
          confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
          return;
        }
        playBeepSound(metroCurrentBeat === 29 ? 1200 : (metroCurrentBeat === 30 ? 1000 : 700));
        document.getElementById('metronomeBeatNumber').innerText = 'Nhịp ' + metroCurrentBeat;
        document.getElementById('metronomeBeatDesc').innerText = exercise30Moves[metroCurrentBeat];
      }, metroSpeedMs);
    }
    function stopMetronome() {
      if (metroInterval) {
        clearInterval(metroInterval);
        metroInterval = null;
      }
      const btn = document.getElementById('btnStartMetro');
      if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-play"></i> <span>Tiếp Tục Đếm</span>';
        btn.className = 'px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs shadow-lg shadow-emerald-500/30 transition flex items-center gap-2';
      }
    }
    function resetMetronome() {
      stopMetronome();
      metroCurrentBeat = 0;
      document.getElementById('metronomeBeatNumber').innerText = 'TTCB';
      document.getElementById('metronomeBeatDesc').innerText = exercise30Moves[0];
      const btn = document.getElementById('btnStartMetro');
      if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-play"></i> <span>Bắt Đầu Đếm (1 ➔ 30)</span>';
      }
    }

    // COURT MODAL
    function openCourtModal() {
      document.getElementById('courtModal').classList.remove('hidden');
    }
    function closeCourtModal() {
      document.getElementById('courtModal').classList.add('hidden');
    }

    // TRẠNG NGUYÊN CONTEST LOGIC
    let contestTimerInterval = null;
    let contestSecondsLeft = 60 * 60; // 60 minutes
    const contestTotal = ${data.trangNguyenQuestions.length};
    const contestAnsKeys = ${JSON.stringify(data.trangNguyenQuestions.map(q => q.ans))};

    function openTrangNguyenModal() {
      document.getElementById('trangNguyenModal').classList.remove('hidden');
      if (!contestTimerInterval) {
        startContestTimer();
      }
    }
    function closeTrangNguyenModal() {
      document.getElementById('trangNguyenModal').classList.add('hidden');
    }
    function startContestTimer() {
      const timerEl = document.getElementById('contestTimer');
      contestTimerInterval = setInterval(() => {
        if (contestSecondsLeft <= 0) {
          clearInterval(contestTimerInterval);
          alert('Đã hết 60 phút làm bài! Hệ thống sẽ tự động nộp bài thi của em.');
          submitContest();
          return;
        }
        contestSecondsLeft--;
        const m = Math.floor(contestSecondsLeft / 60);
        const s = contestSecondsLeft % 60;
        if (timerEl) {
          timerEl.innerHTML = '<i class="fa-solid fa-stopwatch text-amber-200"></i> <span>' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + '</span>';
        }
      }, 1000);
    }

    function submitContest() {
      let score = 0;
      for (let i = 0; i < contestTotal; i++) {
        const sel = document.querySelector('input[name="contestAns_' + i + '"]:checked');
        const card = document.getElementById('contest-q-card-' + i);
        if (sel) {
          const val = parseInt(sel.value, 10);
          if (val === contestAnsKeys[i]) {
            score++;
            if (card) {
              card.classList.remove('border-slate-200', 'dark:border-slate-800');
              card.classList.add('border-emerald-400', 'bg-emerald-50/20');
            }
          } else {
            if (card) {
              card.classList.remove('border-slate-200', 'dark:border-slate-800');
              card.classList.add('border-rose-400', 'bg-rose-50/20');
            }
          }
        }
      }

      clearInterval(contestTimerInterval);

      // Result calculation
      const resArea = document.getElementById('contestResultArea');
      resArea.classList.remove('hidden');
      const scoreEl = document.getElementById('contestScore');
      const rankEl = document.getElementById('contestRank');
      const badgeEl = document.getElementById('contestBadge');
      const commentEl = document.getElementById('contestComment');

      const pct = Math.round((score / contestTotal) * 100);
      scoreEl.innerText = 'Đạt ' + score + '/' + contestTotal + ' câu (' + pct + '%)';

      if (score >= 23) {
        rankEl.innerText = 'Trạng Nguyên Giáo Dục Thể Chất 6 (Kiện Tướng Đất Việt)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-amber-400 text-slate-900 flex items-center justify-center text-3xl shadow-lg ring-4 ring-amber-200';
        badgeEl.innerHTML = '<i class="fa-solid fa-crown text-amber-900"></i>';
        commentEl.innerText = 'Xuất sắc tuyệt đỉnh! Em đã nắm vững toàn diện kĩ thuật điền kinh, bài thể dục 30 nhịp, cầu lông, bóng đá, bóng rổ và chế độ dinh dưỡng!';
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      } else if (score >= 19) {
        rankEl.innerText = 'Bảng Nhãn Thể Thao (Vận Động Viên Toàn Năng)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-emerald-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-emerald-200';
        badgeEl.innerHTML = '<i class="fa-solid fa-medal text-white"></i>';
        commentEl.innerText = 'Rất đáng khen ngợi! Em hiểu bài sâu sắc, nhớ rõ luật thi đấu và quy tắc an toàn các môn thể thao!';
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } else if (score >= 14) {
        rankEl.innerText = 'Thám Hoa Thể Thao (Khỏe Mạnh Dẻo Dai)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-teal-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-teal-200';
        badgeEl.innerHTML = '<i class="fa-solid fa-award text-white"></i>';
        commentEl.innerText = 'Làm tốt lắm! Em đã hoàn thành hầu hết các câu hỏi kĩ thuật cốt lõi của chương trình GDTC 6!';
      } else {
        rankEl.innerText = 'Sĩ Tử Thể Thao (Chăm Chỉ Rèn Luyện)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-slate-400 text-white flex items-center justify-center text-3xl shadow-lg';
        badgeEl.innerHTML = '<i class="fa-solid fa-person-running text-white"></i>';
        commentEl.innerText = 'Em hãy ôn lại bài học về 30 nhịp thể dục và kĩ thuật ném bóng, chạy 60m rồi thử sức lại nhé. Cố lên!';
      }

      resArea.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('btnSubmitContest').classList.add('hidden');
    }

    function resetContest() {
      document.querySelectorAll('#contestQuestionsList input[type="radio"]').forEach(r => r.checked = false);
      document.querySelectorAll('#contestQuestionsList > div').forEach(c => {
        c.className = 'p-4 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3';
      });
      document.getElementById('contestResultArea').classList.add('hidden');
      document.getElementById('btnSubmitContest').classList.remove('hidden');
      contestSecondsLeft = 60 * 60;
      clearInterval(contestTimerInterval);
      startContestTimer();
    }
  </script>
</body>
</html>`;

const outPath1 = path.join(__dirname, 'cs-learning-platform', 'courses', 'gdtc_6.html');
const outPath2 = path.join(__dirname, 'cs-learning-platform', 'courses', 'pe_6.html');

fs.writeFileSync(outPath1, html, 'utf8');
console.log(`Successfully generated ${outPath1} (${html.length} bytes)`);

fs.writeFileSync(outPath2, html, 'utf8');
console.log(`Successfully generated alias ${outPath2}`);
