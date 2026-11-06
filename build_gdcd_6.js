const fs = require('fs');
const path = require('path');
const data = require('./gdcd_6_data.js');

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
      blocks.push(`<h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-5 mb-2.5 flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block shrink-0"></span>${title}</h4>`);
      continue;
    }
    if (trimmed.startsWith('#### ')) {
      flushPara();
      flushList();
      const title = formatInline(trimmed.replace(/^####\s+/, ''));
      blocks.push(`<h5 class="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-400 mt-3.5 mb-1.5">${title}</h5>`);
      continue;
    }

    if (trimmed.startsWith('> ')) {
      flushPara();
      flushList();
      const quote = formatInline(trimmed.replace(/^>\s+/, ''));
      blocks.push(`<blockquote class="p-3 my-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border-l-4 border-blue-500 text-xs sm:text-sm text-blue-900 dark:text-blue-200 leading-relaxed italic">${quote}</blockquote>`);
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
      blocks.push(`<h5 class="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-400 mt-3.5 mb-1.5">${content}</h5>`);
      continue;
    }

    currentPara.push(formatInline(trimmed));
  }

  flushPara();
  flushList();
  flushTable();

  return blocks.join('\n');
}

console.log("Generating Giáo Dục Công Dân 6 HTML page...");

let html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Giáo Dục Công Dân Lớp 6 (GDPT 2018: 12 Bài Học Đạo Đức &amp; Pháp Luật • Hotline 111-115 • Trạng Nguyên 60:00) | CodeHub</title>
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
            civic: {
              blue: '#2563EB',
              indigo: '#4F46E5',
              emerald: '#059669',
              amber: '#D97706',
              rose: '#E11D48',
              teal: '#0D9488'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

  <meta name="codehub-activity-name" content="Khóa Học Giáo Dục Công Dân Lớp 6">
  <meta name="description" content="Chương trình GDCD Lớp 6 GDPT 2018 (SGK Kết nối tri thức với cuộc sống): Trọn vẹn 12 Bài học Đạo đức & Pháp luật chuẩn mực 6 phần; Giả lập Hotline cứu hộ 111-115 và Hội thi Trạng Nguyên 60 phút.">

  <style>
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.05); }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(37,99,235,0.3); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(37,99,235,0.6); }
    .lesson-content { scroll-margin-top: 85px; }
    .phone-btn:active { transform: scale(0.92); }
  </style>
  <script>
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</head>
<body class="bg-slate-100 dark:bg-dark-bg text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen flex flex-col selection:bg-blue-500 selection:text-white">

  <!-- TOP NAVBAR -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-dark-surface/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 p-2 rounded-xl text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Trở về Trang Chủ CodeHub">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 font-black text-lg">
            <i class="fa-solid fa-scale-balanced"></i>
          </div>
          <span class="font-black text-lg tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hidden sm:inline">
            CodeHub
          </span>
        </a>
        <span class="text-xs px-2.5 py-1 rounded-full font-bold bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          GDCD 6
        </span>
      </div>

      <!-- Quick Search Bar -->
      <div class="flex-1 max-w-md hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
          <input type="text" id="lessonSearchInput" onkeyup="filterLessons(this.value)" placeholder="Tìm bài học (vd: Tự lập, 111, Quyền trẻ em, Tiết kiệm...)"
            class="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
        </div>
      </div>

      <!-- Actions: Tools & DarkMode -->
      <div class="flex items-center gap-2 sm:gap-3">
        <button onclick="openHotlineModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 font-bold text-xs border border-rose-200 dark:border-rose-900/50 transition" title="Mô phỏng Bàn phím số khẩn cấp 111 - 115">
          <i class="fa-solid fa-phone-volume text-rose-500"></i>
          <span class="hidden sm:inline">Hotline 111-115</span>
        </button>

        <button onclick="openHandbookModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs border border-blue-200 dark:border-blue-900/50 transition" title="Tra cứu Sổ tay Phẩm chất &amp; Pháp luật">
          <i class="fa-solid fa-book-bookmark text-blue-500"></i>
          <span class="hidden sm:inline">Sổ Tay GDCD</span>
        </button>

        <button onclick="openTrangNguyenModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs shadow-md shadow-orange-500/20 hover:opacity-95 transition" title="Tham gia Hội thi Trạng Nguyên 60 phút">
          <i class="fa-solid fa-award"></i>
          <span class="hidden sm:inline">Trạng Nguyên (60:00)</span>
        </button>

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
          <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Tiến Độ Học Tập</span>
          <span id="progressText" class="text-xs font-black text-blue-600 dark:text-blue-400">0 / 12 Bài</span>
        </div>
        <div class="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div id="progressBar" class="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 rounded-full" style="width: 0%"></div>
        </div>
        <div class="flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <span>Khởi đầu</span>
          <span id="percentBadge">0%</span>
          <span>Hoàn thành</span>
        </div>
      </div>

      <!-- Table of Contents -->
      <nav class="p-4 rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
          <h2 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-list-check text-blue-600"></i>
            <span>12 Bài Học SGK</span>
          </h2>
          <span class="text-[11px] px-2 py-0.5 rounded-full font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            KNTT
          </span>
        </div>

        <div id="sidebarLessonList" class="space-y-4 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 custom-scrollbar text-xs">
          
          <!-- Phần 1: Giáo Dục Đạo Đức -->
          <div class="space-y-1">
            <div class="px-2 py-1 font-black text-[11px] text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center justify-between">
              <span>Phần I: Giáo Dục Đạo Đức</span>
              <span class="text-[10px] bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-1.5 py-0.2 rounded font-bold">8 bài</span>
            </div>
            ${data.lessons.slice(0, 8).map(l => `
              <a href="#lesson-${l.id}" onclick="selectLesson(${l.id})" id="nav-item-${l.id}"
                class="lesson-nav-btn block p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium flex items-center justify-between group">
                <span class="truncate">${escapeHtml(l.title)}</span>
                <i id="check-icon-${l.id}" class="fa-regular fa-circle-check text-slate-300 dark:text-slate-700 text-xs shrink-0 group-hover:text-blue-500"></i>
              </a>
            `).join('')}
          </div>

          <!-- Phần 2: Kĩ Năng Sống & Pháp Luật -->
          <div class="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div class="px-2 py-1 font-black text-[11px] text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center justify-between">
              <span>Phần II: Kĩ Năng &amp; Pháp Luật</span>
              <span class="text-[10px] bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 px-1.5 py-0.2 rounded font-bold">4 bài</span>
            </div>
            ${data.lessons.slice(8).map(l => `
              <a href="#lesson-${l.id}" onclick="selectLesson(${l.id})" id="nav-item-${l.id}"
                class="lesson-nav-btn block p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium flex items-center justify-between group">
                <span class="truncate">${escapeHtml(l.title)}</span>
                <i id="check-icon-${l.id}" class="fa-regular fa-circle-check text-slate-300 dark:text-slate-700 text-xs shrink-0 group-hover:text-indigo-500"></i>
              </a>
            `).join('')}
          </div>

        </div>

        <!-- Banner thi thử Trạng Nguyên -->
        <div class="pt-2">
          <div onclick="openTrangNguyenModal()" class="cursor-pointer p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center shadow-md shadow-blue-500/20 hover:brightness-105 transition">
            <div class="text-[10px] uppercase font-bold tracking-widest text-blue-200">Đấu Trường Kiến Thức</div>
            <div class="font-black text-xs flex items-center justify-center gap-1.5 mt-0.5">
              <i class="fa-solid fa-trophy text-amber-300"></i>
              <span>Trạng Nguyên GDCD 6</span>
            </div>
          </div>
        </div>

      </nav>
    </aside>

    <!-- MAIN LESSON CONTENT AREA -->
    <main class="flex-1 min-w-0 space-y-8">
      
      <!-- HERO HEADER -->
      <section class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 text-white shadow-xl shadow-blue-600/10 relative overflow-hidden">
        <div class="relative z-10 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-bold text-white">
            <i class="fa-solid fa-graduation-cap"></i>
            <span>GDPT 2018 • Bộ Sách Kết Nối Tri Thức</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
            Khóa Học Giáo Dục Công Dân Lớp 6
          </h1>
          <p class="text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
            Học tập trọn vẹn 12 bài học đạo đức, kỹ năng sinh tồn và kiến thức pháp luật nền tảng. Rèn luyện phẩm chất tốt đẹp, tự lập, yêu thương con người và tự hào trở thành người công dân văn minh của nước CHXHCN Việt Nam.
          </p>
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <button onclick="scrollToFirstLesson()" class="px-4 py-2 rounded-xl bg-white text-blue-700 font-bold text-xs shadow-md hover:bg-blue-50 transition flex items-center gap-2">
              <i class="fa-solid fa-play text-blue-600"></i>
              <span>Bắt Đầu Học Ngay</span>
            </button>
            <button onclick="openHotlineModal()" class="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs backdrop-blur transition flex items-center gap-2">
              <i class="fa-solid fa-phone-flip text-rose-300"></i>
              <span>Tra Cứu Hotline 111 - 115</span>
            </button>
          </div>
        </div>
        <div class="absolute -right-6 -bottom-6 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      </section>

      <!-- 12 LESSONS LIST -->
      <div class="space-y-10" id="allLessonsContainer">
        ${data.lessons.map(l => `
          <article id="lesson-${l.id}" class="lesson-content p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition hover:shadow-md">
            
            <!-- Lesson Header Bar -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-black px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    Bài ${l.id} / 12
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
                class="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 hover:border-blue-300 transition flex items-center gap-1.5 self-start sm:self-auto shrink-0">
                <i class="fa-regular fa-circle-check"></i>
                <span>Đánh dấu đã học</span>
              </button>
            </div>

            <!-- 1. Mục tiêu bài học -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-bullseye text-blue-600"></i>
                <span>1. Mục tiêu cần đạt</span>
              </h4>
              <div class="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <ul class="list-disc pl-5 space-y-1">
                  ${l.objectives.map(obj => `<li>${escapeHtml(obj)}</li>`).join('')}
                </ul>
              </div>
            </div>

            <!-- 2. Khám phá tri thức -->
            <div class="space-y-3">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-compass text-indigo-600"></i>
                <span>2. Khám phá tri thức bài học</span>
              </h4>
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-4">
                <div>${renderMarkdown(l.explore.concept)}</div>
                <div>${renderMarkdown(l.explore.meaning)}</div>
                <div>${renderMarkdown(l.explore.action)}</div>
              </div>
            </div>

            <!-- 3. Ghi nhớ cốt lõi -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-lightbulb text-amber-500"></i>
                <span>3. Ghi nhớ cốt lõi</span>
              </h4>
              <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed font-bold">
                ${escapeHtml(l.memorize)}
              </div>
            </div>

            <!-- 4. Tình huống thực tế -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-comments text-purple-600"></i>
                <span>4. Tình huống thực tế &amp; Lời khuyên xử lý</span>
              </h4>
              <div class="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40 space-y-2.5 text-xs">
                <div class="flex items-start gap-2">
                  <span class="px-2 py-0.5 rounded font-black bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200 shrink-0">Tình huống</span>
                  <p class="text-slate-800 dark:text-slate-200 leading-relaxed">${escapeHtml(l.situation.scenario)}</p>
                </div>
                <div class="flex items-start gap-2 pt-2 border-t border-purple-200/60 dark:border-purple-900/40">
                  <span class="px-2 py-0.5 rounded font-black bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 shrink-0">Lời khuyên</span>
                  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">${escapeHtml(l.situation.solution)}</p>
                </div>
              </div>
            </div>

            <!-- 5. Luyện tập tương tác -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-pen-to-square text-rose-500"></i>
                <span>5. Câu hỏi luyện tập tương tác</span>
              </h4>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3">
                <p class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">${escapeHtml(l.practiceQuiz.question)}</p>
                <div class="space-y-2" id="quiz-opt-group-${l.id}">
                  ${l.practiceQuiz.options.map((opt, oIdx) => `
                    <label class="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-surface hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition text-xs">
                      <input type="radio" name="lessonQuiz-${l.id}" value="${oIdx}" class="text-blue-600 focus:ring-blue-500">
                      <span class="text-slate-800 dark:text-slate-200">${escapeHtml(opt)}</span>
                    </label>
                  `).join('')}
                </div>
                <div class="flex items-center gap-3 pt-2">
                  <button onclick="checkPracticeQuiz(${l.id}, ${l.practiceQuiz.ans}, '${escapeHtml(l.practiceQuiz.exp).replace(/'/g, "\\'")}')" class="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition">
                    Kiểm tra đáp án
                  </button>
                  <span id="quiz-feedback-${l.id}" class="text-xs font-bold hidden"></span>
                </div>
                <div id="quiz-explanation-${l.id}" class="hidden p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-200 leading-relaxed"></div>
              </div>
            </div>

            <!-- 6. Vận dụng thực tế -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-seedling text-emerald-600"></i>
                <span>6. Vận dụng đời sống &amp; Rèn luyện</span>
              </h4>
              <div class="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-3">
                <i class="fa-solid fa-flag-checkered text-emerald-600 mt-0.5"></i>
                <div>
                  <p class="font-bold text-emerald-900 dark:text-emerald-300">Nhiệm vụ rèn luyện cá nhân:</p>
                  <p class="mt-1">${escapeHtml(l.application)}</p>
                </div>
              </div>
            </div>

          </article>
        `).join('')}
      </div>

    </main>
  </div>

  <!-- MODAL: HOTLINE SIMULATOR (111 - 115) -->
  <div id="hotlineModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-md bg-white dark:bg-dark-surface rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
      <div class="p-4 bg-gradient-to-r from-rose-600 to-red-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-phone-volume text-lg"></i>
          <div>
            <h3 class="font-black text-sm">Bộ Bàn Phím Cứu Hộ Khẩn Cấp</h3>
            <p class="text-[10px] text-rose-100">Hotline Quốc Gia 111 - 115</p>
          </div>
        </div>
        <button onclick="closeHotlineModal()" class="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-sm transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 space-y-4">
        <!-- Display Dialed Number -->
        <div class="p-4 rounded-2xl bg-slate-900 text-white text-center">
          <div class="text-[10px] text-slate-400 uppercase tracking-widest">Số điện thoại đang bấm</div>
          <div id="dialedNumber" class="text-3xl font-mono font-black text-rose-400 tracking-wider h-10 flex items-center justify-center">---</div>
          <div id="hotlineTargetName" class="text-xs font-bold text-slate-300 mt-1 min-h-[1.25rem]">Bấm số để tra cứu chức năng</div>
        </div>

        <!-- Preset Hotline Pills -->
        <div class="grid grid-cols-5 gap-1.5 text-center">
          <button onclick="dialHotline('111')" class="py-1.5 px-1 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 hover:bg-rose-50 hover:border-rose-400 font-black text-xs text-rose-600 transition">111</button>
          <button onclick="dialHotline('112')" class="py-1.5 px-1 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 hover:bg-rose-50 hover:border-rose-400 font-black text-xs text-blue-600 transition">112</button>
          <button onclick="dialHotline('113')" class="py-1.5 px-1 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 hover:bg-rose-50 hover:border-rose-400 font-black text-xs text-indigo-600 transition">113</button>
          <button onclick="dialHotline('114')" class="py-1.5 px-1 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 hover:bg-rose-50 hover:border-rose-400 font-black text-xs text-amber-600 transition">114</button>
          <button onclick="dialHotline('115')" class="py-1.5 px-1 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 hover:bg-rose-50 hover:border-rose-400 font-black text-xs text-emerald-600 transition">115</button>
        </div>

        <!-- Phone Keypad -->
        <div class="grid grid-cols-3 gap-2.5 max-w-[240px] mx-auto">
          ${[1,2,3,4,5,6,7,8,9,'*',0,'#'].map(k => `
            <button onclick="pressKey('${k}')" class="phone-btn h-12 rounded-2xl bg-slate-100 dark:bg-dark-card hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-slate-800 dark:text-white text-base shadow-sm border border-slate-200 dark:border-slate-700 transition flex items-center justify-center">
              ${k}
            </button>
          `).join('')}
        </div>

        <!-- Dial Actions -->
        <div class="flex items-center justify-center gap-3 pt-1">
          <button onclick="callHotline()" class="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs shadow-lg shadow-emerald-500/30 transition flex items-center gap-2">
            <i class="fa-solid fa-phone"></i>
            <span>Gọi Cứu Hộ</span>
          </button>
          <button onclick="clearDial()" class="px-4 py-2.5 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-700 dark:text-slate-200 font-bold text-xs transition">
            Xóa số
          </button>
        </div>

        <!-- Hotline Description Box -->
        <div id="hotlineDetailBox" class="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-950 dark:text-rose-200 leading-relaxed">
          <div class="font-bold flex items-center gap-1.5 mb-1">
            <i class="fa-solid fa-circle-info text-rose-500"></i>
            <span>Hướng dẫn gọi cứu hộ khẩn cấp:</span>
          </div>
          <p>Tất cả các số 111, 112, 113, 114, 115 đều hoàn toàn **MIỄN PHÍ CƯỚC** và hoạt động 24/7 trên toàn quốc kể cả khi điện thoại không còn tiền tài khoản.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: SỔ TAY GDCD 6 -->
  <div id="handbookModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-2xl bg-white dark:bg-dark-surface rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      <div class="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-book-bookmark text-lg"></i>
          <div>
            <h3 class="font-black text-sm">Sổ Tay Phẩm Chất &amp; Pháp Luật GDCD 6</h3>
            <p class="text-[10px] text-blue-100">Tra Cứu Nhanh 12 Giá Trị Cốt Lõi &amp; 4 Nhóm Quyền Trẻ Em</p>
          </div>
        </div>
        <button onclick="closeHandbookModal()" class="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-sm transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar space-y-4 text-xs">
        
        <!-- 4 Nhóm Quyền Trẻ Em Card -->
        <div class="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 space-y-2">
          <h4 class="font-black text-indigo-900 dark:text-indigo-200 text-sm flex items-center gap-2">
            <i class="fa-solid fa-children text-indigo-600"></i>
            <span>Bốn Nhóm Quyền Cơ Bản Của Trẻ Em (Dưới 16 Tuổi)</span>
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div class="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-indigo-100 dark:border-indigo-900/40">
              <span class="font-bold text-rose-600 block mb-0.5">1. Quyền được Sống còn</span>
              <p class="text-slate-600 dark:text-slate-300">Được sinh ra, khai sinh, có họ tên, có quốc tịch; chăm sóc y tế, dinh dưỡng và chỗ ở an toàn.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-indigo-100 dark:border-indigo-900/40">
              <span class="font-bold text-amber-600 block mb-0.5">2. Quyền được Bảo vệ</span>
              <p class="text-slate-600 dark:text-slate-300">Được bảo vệ khỏi bạo lực học đường, xâm hại thể xác, bóc lột sức lao động, bị bỏ rơi.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-indigo-100 dark:border-indigo-900/40">
              <span class="font-bold text-emerald-600 block mb-0.5">3. Quyền được Phát triển</span>
              <p class="text-slate-600 dark:text-slate-300">Được học tập, giáo dục; vui chơi giải trí, thể thao và bồi dưỡng năng khiếu nghệ thuật.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-indigo-100 dark:border-indigo-900/40">
              <span class="font-bold text-blue-600 block mb-0.5">4. Quyền được Tham gia</span>
              <p class="text-slate-600 dark:text-slate-300">Bày tỏ ý kiến, nguyện vọng; tiếp cận thông tin phù hợp và tham gia hoạt động Đoàn - Đội.</p>
            </div>
          </div>
        </div>

        <!-- 5 Bổn phận trẻ em -->
        <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-1.5">
          <h4 class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-2">
            <i class="fa-solid fa-star text-amber-500"></i>
            <span>Năm Bổn Phận Thiêng Liêng Của Trẻ Em</span>
          </h4>
          <ol class="list-decimal pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            <li>Kính trọng, lễ phép, vâng lời và hiếu thảo với ông bà, cha mẹ.</li>
            <li>Tôn trọng thầy cô giáo, đoàn kết yêu thương và giúp đỡ bạn bè.</li>
            <li>Chăm chỉ học tập, rèn luyện thân thể, giữ gìn vệ sinh và bảo vệ môi trường.</li>
            <li>Chấp hành nghiêm chỉnh nội quy nhà trường và pháp luật nhà nước.</li>
            <li>Yêu quê hương đất nước, có tinh thần tương thân tương ái vì cộng đồng.</li>
          </ol>
        </div>

        <!-- Danh mục 12 phẩm chất cốt lõi -->
        <div class="space-y-2">
          <h4 class="font-black text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-layer-group text-blue-600"></i>
            <span>12 Giá Trị Phẩm Chất &amp; Năng Lực Bài Học</span>
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            ${data.lessons.map(l => `
              <div class="p-2 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold text-[10px] shrink-0">${l.id}</span>
                <span class="font-medium text-slate-800 dark:text-slate-200 truncate">${escapeHtml(l.title.replace(/^Bài \d+\.\s*/, ''))}</span>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- MODAL: HỘI THI TRẠNG NGUYÊN GDCD (60:00) -->
  <div id="trangNguyenModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-3xl bg-white dark:bg-dark-surface rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
      
      <!-- Contest Header -->
      <div class="p-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white text-lg font-black">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="font-black text-sm">Hội Thi Trạng Nguyên Giáo Dục Công Dân 6</h3>
            <p class="text-[10px] text-amber-100">Thời gian làm bài: 60:00 • 25 Câu Trắc Nghiệm Đạo Đức &amp; Pháp Luật</p>
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
          <i class="fa-solid fa-scroll text-amber-600 text-xl"></i>
          <p class="leading-relaxed font-medium">Chào mừng Sĩ tử đến với Hội thi Trạng Nguyên GDCD 6! Hãy vận dụng phẩm chất đạo đức trong sáng và sự hiểu biết pháp luật để hoàn thành 25 câu hỏi thử thách nhé!</p>
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
        <span class="text-[11px] text-slate-500 font-medium">Hệ thống chấm điểm tự động &amp; Xếp hạng tức thì</span>
        <button id="btnSubmitContest" onclick="submitContest()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs shadow-md transition flex items-center gap-2">
          <i class="fa-solid fa-paper-plane"></i>
          <span>Nộp Bài Thi Trạng Nguyên</span>
        </button>
      </div>

    </div>
  </div>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // Dark mode handler
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
        btn.classList.remove('bg-blue-50', 'dark:bg-blue-950/60', 'text-blue-600', 'font-black');
      });
      const activeBtn = document.getElementById('nav-item-' + id);
      if (activeBtn) {
        activeBtn.classList.add('bg-blue-50', 'dark:bg-blue-950/60', 'text-blue-600', 'font-black');
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
    const completedLessons = new Set(JSON.parse(localStorage.getItem('codehub_gdcd6_completed') || '[]'));
    function updateProgressUI() {
      const total = 12;
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
            btn.innerHTML = '<i class="fa-solid fa-circle-check"></i><span>Đã hoàn thành</span>';
          }
        } else {
          if (icon) icon.className = 'fa-regular fa-circle-check text-slate-300 dark:text-slate-700 text-xs shrink-0';
          if (btn) {
            btn.className = 'px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 hover:border-blue-300 transition flex items-center gap-1.5 self-start sm:self-auto shrink-0';
            btn.innerHTML = '<i class="fa-regular fa-circle-check"></i><span>Đánh dấu đã học</span>';
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
      localStorage.setItem('codehub_gdcd6_completed', JSON.stringify(Array.from(completedLessons)));
      updateProgressUI();
    }
    initProgress();
    function initProgress() {
      setTimeout(updateProgressUI, 50);
    }

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

    // HOTLINE MODAL & DIALER LOGIC
    let currentDial = '';
    const hotlineData = {
      '111': { name: 'Tổng đài Quốc gia Bảo vệ Trẻ em', desc: 'Miễn cước 24/7. Tiếp nhận thông tin, tư vấn và can thiệp khẩn cấp bảo vệ quyền trẻ em, chống bạo lực, xâm hại trẻ em.' },
      '112': { name: 'Tổng đài Cứu nạn, Cứu hộ Quốc gia', desc: 'Yêu cầu trợ giúp tìm kiếm cứu nạn khẩn cấp do thiên tai bão lũ, sạt lở, tai nạn tàu thuyền trên biển và toàn quốc.' },
      '113': { name: 'Tổng đài Cảnh sát / Công an', desc: 'Can thiệp nhanh các vụ việc liên quan đến tội phạm, trộm cắp, cướp giật, bạo loạn, tai nạn giao thông nghiêm trọng.' },
      '114': { name: 'Lực lượng Phòng cháy & Chữa cháy', desc: 'Báo cháy nổ, cứu hộ người bị mắc kẹt trong đám cháy, đổ sập nhà xưởng, sập hầm lò công trình.' },
      '115': { name: 'Cấp cứu Y tế Toàn quốc', desc: 'Gọi xe cứu thương khẩn cấp đưa người bị tai nạn, đột quỵ, ngộ độc đến bệnh viện gần nhất kịp thời.' }
    };

    function openHotlineModal() {
      document.getElementById('hotlineModal').classList.remove('hidden');
    }
    function closeHotlineModal() {
      document.getElementById('hotlineModal').classList.add('hidden');
    }
    function playBeep(freq = 600) {
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      } catch (e) {}
    }
    function pressKey(k) {
      playBeep(500 + (typeof k === 'number' ? k * 40 : 800));
      if (currentDial.length < 4) {
        currentDial += k;
      }
      updateDialDisplay();
    }
    function clearDial() {
      currentDial = '';
      updateDialDisplay();
    }
    function dialHotline(num) {
      currentDial = num;
      playBeep(700);
      updateDialDisplay();
    }
    function updateDialDisplay() {
      const disp = document.getElementById('dialedNumber');
      const nameEl = document.getElementById('hotlineTargetName');
      const descEl = document.getElementById('hotlineDetailBox');

      disp.innerText = currentDial || '---';

      if (hotlineData[currentDial]) {
        const item = hotlineData[currentDial];
        nameEl.innerText = item.name;
        descEl.innerHTML = '<div class="font-bold text-rose-600 dark:text-rose-400 mb-1 flex items-center gap-1.5"><i class="fa-solid fa-phone-flip"></i> ' + item.name + ' (' + currentDial + ')</div><p>' + item.desc + '</p>';
      } else {
        nameEl.innerText = currentDial ? 'Đang bấm số...' : 'Bấm số để tra cứu chức năng';
        descEl.innerHTML = '<div class="font-bold flex items-center gap-1.5 mb-1"><i class="fa-solid fa-circle-info text-rose-500"></i><span>Hướng dẫn gọi cứu hộ khẩn cấp:</span></div><p>Các đầu số 111, 112, 113, 114, 115 đều hoàn toàn **MIỄN PHÍ** và gọi được ngay cả khi máy không có tiền hoặc không có SIM.</p>';
      }
    }
    function callHotline() {
      if (!currentDial) {
        alert('Vui lòng bấm số khẩn cấp (111, 112, 113, 114 hoặc 115)!');
        return;
      }
      if (hotlineData[currentDial]) {
        playBeep(900);
        const alertMsg = '☎️ ĐANG KẾT NỐI TỚI: ' + hotlineData[currentDial].name + ' (' + currentDial + ')\\n\\n' + hotlineData[currentDial].desc + '\\n\\n(Lưu ý: Luôn bình tĩnh, nói rõ họ tên, địa chỉ chính xác và tình trạng sự việc khi gọi thật nhé!)';
        alert(alertMsg);
      } else {
        alert('Số ' + currentDial + ' chưa thuộc danh bạ cứu hộ khẩn cấp 111-115. Vui lòng kiểm tra lại!');
      }
    }

    // HANDBOOK MODAL
    function openHandbookModal() {
      document.getElementById('handbookModal').classList.remove('hidden');
    }
    function closeHandbookModal() {
      document.getElementById('handbookModal').classList.add('hidden');
    }

    // TRẠNG NGUYÊN CONTEST LOGIC
    let contestTimerInterval = null;
    let contestSecondsLeft = 60 * 60; // 60 minutes
    const contestTotal = ${data.trangNguyenQuestions.length};
    const contestAnsKeys = ${JSON.stringify(data.trangNguyenQuestions.map(q => q.ans))};
    const contestExpKeys = ${JSON.stringify(data.trangNguyenQuestions.map(q => q.exp))};

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
        rankEl.innerText = 'Trạng Nguyên Giáo Dục Công Dân 6 (Thủ Khoa Đất Việt)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-amber-400 text-slate-900 flex items-center justify-center text-3xl shadow-lg ring-4 ring-amber-200';
        badgeEl.innerHTML = '<i class="fa-solid fa-crown text-amber-900"></i>';
        commentEl.innerText = 'Xuất sắc tuyệt đỉnh! Em đã nắm vững toàn diện các giá trị đạo đức cao đẹp, kỹ năng sinh tồn và quyền nghĩa vụ công dân Việt Nam!';
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      } else if (score >= 19) {
        rankEl.innerText = 'Bảng Nhãn Giáo Dục Công Dân (Công Dân Gương Mẫu)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-blue-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-blue-200';
        badgeEl.innerHTML = '<i class="fa-solid fa-medal text-white"></i>';
        commentEl.innerText = 'Rất đáng khen ngợi! Em hiểu bài sâu sắc, xử lý tình huống thông minh và nhớ chính xác các số hotline cứu trợ!';
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } else if (score >= 14) {
        rankEl.innerText = 'Thám Hoa Giáo Dục Công Dân (Chăm Ngoan Hiếu Học)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-indigo-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-indigo-200';
        badgeEl.innerHTML = '<i class="fa-solid fa-award text-white"></i>';
        commentEl.innerText = 'Làm tốt lắm! Em đã hoàn thành hầu hết các câu hỏi cốt lõi của chương trình lớp 6!';
      } else {
        rankEl.innerText = 'Sĩ Tử Cần Cù (Học Hỏi Tiến Bộ)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-slate-400 text-white flex items-center justify-center text-3xl shadow-lg';
        badgeEl.innerHTML = '<i class="fa-solid fa-book-open-reader text-white"></i>';
        commentEl.innerText = 'Em hãy ôn lại bài học về 4 nhóm quyền trẻ em và hotline khẩn cấp rồi thử sức lại nhé. Cố lên!';
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

const outPath1 = path.join(__dirname, 'cs-learning-platform', 'courses', 'gdcd_6.html');
const outPath2 = path.join(__dirname, 'cs-learning-platform', 'courses', 'civics_6.html');

fs.writeFileSync(outPath1, html, 'utf8');
console.log(`Successfully generated ${outPath1} (${html.length} bytes)`);

fs.writeFileSync(outPath2, html, 'utf8');
console.log(`Successfully generated alias ${outPath2}`);
